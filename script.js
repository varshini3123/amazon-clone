// ==================== PRODUCT DATA ====================
// Static/dummy product data for the Amazon clone
const products = [
    {
        id: 1,
        title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds",
        category: "electronics",
        price: 249.99,
        originalPrice: 299.99,
        rating: 4.7,
        reviews: 125847,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400",
        badge: "bestseller",
        prime: true
    },
    {
        id: 2,
        title: "Samsung Galaxy S24 Ultra 5G Factory Unlocked Android Smartphone",
        category: "electronics",
        price: 1199.99,
        originalPrice: 1399.99,
        rating: 4.5,
        reviews: 8234,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
        badge: "deal",
        prime: true
    },
    {
        id: 3,
        title: "Nike Air Max 270 Men's Running Shoes Comfortable Sneakers",
        category: "fashion",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.4,
        reviews: 45632,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        badge: null,
        prime: true
    },
    {
        id: 4,
        title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker, 6 Quart",
        category: "home",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.8,
        reviews: 234567,
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400",
        badge: "bestseller",
        prime: true
    },
    {
        id: 5,
        title: "The Psychology of Money: Timeless Lessons on Wealth",
        category: "books",
        price: 14.99,
        originalPrice: 24.99,
        rating: 4.7,
        reviews: 89234,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
        badge: "bestseller",
        prime: true
    },
    {
        id: 6,
        title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
        category: "electronics",
        price: 348.00,
        originalPrice: 399.99,
        rating: 4.6,
        reviews: 15678,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        badge: "deal",
        prime: true
    },
    {
        id: 7,
        title: "Levi's Men's 501 Original Fit Jeans Classic Denim",
        category: "fashion",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.3,
        reviews: 67890,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
        badge: null,
        prime: true
    },
    {
        id: 8,
        title: "COSORI Air Fryer Pro LE 5-Qt, 9 One-Touch Functions",
        category: "home",
        price: 99.99,
        originalPrice: 129.99,
        rating: 4.7,
        reviews: 45678,
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
        badge: "deal",
        prime: true
    },
    {
        id: 9,
        title: "Atomic Habits: An Easy & Proven Way to Build Good Habits",
        category: "books",
        price: 11.99,
        originalPrice: 19.99,
        rating: 4.8,
        reviews: 156789,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
        badge: "bestseller",
        prime: true
    },
    {
        id: 10,
        title: "YETI Rambler 26 oz Bottle, Vacuum Insulated Stainless Steel",
        category: "sports",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.9,
        reviews: 23456,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
        badge: null,
        prime: true
    },
    {
        id: 11,
        title: "Apple Watch Series 9 GPS 45mm Smartwatch with Fitness Tracker",
        category: "electronics",
        price: 399.99,
        originalPrice: 449.99,
        rating: 4.6,
        reviews: 34567,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
        badge: "bestseller",
        prime: true
    },
    {
        id: 12,
        title: "Ray-Ban RB3025 Classic Aviator Sunglasses",
        category: "fashion",
        price: 161.00,
        originalPrice: 199.99,
        rating: 4.5,
        reviews: 12345,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
        badge: null,
        prime: true
    },
    {
        id: 13,
        title: "Ninja Professional Plus Blender 72oz with Auto-iQ",
        category: "home",
        price: 119.99,
        originalPrice: 149.99,
        rating: 4.7,
        reviews: 78901,
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400",
        badge: "deal",
        prime: true
    },
    {
        id: 14,
        title: "Thinking, Fast and Slow by Daniel Kahneman Paperback",
        category: "books",
        price: 13.99,
        originalPrice: 22.99,
        rating: 4.5,
        reviews: 45678,
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400",
        badge: null,
        prime: true
    },
    {
        id: 15,
        title: "Fitbit Charge 6 Advanced Fitness & Health Tracker",
        category: "sports",
        price: 139.99,
        originalPrice: 179.99,
        rating: 4.3,
        reviews: 23456,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
        badge: "deal",
        prime: true
    },
    {
        id: 16,
        title: "JBL Flip 6 Portable Bluetooth Speaker Waterproof",
        category: "electronics",
        price: 99.95,
        originalPrice: 129.95,
        rating: 4.7,
        reviews: 56789,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
        badge: null,
        prime: true
    },
    {
        id: 17,
        title: "Adidas Ultraboost 23 Running Shoes Men's",
        category: "fashion",
        price: 179.99,
        originalPrice: 229.99,
        rating: 4.6,
        reviews: 34567,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400",
        badge: "bestseller",
        prime: true
    },
    {
        id: 18,
        title: "Keurig K-Elite Single Serve K-Cup Pod Coffee Maker",
        category: "home",
        price: 149.99,
        originalPrice: 189.99,
        rating: 4.5,
        reviews: 89012,
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400",
        badge: null,
        prime: true
    }
];

