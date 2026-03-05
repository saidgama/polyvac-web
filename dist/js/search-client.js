// Buscador del lado del cliente para productos Polyvac
// Utiliza los datos de productos.js

// Datos de productos para búsqueda (versión simplificada sin imports de imágenes)
const productosData = [
  {
    id: "aquaflex",
    titulo: "AQUAFLEX",
    descripcion: "Tinta base agua formuladas para la estampación textil directa en Algodón 100%, totalmente libres de gas Nafta, metales pesados, PVC y Orto-Ftalatos.",
    categoria: "estampado",
    taxonomias: ["Para algodón", "Tintas base agua"]
  },
  {
    id: "plastisol",
    titulo: "PLASTISOL VM",
    descripcion: "Tintas tipo plastisol formuladas para fondos claros y campañas políticas, utilizadas para realizar estampados en tela de algodón 100% de terminado ahulado.",
    categoria: "estampado",
    taxonomias: ["Para algodón", "Para fondos claros", "Tintas plastisol"]
  },
  {
    id: "ahulada",
    titulo: "Ahulada A.O.",
    descripcion: "Tintas tipo plastisol formuladas libres de metales pesados para fondos obscuros de algodón 100%, con alto contenido de sólidos y buen poder cubriente.",
    categoria: "estampado",
    taxonomias: ["Para algodón", "Para fondos oscuros", "Tintas plastisol"]
  },
  {
    id: "plastivac",
    titulo: "Plastivac VS",
    descripcion: "Tintas tipo plastisol formuladas libres de metales pesados y ftalatos, para estampaciones en tela de algodón 100% con terminado ahulado.",
    categoria: "estampado",
    taxonomias: ["Para algodón", "Tintas plastisol"]
  },
  {
    id: "polyprint",
    titulo: "PIGMENTOS POLYPRINT",
    descripcion: "Pigmentos orgánicos e inorgánicos dispersados en base agua que deben ser fijados por medio de Binders. Excelente solidez al frote.",
    categoria: "estampado",
    taxonomias: ["Pigmentos"]
  },
  {
    id: "polytransfer",
    titulo: "POLYTRANSFER",
    descripcion: "Colorantes líquidos concentrados para sublimación, desarrollados para integrarse a pastas de sublimación base agua o solvente.",
    categoria: "estampado",
    taxonomias: ["Colorantes", "Tintas de sublimación"]
  },
  {
    id: "sublisol",
    titulo: "SUBLISOL",
    descripcion: "Tintas de sublimación base solvente para impresiones en papel por serigrafía y termo-transferir a tela poliéster 100%.",
    categoria: "estampado",
    taxonomias: ["Para poliéster", "Tintas de sublimación"]
  },
  {
    id: "sublivac",
    titulo: "SUBLIVAC",
    descripcion: "Tintas de sublimación base agua para impresiones en papel por serigrafía y termo-transferir a tela poliéster 100%.",
    categoria: "estampado",
    taxonomias: ["Para poliéster", "Tintas base agua", "Tintas de sublimación"]
  },
  {
    id: "colorantes-directos",
    titulo: "Colorantes Directos",
    descripcion: "Línea completa de colorantes directos para teñido textil. Colorantes VACDIR para diferentes aplicaciones.",
    categoria: "estampado",
    taxonomias: ["Colorantes"]
  },
  {
    id: "colorantes-basicos",
    titulo: "Colorantes Basicos",
    descripcion: "Línea completa de colorantes básicos. Colorantes VACRYL para diversas aplicaciones textiles.",
    categoria: "estampado",
    taxonomias: ["Colorantes"]
  },
  {
    id: "colorantes-acidos",
    titulo: "Colorantes Acidos",
    descripcion: "Línea completa de colorantes ácidos. Colorantes VACID para aplicaciones especializadas.",
    categoria: "estampado",
    taxonomias: ["Colorantes"]
  },
  {
    id: "colores-flock",
    titulo: "Colores Flock",
    descripcion: "Gama de Colores Flock para acabados aterciopelados en textiles. Fibras cortas de alta calidad.",
    categoria: "estampado",
    taxonomias: ["Efectos especiales"]
  },
  {
    id: "colores-micas",
    titulo: "Colores Micas",
    descripcion: "Gama de Colores Micas Magna Pearl para efectos perlados e iridiscentes en estampación.",
    categoria: "estampado",
    taxonomias: ["Efectos especiales", "Pigmentos"]
  },
  {
    id: "colores-glitters",
    titulo: "Colores Glitters",
    descripcion: "Gama de Colores Glitters para efectos brillantes y metalizados. Partículas en diferentes tamaños.",
    categoria: "estampado",
    taxonomias: ["Efectos especiales"]
  },
  {
    id: "gama-mallas",
    titulo: "Gama de Mallas",
    descripcion: "Mallas de alta tensión y precisión para serigrafía, disponibles en diferentes numeraciones para todo tipo de trabajos.",
    categoria: "estampado",
    taxonomias: ["Mallas", "Accesorios"]
  },
  {
    id: "pigmentos-en-polvo",
    titulo: "Pigmentos en Polvo",
    descripcion: "Gama completa de pigmentos en polvo para diversas aplicaciones. Incluye fluorescentes, orgánicos e inorgánicos.",
    categoria: "estampado",
    taxonomias: ["Pigmentos"]
  }
];

