// Script para proteger rutas que requieren autenticación
(function() {
  'use strict';
  
  // Rutas que requieren autenticación
  const protectedRoutes = ['/cotizador'];
  
  // Función para verificar si la ruta actual está protegida
  function isProtectedRoute() {
    const currentPath = window.location.pathname;
    return protectedRoutes.includes(currentPath);
  }
  
  // Función para redirigir a login
  function redirectToLogin() {
    const currentPath = window.location.pathname;
    const redirectUrl = encodeURIComponent(currentPath);
    window.location.href = `/cuenta?redirect=${redirectUrl}`;
  }
  
  // Función para verificar autenticación
  function checkAuthentication() {
    if (!isProtectedRoute()) {
      return; // No es una ruta protegida
    }
    
    // Verificar si el usuario está autenticado
    if (!window.polyvacAuth || !window.polyvacAuth.isLoggedIn()) {
      redirectToLogin();
      return false;
    }
    
    return true;
  }
  
  // Ejecutar verificación cuando se carga la página
  document.addEventListener('DOMContentLoaded', function() {
    // Esperar un poco para que se cargue el auth manager
    setTimeout(checkAuthentication, 100);
  });
  
  // Escuchar cambios en la URL (para SPAs)
  window.addEventListener('popstate', function() {
    setTimeout(checkAuthentication, 100);
  });
  
  // Interceptar navegación programática
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;
  
  history.pushState = function() {
    originalPushState.apply(history, arguments);
    setTimeout(checkAuthentication, 100);
  };
  
  history.replaceState = function() {
    originalReplaceState.apply(history, arguments);
    setTimeout(checkAuthentication, 100);
  };
  
  // Exportar función para uso manual
  window.checkRouteAuth = checkAuthentication;
})();
