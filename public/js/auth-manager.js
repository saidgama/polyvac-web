// Sistema de gestión de autenticación del lado del cliente
class AuthManager {
  constructor() {
    this.isAuthenticated = false;
    this.user = null;
    this.token = null;
    this.callbacks = {
      login: [],
      logout: [],
      error: []
    };
    
    this.init();
  }

  init() {
    // Verificar si hay una sesión guardada
    this.checkStoredSession();
    
    // Configurar interceptores para requests
    this.setupInterceptors();
  }

  // Verificar sesión guardada en localStorage
  checkStoredSession() {
    try {
      const storedToken = localStorage.getItem('polyvac_token');
      const storedUser = localStorage.getItem('polyvac_user');
      
      if (storedToken && storedUser) {
        this.token = storedToken;
        this.user = JSON.parse(storedUser);
        this.isAuthenticated = true;
        
        // Verificar que el token siga siendo válido
        this.validateToken();
      }
    } catch (error) {
      console.error('Error verificando sesión:', error);
      this.logout();
    }
  }

  // Validar token con el servidor
  async validateToken() {
    if (!this.token) return false;
    
    try {
      const response = await fetch(`${this.getStrapiUrl()}/api/users/me`, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        this.logout();
        return false;
      }

      const userData = await response.json();
      this.user = userData;
      this.updateStoredUser(userData);
      return true;
    } catch (error) {
      console.error('Error validando token:', error);
      this.logout();
      return false;
    }
  }

  // Obtener URL de Strapi
  getStrapiUrl() {
    // Para producción
    return 'http://ec2-13-218-128-154.compute-1.amazonaws.com/panel';
  }

  // Verificar conexión con Strapi
  async checkStrapiConnection() {
    try {
      // Usar un endpoint público como /api/ping o /healthcheck si existe
      // Si no, usaremos una simple petición HEAD al servidor
      const response = await fetch(`${this.getStrapiUrl()}`, {
        method: 'HEAD',
      });
      
      // Si llega aquí, Strapi está disponible
      return true;
    } catch (error) {
      console.error('Error conectando con Servidor:', error);
      return false;
    }
  }