// Clase para el buscador del cliente
class PolyvacSearch {
  constructor() {
    this.productos = productosData;
    this.searchTimeout = null;
    this.minSearchLength = 2;
    this.init();
  }

  init() {
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
    } else {
      this.setupEventListeners();
    }
  }

  setupEventListeners() {
    // Buscador del nav (desktop)
    const navSearchInput = document.getElementById('nav-search-input');
    const navSearchForm = document.getElementById('nav-search-form');
    
    // Buscador móvil
    const mobileSearchInput = document.getElementById('mobile-search-input');
    const mobileSearchForm = document.getElementById('mobile-search-form');

    // Crear contenedor de resultados para desktop
    if (navSearchInput) {
      this.createSearchResultsContainer(navSearchInput, 'nav-search-results');
      navSearchInput.addEventListener('input', (e) => this.handleSearchInput(e, 'nav-search-results'));
      navSearchInput.addEventListener('focus', (e) => this.handleSearchInput(e, 'nav-search-results'));
      navSearchInput.addEventListener('blur', () => this.hideResultsDelayed('nav-search-results'));
      
      // Prevenir submit del form y buscar
      if (navSearchForm) {
        navSearchForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const query = navSearchInput.value.trim();
          if (query.length >= this.minSearchLength) {
            window.location.href = `/busqueda?q=${encodeURIComponent(query)}`;
          }
        });
      }
    }

    // Crear contenedor de resultados para móvil
    if (mobileSearchInput) {
      this.createSearchResultsContainer(mobileSearchInput, 'mobile-search-results');
      mobileSearchInput.addEventListener('input', (e) => this.handleSearchInput(e, 'mobile-search-results'));
      mobileSearchInput.addEventListener('focus', (e) => this.handleSearchInput(e, 'mobile-search-results'));
      mobileSearchInput.addEventListener('blur', () => this.hideResultsDelayed('mobile-search-results'));
      
      if (mobileSearchForm) {
        mobileSearchForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const query = mobileSearchInput.value.trim();
          if (query.length >= this.minSearchLength) {
            window.location.href = `/busqueda?q=${encodeURIComponent(query)}`;
          }
        });
      }
    }

    // Cerrar resultados al hacer clic fuera
    document.addEventListener('click', (e) => {
      const navResults = document.getElementById('nav-search-results');
      const mobileResults = document.getElementById('mobile-search-results');
      
      if (navResults && !navResults.contains(e.target) && e.target.id !== 'nav-search-input') {
        navResults.classList.add('hidden');
      }
      if (mobileResults && !mobileResults.contains(e.target) && e.target.id !== 'mobile-search-input') {
        mobileResults.classList.add('hidden');
      }
    });
  }

  createSearchResultsContainer(inputElement, containerId) {
    // Verificar si ya existe
    if (document.getElementById(containerId)) return;

    const container = document.createElement('div');
    container.id = containerId;
    container.className = 'search-results-dropdown hidden absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto';
    
    // Insertar después del input o su contenedor padre
    const parent = inputElement.closest('form') || inputElement.parentElement;
    if (parent) {
      parent.style.position = 'relative';
      parent.appendChild(container);
    }
  }

  handleSearchInput(event, resultsContainerId) {
    const query = event.target.value.trim();
    
    // Limpiar timeout anterior
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    // Si la búsqueda es muy corta, ocultar resultados
    if (query.length < this.minSearchLength) {
      this.hideResults(resultsContainerId);
      return;
    }

    // Debounce de 200ms para evitar búsquedas excesivas
    this.searchTimeout = setTimeout(() => {
      const results = this.search(query);
      this.displayResults(results, query, resultsContainerId);
    }, 200);
  }

  search(query) {
    const normalizedQuery = this.normalizeString(query);
    const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 1);
    
    return this.productos
      .map(producto => {
        let score = 0;
        const normalizedTitle = this.normalizeString(producto.titulo);
        const normalizedDesc = this.normalizeString(producto.descripcion);
        const normalizedTaxonomias = producto.taxonomias.map(t => this.normalizeString(t)).join(' ');

        // Coincidencia exacta en título (mayor peso)
        if (normalizedTitle.includes(normalizedQuery)) {
          score += 100;
        }

        // Coincidencia por palabras en título
        queryWords.forEach(word => {
          if (normalizedTitle.includes(word)) {
            score += 50;
          }
        });

        // Coincidencia en descripción
        if (normalizedDesc.includes(normalizedQuery)) {
          score += 30;
        }

        // Coincidencia por palabras en descripción
        queryWords.forEach(word => {
          if (normalizedDesc.includes(word)) {
            score += 15;
          }
        });

        // Coincidencia en taxonomías
        if (normalizedTaxonomias.includes(normalizedQuery)) {
          score += 40;
        }

        queryWords.forEach(word => {
          if (normalizedTaxonomias.includes(word)) {
            score += 20;
          }
        });

        return { ...producto, score };
      })
      .filter(producto => producto.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8); // Limitar a 8 resultados
  }

  normalizeString(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remover acentos
      .replace(/[^a-z0-9\s]/g, ''); // Remover caracteres especiales
  }

  displayResults(results, query, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (results.length === 0) {
      container.innerHTML = `
        <div class="p-4 text-center text-gray-500">
          <p class="text-sm">No se encontraron productos para "${query}"</p>
        </div>
      `;
      container.classList.remove('hidden');
      return;
    }

    const html = results.map(producto => `
      <a href="/producto/${producto.id}" class="search-result-item block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors">
        <div class="font-medium text-gray-900 text-sm">${this.highlightMatch(producto.titulo, query)}</div>
        <div class="text-xs text-gray-500 mt-1 line-clamp-1">${this.highlightMatch(producto.descripcion, query)}</div>
        ${producto.taxonomias.length > 0 ? `
          <div class="flex flex-wrap gap-1 mt-1">
            ${producto.taxonomias.slice(0, 2).map(t => `
              <span class="text-xs bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">${t}</span>
            `).join('')}
          </div>
        ` : ''}
      </a>
    `).join('');

    container.innerHTML = `
      ${html}
      <a href="/busqueda?q=${encodeURIComponent(query)}" class="block px-4 py-3 text-center text-sm text-azulprimario hover:bg-blue-50 font-medium transition-colors">
        Ver todos los resultados →
      </a>
    `;
    
    container.classList.remove('hidden');
  }

  highlightMatch(text, query) {
    if (!query) return text;
    
    const normalizedQuery = this.normalizeString(query);
    const words = normalizedQuery.split(/\s+/).filter(w => w.length > 1);
    
    let result = text;
    words.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      result = result.replace(regex, '<mark class="bg-yellow-200 rounded px-0.5">$1</mark>');
    });
    
    return result;
  }

  hideResults(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      container.classList.add('hidden');
    }
  }

  hideResultsDelayed(containerId) {
    // Delay para permitir hacer clic en los resultados
    setTimeout(() => {
      this.hideResults(containerId);
    }, 200);
  }
}

// Inicializar el buscador
window.polyvacSearch = new PolyvacSearch();

// Manejar submit de formularios de búsqueda para redirigir a /busqueda
document.addEventListener('DOMContentLoaded', function() {
  // Formulario del navbar (desktop)
  const navSearchForm = document.getElementById('nav-search-form');
  if (navSearchForm) {
    navSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const input = document.getElementById('nav-search-input');
      const query = input.value.trim();
      if (query) {
        window.location.href = `/busqueda?q=${encodeURIComponent(query)}`;
      }
    });
  }

  // Formulario móvil
  const mobileSearchForm = document.getElementById('mobile-search-form');
  if (mobileSearchForm) {
    mobileSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const input = document.getElementById('mobile-search-input');
      const query = input.value.trim();
      if (query) {
        window.location.href = `/busqueda?q=${encodeURIComponent(query)}`;
      }
    });
  }
});
