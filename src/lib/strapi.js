import qs from "qs";

const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL || "http://ec2-13-218-128-154.compute-1.amazonaws.com";
const STRAPI_TOKEN = import.meta.env.STRAPI_API_TOKEN;

export async function fetchAPI(path, options = {}) {
  const { 
    populate = {},
    filters = {},
    sort = [],
    pagination = {},
    fields = []
  } = options;

  // Construir query con qs (como en el ejemplo de Strapi v5)
  const query = qs.stringify({
    populate,
    filters,
    sort,
    pagination,
    fields
  }, { encodeValuesOnly: true });

  const url = new URL(`/api${path}`, STRAPI_URL);
  if (query) url.search = query;

  const headers = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
  }

  try {
    const response = await fetch(url, { 
      headers,
      // Timeout más corto para evitar conexiones colgadas
      signal: AbortSignal.timeout(10000) // 10 segundos
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Strapi error response:', {
        status: response.status,
        statusText: response.statusText,
        url: url.toString(),
        errorText
      });
      throw new Error(`Failed to fetch from Strapi: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Strapi fetch error:', error.message);
    throw error;
  }
}

// Helper para construir URLs de imágenes de Strapi
export function getStrapiMedia(url) {
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

// Helper para obtener el SVG del ícono como string
export async function getStrapiSVG(iconoUrl) {
  if (!iconoUrl) return '';
  
  try {
    const response = await fetch(getStrapiMedia(iconoUrl));
    if (!response.ok) return '';
    const svgContent = await response.text();
    // Verificar que el contenido sea realmente un SVG
    if (svgContent && svgContent.trim().includes('<svg')) {
      return svgContent.trim();
    }
    return '';
  } catch (error) {
    console.error('Error fetching SVG:', error);
    return '';
  }
}

// Funciones específicas para tu aplicación
export async function getCategorias() {
  return await fetchAPI('/categorias', {
    populate: {
      imagen: {
        fields: ['url', 'alternativeText', 'name']
      }
    },
    sort: ['createdAt:asc']
  });
}

export async function getProductosDestacados() {
  return await fetchAPI('/productos', {
    filters: {
      destacado: { $eq: true }
    },
    populate: {
      imagen: {
        fields: ['url', 'alternativeText', 'name']
      },
      categoria: {
        fields: ['nombre', 'Color', 'slug']
      },
      icono_caracteristica: {
        fields: ['url']
      }
    },
    sort: ['createdAt:asc']
  });
}

// Función para obtener una categoría específica por slug
export async function getCategoriaBySlug(slug) {
  return await fetchAPI('/categorias', {
    filters: {
      slug: { $eq: slug }
    },
    populate: {
      imagen: {
        fields: ['url', 'alternativeText', 'name']
      }
    }
  });
}

// Función para obtener productos de una categoría específica
export async function getProductosByCategoria(categoriaSlug) {
  return await fetchAPI('/productos', {
    filters: {
      categoria: {
        slug: { $eq: categoriaSlug }
      }
    },
    populate: {
      imagen: {
        fields: ['url', 'alternativeText', 'name']
      },
      categoria: {
        fields: ['nombre', 'Color', 'slug']
      },
      icono_caracteristica: {
        fields: ['url']
      }
    },
    sort: ['createdAt:asc']
  });
}

// Función para obtener todas las categorías (para generateStaticPaths)
export async function getAllCategoriasSlugs() {
  return await fetchAPI('/categorias', {
    fields: ['slug']
  });
}

// Función para obtener un producto específico por slug
export async function getProductoBySlug(slug) {
  return await fetchAPI('/productos', {
    filters: {
      slug: { $eq: slug }
    },
    populate: {
      imagen: {
        fields: ['url', 'alternativeText', 'name']
      },
      categoria: {
        fields: ['nombre', 'Color', 'slug']
      },
      icono_caracteristica: {
        fields: ['url']
      },
      pdf: {
        fields: ['url', 'name']
      }
    }
  });
}

// Función para obtener todos los productos (para generateStaticPaths)
export async function getAllProductosSlugs() {
  return await fetchAPI('/productos', {
    fields: ['slug']
  });
}

// Función para obtener todos los productos (para búsqueda del lado del cliente)
export async function getAllProductos() {
  return await fetchAPI('/productos', {
    populate: {
      imagen: {
        fields: ['url', 'alternativeText', 'name']
      },
      categoria: {
        fields: ['nombre', 'Color', 'slug']
      },
      icono_caracteristica: {
        fields: ['url']
      }
    },
    sort: ['nombre:asc']
  });
}

// Función para buscar productos por palabras clave
export async function searchProductos(query) {
  if (!query || query.trim() === '') {
    return { data: [] }; // Retorna vacío si no hay consulta
  }

  return await fetchAPI('/productos', {
    filters: {
      $or: [
        {
          nombre: {
            $containsi: query // $containsi = contiene (case insensitive)
          }
        },
        {
          descripcion: {
            $containsi: query
          }
        }
      ]
    },
    populate: {
      imagen: {
        fields: ['url', 'alternativeText', 'name']
      },
      categoria: {
        fields: ['nombre', 'Color', 'slug']
      },
      icono_caracteristica: {
        fields: ['url']
      }
    },
    sort: ['nombre:asc']
  });
}

// ====== FUNCIONES DE AUTENTICACIÓN ======

// Función para registrar usuario
export async function registerUser(userData) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userData.email, // Strapi usa username, pero podemos usar email
        email: userData.email,
        password: userData.password,
        firstname: userData.firstname,
        lastname: userData.lastname,
        phone: userData.phone,
        company: userData.company,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Error en el registro');
    }

    return data;
  } catch (error) {
    console.error('Error en registro:', error);
    throw error;
  }
}

// Función para iniciar sesión
export async function loginUser(credentials) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: credentials.email,
        password: credentials.password,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Error en el inicio de sesión');
    }

    return data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
}

// Función para obtener datos del usuario actual
export async function getCurrentUser(token) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/users/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Error al obtener usuario');
    }

    return data;
  } catch (error) {
    console.error('Error obteniendo usuario:', error);
    throw error;
  }
}

// Función para crear una cotización
export async function createCotizacion(cotizacionData, token) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/cotizaciones`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: cotizacionData
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Error al crear cotización');
    }

    return data;
  } catch (error) {
    console.error('Error creando cotización:', error);
    throw error;
  }
}

// Función para obtener cotizaciones del usuario
export async function getUserCotizaciones(token) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/cotizaciones?populate=*`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Error al obtener cotizaciones');
    }

    return data;
  } catch (error) {
    console.error('Error obteniendo cotizaciones:', error);
    throw error;
  }
}