  // Iniciar sesión
  async login(credentials) {
    try {
      // Verificar conexión con Strapi
      const isConnected = await this.checkStrapiConnection();
      if (!isConnected) {
        throw new Error('No se puede conectar con el servidor. Verifica tu conexión a internet.');
      }

      const response = await fetch(`${this.getStrapiUrl()}/api/auth/local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: credentials.email,
          password: credentials.password,
        }),
      });

      // Obtener datos independientemente del status code
      let data;
      try {
        data = await response.json();
      } catch (e) {
        // Si no puede parsear la respuesta
        throw new Error('Error en la comunicación con el servidor');
      }

      if (!response.ok) {
        // Proporcionar mensajes de error más específicos
        if (response.status === 400) {
          // Lanzar error para credenciales inválidas como antes
          throw new Error('Email o contraseña incorrectos');
        } else {
          throw new Error(data.error?.message || 'Error en el inicio de sesión');
        }
      }

      // Guardar datos de autenticación
      this.token = data.jwt;
      this.user = data.user;
      this.isAuthenticated = true;

      // Persistir en localStorage
      localStorage.setItem('polyvac_token', this.token);
      localStorage.setItem('polyvac_user', JSON.stringify(this.user));

      // Notificar callbacks
      this.notifyCallbacks('login', this.user);

      return { success: true, user: this.user };
    } catch (error) {
      this.notifyCallbacks('error', error);
      throw error;
    }
  }

  // Registrar usuario
  async register(userData) {
    try {
      // Verificar conexión con Strapi
      const isConnected = await this.checkStrapiConnection();
      if (!isConnected) {
        throw new Error('No se puede conectar con el servidor. Verifica tu conexión a internet.');
      }

      // Preparar datos de registro completos
      const registrationData = {
        username: userData.email,
        email: userData.email,
        password: userData.password,
        firstname: userData.firstname,
        lastname: userData.lastname,
        phone: userData.phone
      };

      const response = await fetch(`${this.getStrapiUrl()}/api/auth/local/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      // Obtener datos independientemente del status code
      let data;
      try {
        data = await response.json();
      } catch (e) {
        // Si no puede parsear la respuesta
        throw new Error('Error en la comunicación con el servidor');
      }

      if (!response.ok) {
        // Proporcionar mensajes de error más específicos
        if (response.status === 400) {
          const errorMessage = data.error?.message || 'Datos de registro inválidos';
          
          // Si hay detalles específicos sobre campos inválidos
          if (data.error?.details?.errors) {
            const fieldErrors = data.error.details.errors.map(err => err.path?.join('.') || err.message).join(', ');
            throw new Error(`Campos inválidos: ${fieldErrors}`);
          }
          
          if (errorMessage.includes('Email')) {
            throw new Error('Este email ya está registrado');
          } else if (errorMessage.includes('username')) {
            throw new Error('Este nombre de usuario ya está en uso');
          } else if (errorMessage.includes('password')) {
            throw new Error('La contraseña no cumple con los requisitos');
          } else {
            throw new Error(errorMessage);
          }
        } else {
          throw new Error(data.error?.message || 'Error en el registro');
        }
      }

      // Guardar datos de autenticación
      this.token = data.jwt;
      this.user = data.user;
      this.isAuthenticated = true;

      // Persistir en localStorage
      localStorage.setItem('polyvac_token', this.token);
      localStorage.setItem('polyvac_user', JSON.stringify(this.user));

      // Si llegamos aquí, el registro fue exitoso
      return { success: true, user: data.user };
    } catch (error) {
      this.notifyCallbacks('error', error);
      throw error;
    }
  }

  // Actualizar perfil de usuario
  async updateUserProfile(token, userId, profileData) {
    try {
      // Filtrar campos vacíos
      const filteredData = {};
      Object.keys(profileData).forEach(key => {
        if (profileData[key] && profileData[key].toString().trim() !== '') {
          filteredData[key] = profileData[key];
        }
      });

      const response = await fetch(`${this.getStrapiUrl()}/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filteredData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Error actualizando perfil');
      }

      const updatedUser = await response.json();
      return updatedUser;
    } catch (error) {
      console.error('Error actualizando perfil:', error);
      throw error;
    }
  }

  // Cerrar sesión
  logout() {
    this.isAuthenticated = false;
    this.user = null;
    this.token = null;

    // Limpiar localStorage
    localStorage.removeItem('polyvac_token');
    localStorage.removeItem('polyvac_user');

    // Notificar callbacks
    this.notifyCallbacks('logout');
  }

  // Actualizar usuario almacenado
  updateStoredUser(userData) {
    this.user = userData;
    localStorage.setItem('polyvac_user', JSON.stringify(userData));
  }

  // Verificar si el usuario está autenticado
  isLoggedIn() {
    return this.isAuthenticated && this.token && this.user;
  }

  // Obtener usuario actual
  getCurrentUser() {
    return this.user;
  }

  // Obtener token actual
  getToken() {
    return this.token;
  }

  // Hacer request autenticado
  async authenticatedRequest(url, options = {}) {
    if (!this.isLoggedIn()) {
      throw new Error('Usuario no autenticado');
    }

    const requestOptions = {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, requestOptions);

    if (response.status === 401) {
      this.logout();
      throw new Error('Sesión expirada');
    }

    return response;
  }

  // Configurar interceptores
  setupInterceptors() {
    // Ya no necesitamos interceptar rutas protegidas
    // Mantenemos el método por compatibilidad pero sin funcionalidad
  }

  // Interceptar rutas protegidas
  interceptProtectedRoutes() {
    const protectedRoutes = []; // Removido '/cotizador' ya que ahora es de acceso libre
    
    // Verificar ruta actual
    if (protectedRoutes.includes(window.location.pathname)) {
      if (!this.isLoggedIn()) {
        this.redirectToLogin();
        return;
      }
    }
  }

  // Redirigir a login
  redirectToLogin() {
    const currentPath = window.location.pathname;
    const redirectUrl = encodeURIComponent(currentPath);
    window.location.href = `/cuenta?redirect=${redirectUrl}`;
  }

  // Redirigir después del login
  redirectAfterLogin() {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    
    if (redirect) {
      window.location.href = decodeURIComponent(redirect);
    } else {
      window.location.href = '/';
    }
  }

  // Suscribirse a eventos
  on(event, callback) {
    if (this.callbacks[event]) {
      this.callbacks[event].push(callback);
    }
  }

  // Cancelar suscripción
  off(event, callback) {
    if (this.callbacks[event]) {
      const index = this.callbacks[event].indexOf(callback);
      if (index > -1) {
        this.callbacks[event].splice(index, 1);
      }
    }
  }

  // Notificar callbacks
  notifyCallbacks(event, data = null) {
    if (this.callbacks[event]) {
      this.callbacks[event].forEach(callback => {
        try {
          callback(data);
        } catch (error) {
          console.error('Error en callback:', error);
        }
      });
    }
    
    // Emitir eventos globales para que otros componentes puedan escuchar
    if (typeof window !== 'undefined') {
      const eventName = event === 'login' ? 'authLogin' : event === 'logout' ? 'authLogout' : `auth${event}`;
      window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
    }
  }

  // Crear cotización
  async createCotizacion(cotizacionData) {
    if (!this.isLoggedIn()) {
      throw new Error('Debe iniciar sesión para crear una cotización');
    }

    try {
      const response = await this.authenticatedRequest(`${this.getStrapiUrl()}/api/cotizaciones`, {
        method: 'POST',
        body: JSON.stringify({
          data: {
            ...cotizacionData,
            usuario: this.user.id
          }
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

  // Obtener cotizaciones del usuario
  async getUserCotizaciones() {
    if (!this.isLoggedIn()) {
      throw new Error('Debe iniciar sesión para ver sus cotizaciones');
    }

    try {
      const response = await this.authenticatedRequest(
        `${this.getStrapiUrl()}/api/cotizaciones?filters[usuario]=${this.user.id}&populate=*`
      );

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

  // Solicitar reseteo de contraseña
  async requestPasswordReset(email) {
    try {
      const response = await fetch(`${this.getStrapiUrl()}/api/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (e) {
        throw new Error('Error en la comunicación con el servidor');
      }

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error('Email no encontrado en el sistema');
        } else {
          throw new Error(data.error?.message || 'Error al solicitar reseteo de contraseña');
        }
      }

      return { success: true, message: 'Se ha enviado un email con instrucciones para resetear tu contraseña' };
    } catch (error) {
      console.error('Error solicitando reseteo:', error);
      throw error;
    }
  }

