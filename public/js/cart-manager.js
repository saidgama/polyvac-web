/**
 * Sistema Global de Carrito Cotizador - Industrias Polyvac
 * Maneja el carrito de cotización en todas las páginas
 */
(function() {
  'use strict';
  
  class PolyvacCart {
    constructor() {
      this.storageKey = 'polyvac-quote-cart';
      this.items = this.loadFromStorage();
      this.callbacks = [];
      this.init();
    }

    init() {
      this.updateAllCounters();
      // Escuchar cambios de localStorage en otras pestañas
      window.addEventListener('storage', (e) => {
        if (e.key === this.storageKey) {
          this.items = this.loadFromStorage();
          this.updateAllCounters();
          this.notifyCallbacks();
        }
      });
    }

    loadFromStorage() {
      try {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : [];
      } catch (error) {
        console.error('Error loading cart from storage:', error);
        return [];
      }
    }

    saveToStorage() {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.items));
        // Disparar evento personalizado para sincronización
        window.dispatchEvent(new CustomEvent('cartUpdated', { 
          detail: { count: this.items.length, items: this.items }
        }));
      } catch (error) {
        console.error('Error saving cart:', error);
      }
    }

    addItem(product) {
      const existingIndex = this.items.findIndex(item => item.id === product.id);
      
      if (existingIndex === -1) {
        this.items.push({
          id: product.id,
          slug: product.slug,
          name: product.name,
          description: product.description,
          category: product.category,
          image: product.image,
          addedAt: new Date().toISOString()
        });
        
        this.saveToStorage();
        this.updateAllCounters();
        this.notifyCallbacks();
        this.showNotification(`${product.name} agregado al cotizador`, 'success');
        return true;
      } else {
        this.showNotification(`${product.name} ya está en el cotizador`, 'info');
        return false;
      }
    }

    removeItem(productId) {
      const item = this.items.find(item => item.id === productId);
      this.items = this.items.filter(item => item.id !== productId);
      
      this.saveToStorage();
      this.updateAllCounters();
      this.notifyCallbacks();
      
      if (item) {
        this.showNotification(`${item.name} eliminado del cotizador`, 'success');
      }
    }

    clearCart() {
      this.items = [];
      this.saveToStorage();
      this.updateAllCounters();
      this.notifyCallbacks();
      this.showNotification('Cotizador vaciado', 'success');
    }

    getItems() {
      return [...this.items];
    }

    getCount() {
      return this.items.length;
    }

    isInCart(productId) {
      return this.items.some(item => item.id === productId);
    }

    updateAllCounters() {
      // Actualizar todos los contadores en la página
      const counters = document.querySelectorAll('[data-cart-counter]');
      const count = this.getCount();
      
      counters.forEach(counter => {
        const wasHidden = counter.style.display === 'none';
        counter.textContent = count;
        // Mostrar/ocultar badge si es necesario
        if (count === 0) {
          counter.style.display = 'none';
        } else {
          counter.style.display = 'flex';
          // Si el contador estaba oculto y ahora se muestra, agregar animación de entrada
          if (wasHidden && count === 1) {
            counter.style.transform = 'scale(0)';
            counter.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            setTimeout(() => {
              counter.style.transform = 'scale(1)';
            }, 50);
            setTimeout(() => {
              counter.style.transition = '';
            }, 350);
          }
        }
      });
    }

    // Sistema de callbacks para páginas específicas
    onUpdate(callback) {
      this.callbacks.push(callback);
      return () => this.offUpdate(callback);
    }

    offUpdate(callback) {
      this.callbacks = this.callbacks.filter(cb => cb !== callback);
    }

    notifyCallbacks() {
      this.callbacks.forEach(callback => {
        try {
          callback(this.items, this.getCount());
        } catch (error) {
          console.error('Error in cart callback:', error);
        }
      });
    }

    showNotification(message, type = 'info') {
      // Remover notificaciones existentes
      const existingToasts = document.querySelectorAll('.polyvac-toast');
      existingToasts.forEach(toast => toast.remove());

      const toast = document.createElement('div');
      const bgColor = type === 'success' ? 'bg-green-500' : 
                     type === 'error' ? 'bg-red-500' : 'bg-blue-500';
      
      toast.className = `polyvac-toast fixed top-25 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-40 max-w-sm transition-all duration-300 transform translate-x-full`;
      toast.innerHTML = `
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span class="text-sm">${message}</span>
        </div>
      `;
      
      document.body.appendChild(toast);
      
      // Animar entrada
      setTimeout(() => toast.classList.remove('translate-x-full'), 100);
      
      // Animar salida y remover
      setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }
  }

  // Función para inicializar el carrito cuando el DOM esté listo
  function initializeCart() {
    if (!window.polyvacCart) {
      window.polyvacCart = new PolyvacCart();
    }
  }

  // Inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCart);
  } else {
    initializeCart();
  }
})();
