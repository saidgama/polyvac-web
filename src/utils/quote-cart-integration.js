// Integration guide for adding products to the quote cart
// Add this to individual product pages

// Example of how to add a product to the cart from a product page:

function addToQuoteCart(productData) {
  // Check if the quote cart is available
  if (window.polyvacQuoteCart) {
    window.polyvacQuoteCart.addItem(productData);
  } else {
    // Fallback: save to localStorage for cart to pick up
    const storageKey = 'polyvac-quote-cart';
    let items = [];
    
    try {
      const stored = localStorage.getItem(storageKey);
      items = stored ? JSON.parse(stored) : [];
    } catch {
      items = [];
    }
    
    // Check if item already exists
    const existingIndex = items.findIndex(item => item.id === productData.id);
    
    if (existingIndex === -1) {
      items.push({
        ...productData,
        addedAt: new Date().toISOString()
      });
      
      localStorage.setItem(storageKey, JSON.stringify(items));
      
      // Show success message
      alert(`${productData.name} agregado al cotizador`);
      
      // Update cart counter in header
      updateCartCounter();
    } else {
      alert(`${productData.name} ya está en el cotizador`);
    }
  }
}

// Function to update the cart counter in the header
function updateCartCounter() {
  const storageKey = 'polyvac-quote-cart';
  let items = [];
  
  try {
    const stored = localStorage.getItem(storageKey);
    items = stored ? JSON.parse(stored) : [];
  } catch {
    items = [];
  }
  
  // Update the counter badge in the header
  const counterElement = document.querySelector('.bg-azulprimario.rounded-full');
  if (counterElement) {
    counterElement.textContent = items.length;
  }
}

// Example usage in a product page:
// const productData = {
//   id: 'aquaflex',
//   name: 'AQUAFLEX',
//   category: 'Serigrafía',
//   description: 'Tinta base agua para estampación textil directa en algodón 100%',
//   image: '/path/to/product/image.jpg'
// };
// 
// addToQuoteCart(productData);