// ==================== STATE MANAGEMENT ====================
// Cart state to manage shopping cart items
let cart = [];

// ==================== DOM ELEMENTS ====================
// Caching frequently used DOM elements for better performance
const elements = {
    // Search
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    searchCategory: document.getElementById('searchCategory'),
    mobileSearchInput: document.getElementById('mobileSearchInput'),
    mobileSearchBtn: document.getElementById('mobileSearchBtn'),
    
    // Mobile Menu
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileMenu: document.getElementById('mobileMenu'),
    mobileMenuClose: document.getElementById('mobileMenuClose'),
    mobileMenuOverlay: document.getElementById('mobileMenuOverlay'),
    
    // Products
    productsGrid: document.getElementById('productsGrid'),
    noResults: document.getElementById('noResults'),
    categoryFilter: document.getElementById('categoryFilter'),
    sortFilter: document.getElementById('sortFilter'),
    
    // Cart
    cartIcon: document.getElementById('cartIcon'),
    cartCount: document.getElementById('cartCount'),
    cartSidebar: document.getElementById('cartSidebar'),
    cartClose: document.getElementById('cartClose'),
    cartOverlay: document.getElementById('cartOverlay'),
    cartItems: document.getElementById('cartItems'),
    cartEmpty: document.getElementById('cartEmpty'),
    cartFooter: document.getElementById('cartFooter'),
    subtotalAmount: document.getElementById('subtotalAmount'),
    continueShopping: document.getElementById('continueShopping'),
    
    // Hero Slider
    heroSlider: document.getElementById('heroSlider'),
    sliderPrev: document.getElementById('sliderPrev'),
    sliderNext: document.getElementById('sliderNext'),
    sliderDots: document.getElementById('sliderDots'),
    
    // Recommendations
    recommendationsScroll: document.getElementById('recommendationsScroll'),
    scrollLeft: document.getElementById('scrollLeft'),
    scrollRight: document.getElementById('scrollRight'),
    
    // Toast
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toastMessage'),
    
    // Deal Timer
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

// ==================== INITIALIZATION ====================
// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

/**
 * Initialize all application features
 */
function initializeApp() {
    renderProducts(products);
    renderRecommendations();
    initializeHeroSlider();
    initializeDealTimer();
    initializeEventListeners();
    loadCartFromStorage();
    initializeCategoryCards();
}

// ==================== PRODUCT RENDERING ====================
/**
 * Render products to the grid
 * @param {Array} productsToRender - Array of product objects to display
 */
function renderProducts(productsToRender) {
    // Show/hide no results message
    if (productsToRender.length === 0) {
        elements.productsGrid.style.display = 'none';
        elements.noResults.style.display = 'block';
        return;
    }
    
    elements.productsGrid.style.display = 'grid';
    elements.noResults.style.display = 'none';
    
    // Generate HTML for each product card
    elements.productsGrid.innerHTML = productsToRender.map(product => {
        const stars = generateStars(product.rating);
        const discount = Math.round((1 - product.price / product.originalPrice) * 100);
        
        return `
            <article class="product-card" data-id="${product.id}">
                <div class="product-image-wrapper">
                    ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'bestseller' ? 'Best Seller' : `${discount}% off`}</span>` : ''}
                    <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-rating">
                        <div class="rating-stars">${stars}</div>
                        <span class="rating-count">${formatNumber(product.reviews)}</span>
                    </div>
                    <div class="product-price-wrapper">
                        <span class="product-price">
                            <span class="currency">$</span>${Math.floor(product.price)}<span class="cents">${(product.price % 1).toFixed(2).substring(2)}</span>
                        </span>
                        ${product.originalPrice > product.price ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <p class="product-delivery">${product.prime ? '<strong>FREE delivery</strong> Tomorrow' : 'Delivery in 3-5 days'}</p>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </article>
        `;
    }).join('');
}

/**
 * Generate star rating HTML
 * @param {number} rating - Product rating (0-5)
 * @returns {string} HTML string of star icons
 */
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fa-solid fa-star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    
    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="fa-regular fa-star empty"></i>';
    }
    
    return stars;
}

/**
 * Format large numbers with K/M suffix
 * @param {number} num - Number to format
 * @returns {string} Formatted number string
 */
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// ==================== RECOMMENDATIONS ====================
/**
 * Render recommendation cards in the horizontal scroll section
 */
function renderRecommendations() {
    // Shuffle products for recommendations
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    
    elements.recommendationsScroll.innerHTML = shuffled.slice(0, 12).map(product => `
        <div class="recommendation-card" onclick="scrollToProduct(${product.id})">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            <p class="price">$${product.price.toFixed(2)}</p>
        </div>
    `).join('');
}

/**
 * Scroll to a product in the main grid
 * @param {number} productId - ID of product to scroll to
 */
function scrollToProduct(productId) {
    const productCard = document.querySelector(`.product-card[data-id="${productId}"]`);
    if (productCard) {
        productCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        productCard.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            productCard.style.animation = '';
        }, 500);
    }
}

// ==================== SEARCH & FILTERING ====================
/**
 * Filter and sort products based on current criteria
 */
function filterProducts() {
    const searchTerm = elements.searchInput.value.toLowerCase().trim();
    const category = elements.categoryFilter.value;
    const sortBy = elements.sortFilter.value;
    
    // Filter by search term and category
    let filtered = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm) ||
                             product.category.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });
    
    // Sort products
    filtered = sortProducts(filtered, sortBy);
    
    // Render filtered products
    renderProducts(filtered);
}

/**
 * Sort products array based on criteria
 * @param {Array} productsArray - Products to sort
 * @param {string} sortBy - Sort criteria
 * @returns {Array} Sorted products array
 */
function sortProducts(productsArray, sortBy) {
    const sorted = [...productsArray];
    
    switch (sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'featured':
        default:
            // Keep original order for featured
            break;
    }
    
    return sorted;
}

// ==================== CART FUNCTIONALITY ====================
/**
 * Add a product to the cart
 * @param {number} productId - ID of product to add
 */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Update UI and storage
    updateCartUI();
    saveCartToStorage();
    showToast(`${product.title.substring(0, 30)}... added to cart`);
}

/**
 * Remove an item from the cart
 * @param {number} productId - ID of product to remove
 */
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToStorage();
}

/**
 * Update item quantity in cart
 * @param {number} productId - ID of product
 * @param {number} change - Quantity change (+1 or -1)
 */
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    // Remove item if quantity reaches 0
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    updateCartUI();
    saveCartToStorage();
}

/**
 * Update cart UI elements
 */
function updateCartUI() {
    // Update cart count badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    elements.cartCount.textContent = totalItems;
    
    // Show/hide cart empty message
    if (cart.length === 0) {
        elements.cartItems.style.display = 'none';
        elements.cartEmpty.style.display = 'flex';
        elements.cartFooter.style.display = 'none';
        return;
    }
    
    elements.cartItems.style.display = 'block';
    elements.cartEmpty.style.display = 'none';
    elements.cartFooter.style.display = 'block';
    
    // Render cart items
    elements.cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.title}</h4>
                <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item-btn" onclick="removeFromCart(${item.id})">Delete</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update subtotal
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    elements.subtotalAmount.textContent = `$${subtotal.toFixed(2)}`;
}

/**
 * Toggle cart sidebar visibility
 */
function toggleCart() {
    elements.cartSidebar.classList.toggle('active');
    elements.cartOverlay.classList.toggle('active');
    document.body.style.overflow = elements.cartSidebar.classList.contains('active') ? 'hidden' : '';
}

/**
 * Close cart sidebar
 */
function closeCart() {
    elements.cartSidebar.classList.remove('active');
    elements.cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Save cart to localStorage
 */
function saveCartToStorage() {
    localStorage.setItem('amazonCart', JSON.stringify(cart));
}

/**
 * Load cart from localStorage
 */
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('amazonCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// ==================== HERO SLIDER ====================
let currentSlide = 0;
let slideInterval;

/**
 * Initialize the hero slider
 */
function initializeHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        elements.sliderDots.appendChild(dot);
    });
    
    // Start auto-slide
    startSlideInterval();
}

/**
 * Go to a specific slide
 * @param {number} index - Slide index
 */
function goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    // Remove active class from all
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Handle wraparound
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    
    currentSlide = index;
    
    // Add active class to current
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

/**
 * Go to next slide
 */
function nextSlide() {
    goToSlide(currentSlide + 1);
}

/**
 * Go to previous slide
 */
function prevSlide() {
    goToSlide(currentSlide - 1);
}

/**
 * Start auto-slide interval
 */
function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
}

/**
 * Reset slide interval (called after manual navigation)
 */
function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
}

// ==================== DEAL TIMER ====================
/**
 * Initialize the countdown timer for deals
 */
function initializeDealTimer() {
    // Set initial time (12 hours from now)
    let totalSeconds = 12 * 3600 + 34 * 60 + 56;
    
    function updateTimer() {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        elements.hours.textContent = String(hours).padStart(2, '0');
        elements.minutes.textContent = String(minutes).padStart(2, '0');
        elements.seconds.textContent = String(seconds).padStart(2, '0');
        
        if (totalSeconds > 0) {
            totalSeconds--;
        } else {
            // Reset timer
            totalSeconds = 24 * 3600;
        }
    }
    
    // Update immediately and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
}

// ==================== MOBILE MENU ====================
/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
    elements.mobileMenu.classList.toggle('active');
    elements.mobileMenuOverlay.classList.toggle('active');
    document.body.style.overflow = elements.mobileMenu.classList.contains('active') ? 'hidden' : '';
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    elements.mobileMenu.classList.remove('active');
    elements.mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== TOAST NOTIFICATIONS ====================
/**
 * Show a toast notification
 * @param {string} message - Message to display
 */
function showToast(message) {
    elements.toastMessage.textContent = message;
    elements.toast.classList.add('show');
    
    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 3000);
}

// ==================== CATEGORY CARDS ====================
/**
 * Initialize category card click handlers
 */
function initializeCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card[data-category]');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            
            // Update filter dropdown
            elements.categoryFilter.value = category;
            
            // Filter products
            filterProducts();
            
            // Scroll to products section
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ==================== HORIZONTAL SCROLL ====================
/**
 * Scroll the recommendations section
 * @param {string} direction - 'left' or 'right'
 */
function scrollRecommendations(direction) {
    const scrollAmount = 400;
    const currentScroll = elements.recommendationsScroll.scrollLeft;
    
    if (direction === 'left') {
        elements.recommendationsScroll.scrollTo({
            left: currentScroll - scrollAmount,
            behavior: 'smooth'
        });
    } else {
        elements.recommendationsScroll.scrollTo({
            left: currentScroll + scrollAmount,
            behavior: 'smooth'
        });
    }
}

// ==================== EVENT LISTENERS ====================
/**
 * Initialize all event listeners
 */
function initializeEventListeners() {
    // Search functionality
    elements.searchBtn.addEventListener('click', filterProducts);
    elements.searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') filterProducts();
    });
    
    // Mobile search
    if (elements.mobileSearchBtn) {
        elements.mobileSearchBtn.addEventListener('click', () => {
            elements.searchInput.value = elements.mobileSearchInput.value;
            filterProducts();
            closeMobileMenu();
        });
    }
    
    if (elements.mobileSearchInput) {
        elements.mobileSearchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                elements.searchInput.value = elements.mobileSearchInput.value;
                filterProducts();
                closeMobileMenu();
            }
        });
    }
    
    // Filter changes
    elements.categoryFilter.addEventListener('change', filterProducts);
    elements.sortFilter.addEventListener('change', filterProducts);
    
    // Cart
    elements.cartIcon.addEventListener('click', toggleCart);
    elements.cartClose.addEventListener('click', closeCart);
    elements.cartOverlay.addEventListener('click', closeCart);
    elements.continueShopping.addEventListener('click', (e) => {
        e.preventDefault();
        closeCart();
    });
    
    // Mobile menu
    elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    elements.mobileMenuClose.addEventListener('click', closeMobileMenu);
    elements.mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    
    // Hero slider
    elements.sliderPrev.addEventListener('click', () => {
        prevSlide();
        resetSlideInterval();
    });
    elements.sliderNext.addEventListener('click', () => {
        nextSlide();
        resetSlideInterval();
    });
    
    // Recommendations scroll
    elements.scrollLeft.addEventListener('click', () => scrollRecommendations('left'));
    elements.scrollRight.addEventListener('click', () => scrollRecommendations('right'));
    
    // Keyboard navigation for accessibility
    document.addEventListener('keydown', (e) => {
        // Close modals on Escape
        if (e.key === 'Escape') {
            closeCart();
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        // Close mobile menu on larger screens
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    });
}

// ==================== UTILITY FUNCTIONS ====================
/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search for better performance
elements.searchInput.addEventListener('input', debounce(filterProducts, 300));
