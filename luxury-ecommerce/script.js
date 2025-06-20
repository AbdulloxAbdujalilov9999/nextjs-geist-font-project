const products = [
  { id: 1, name: "Luxury Watch", price: 1200, category: "tech", image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 2, name: "Elegant Handbag", price: 850, category: "clothes", image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 3, name: "Designer Shoes", price: 1100, category: "clothes", image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 4, name: "Luxury Sunglasses", price: 450, category: "others", image: "https://images.pexels.com/photos/2983463/pexels-photo-2983463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 5, name: "Smartphone", price: 999, category: "tech", image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 6, name: "Wireless Earbuds", price: 199, category: "tech", image: "https://images.pexels.com/photos/339465/pexels-photo-339465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 7, name: "Leather Jacket", price: 650, category: "clothes", image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 8, name: "Silk Scarf", price: 120, category: "clothes", image: "https://images.pexels.com/photos/2983461/pexels-photo-2983461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 9, name: "Luxury Perfume", price: 180, category: "perfumes", image: "https://images.pexels.com/photos/1661475/pexels-photo-1661475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 10, name: "Floral Perfume", price: 150, category: "perfumes", image: "https://images.pexels.com/photos/1661476/pexels-photo-1661476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 11, name: "Gold Necklace", price: 2200, category: "others", image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 12, name: "Luxury Watch 2", price: 1300, category: "tech", image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 13, name: "Elegant Handbag 2", price: 900, category: "clothes", image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 14, name: "Designer Shoes 2", price: 1150, category: "clothes", image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 15, name: "Luxury Sunglasses 2", price: 500, category: "others", image: "https://images.pexels.com/photos/2983463/pexels-photo-2983463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 16, name: "Smartphone 2", price: 1099, category: "tech", image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 17, name: "Wireless Earbuds 2", price: 249, category: "tech", image: "https://images.pexels.com/photos/339465/pexels-photo-339465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 18, name: "Leather Jacket 2", price: 700, category: "clothes", image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 19, name: "Silk Scarf 2", price: 130, category: "clothes", image: "https://images.pexels.com/photos/2983461/pexels-photo-2983461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 20, name: "Luxury Perfume 2", price: 200, category: "perfumes", image: "https://images.pexels.com/photos/1661475/pexels-photo-1661475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 21, name: "Floral Perfume 2", price: 170, category: "perfumes", image: "https://images.pexels.com/photos/1661476/pexels-photo-1661476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" },
  { id: 22, name: "Gold Necklace 2", price: 2300, category: "others", image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentCategory = null;
let isCartWishlistVisible = false;

const productsGrid = document.getElementById('productsGrid');
const cartWishlistSection = document.getElementById('cartWishlistSection');
const cartWishlistContent = document.getElementById('cartWishlistContent');
const cartWishlistTitle = document.getElementById('cartWishlistTitle');
const darkModeToggle = document.getElementById('darkModeToggle');
const cartWishlistToggle = document.getElementById('cartWishlistToggle');
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const navButtons = document.querySelectorAll('.nav-button[data-category]');

function saveState() {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function renderProducts() {
  productsGrid.innerHTML = '';
  let filteredProducts = products;
  if (currentCategory) {
    filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
  }
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm) {
    filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm));
  }
  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.dataset.id = product.id;

    const wishlistActive = wishlist.includes(product.id) ? 'active' : '';

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p class="price">$${product.price}</p>
      <button class="btn-secondary add-to-cart">Add to Cart</button>
      <svg class="wishlist-icon ${wishlistActive}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" title="Add to Wishlist" aria-label="Add to Wishlist" role="img">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    `;

    productsGrid.appendChild(productCard);
  });
  addProductEventListeners();
}

function addProductEventListeners() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.onclick = () => {
      const productId = parseInt(button.parentElement.dataset.id);
      addToCart(productId);
    };
  });

  const wishlistIcons = document.querySelectorAll('.wishlist-icon');
  wishlistIcons.forEach(icon => {
    icon.onclick = () => {
      const productId = parseInt(icon.parentElement.dataset.id);
      toggleWishlist(productId, icon);
    };
  });
}

function addToCart(productId) {
  if (!cart.includes(productId)) {
    cart.push(productId);
    saveState();
    renderCartWishlist();
  } else {
    alert('Product already in cart.');
  }
}

function toggleWishlist(productId, icon) {
  const index = wishlist.indexOf(productId);
  if (index === -1) {
    wishlist.push(productId);
    icon.classList.add('active');
  } else {
    wishlist.splice(index, 1);
    icon.classList.remove('active');
  }
  saveState();
}

function renderCartWishlist() {
  cartWishlistContent.innerHTML = '';
  if (cart.length === 0 && wishlist.length === 0) {
    cartWishlistContent.innerHTML = '<p>Your cart and wishlist are empty.</p>';
    return;
  }

  if (cart.length > 0) {
    const cartTitle = document.createElement('h4');
    cartTitle.textContent = 'Cart Items';
    cartWishlistContent.appendChild(cartTitle);

    cart.forEach(id => {
      const product = products.find(p => p.id === id);
      if (product) {
        const item = createCartWishlistItem(product, 'cart');
        cartWishlistContent.appendChild(item);
      }
    });
  }

  if (wishlist.length > 0) {
    const wishlistTitle = document.createElement('h4');
    wishlistTitle.textContent = 'Wishlist Items';
    cartWishlistContent.appendChild(wishlistTitle);

    wishlist.forEach(id => {
      const product = products.find(p => p.id === id);
      if (product) {
        const item = createCartWishlistItem(product, 'wishlist');
        cartWishlistContent.appendChild(item);
      }
    });
  }
}

function createCartWishlistItem(product, type) {
  const item = document.createElement('div');
  item.className = 'cart-wishlist-item';

  item.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="cart-wishlist-item-info">
      <h4>${product.name}</h4>
      <p>$${product.price}</p>
    </div>
    <button class="remove-button" title="Remove from ${type}">&times;</button>
  `;

  const removeButton = item.querySelector('.remove-button');
  removeButton.onclick = () => {
    if (type === 'cart') {
      cart = cart.filter(id => id !== product.id);
    } else {
      wishlist = wishlist.filter(id => id !== product.id);
      // Also update wishlist icon in product grid
      const productCard = document.querySelector(`.product-card[data-id="${product.id}"]`);
      if (productCard) {
        const icon = productCard.querySelector('.wishlist-icon');
        if (icon) icon.classList.remove('active');
      }
    }
    saveState();
    renderCartWishlist();
    renderProducts();
  };

  return item;
}

function toggleCartWishlistSection() {
  isCartWishlistVisible = !isCartWishlistVisible;
  if (isCartWishlistVisible) {
    cartWishlistSection.classList.remove('hidden');
    renderCartWishlist();
  } else {
    cartWishlistSection.classList.add('hidden');
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}

function loadDarkMode() {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
}

function updateActiveCategoryButton() {
  navButtons.forEach(button => {
    if (button.dataset.category === currentCategory) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function filterByCategory(category) {
  if (currentCategory === category) {
    currentCategory = null;
  } else {
    currentCategory = category;
  }
  updateActiveCategoryButton();
  renderProducts();
}

function setupCategoryButtons() {
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterByCategory(button.dataset.category);
    });
  });
}

function setupSearch() {
  searchInput.addEventListener('input', () => {
    const value = searchInput.value.trim().toLowerCase();
    if (!value) {
      searchSuggestions.innerHTML = '';
      renderProducts();
      return;
    }
    const suggestions = products
      .filter(p => p.name.toLowerCase().includes(value))
      .slice(0, 5);
    searchSuggestions.innerHTML = '';
    suggestions.forEach(suggestion => {
      const li = document.createElement('li');
      li.textContent = suggestion.name;
      li.addEventListener('click', () => {
        searchInput.value = suggestion.name;
        searchSuggestions.innerHTML = '';
        renderProducts();
      });
      searchSuggestions.appendChild(li);
    });
    renderProducts();
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
      searchSuggestions.innerHTML = '';
    }
  });
}

function init() {
  loadDarkMode();
  setupCategoryButtons();
  setupSearch();
  renderProducts();

  darkModeToggle.addEventListener('click', toggleDarkMode);
  cartWishlistToggle.addEventListener('click', toggleCartWishlistSection);
}

document.addEventListener('DOMContentLoaded', init);