  // Resetear contraseña con código
  async resetPassword(code, password, passwordConfirmation) {
    try {
      const response = await fetch(`${this.getStrapiUrl()}/api/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: code,
          password: password,
          passwordConfirmation: passwordConfirmation,
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (e) {
        throw new Error('Error en la comunicación con el servidor');
      }

      if (!response.ok) {
        if (response.status === 400) {
          const errorMessage = data.error?.message || 'Código inválido o expirado';
          if (errorMessage.includes('password')) {
            throw new Error('Las contraseñas no coinciden o no cumplen los requisitos');
          } else if (errorMessage.includes('code')) {
            throw new Error('Código de reseteo inválido o expirado');
          }
          throw new Error(errorMessage);
        } else {
          throw new Error(data.error?.message || 'Error al resetear contraseña');
        }
      }

      // Guardar datos de autenticación después del reset exitoso
      this.token = data.jwt;
      this.user = data.user;
      this.isAuthenticated = true;

      // Persistir en localStorage
      localStorage.setItem('polyvac_token', this.token);
      localStorage.setItem('polyvac_user', JSON.stringify(this.user));

      // Notificar callbacks
      this.notifyCallbacks('login', this.user);

      return { success: true, user: this.user };
    } catch (error) {
      console.error('Error reseteando contraseña:', error);
      throw error;
    }
  }
}

// Crear instancia global
window.polyvacAuth = new AuthManager();
