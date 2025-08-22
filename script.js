// Theme switcher functionality
function initThemeSwitcher() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        updateThemeButtonText('Light Theme');
    } else {
        updateThemeButtonText('Dark Theme');
    }
    
    themeToggle.addEventListener('click', () => {
        // Add animation class
        body.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
        // Toggle theme
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            updateThemeButtonText('Dark Theme');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            updateThemeButtonText('Light Theme');
        }
        
        // Remove transition after animation completes
        setTimeout(() => {
            body.style.transition = '';
        }, 600);
    });
}

function updateThemeButtonText(text) {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.setAttribute('title', text);
    themeToggle.setAttribute('aria-label', text);
}

// WhatsApp redirect function
function redirectToWhatsApp(posterTitle) {
    const message = `I want to buy the ${posterTitle} poster`;
    const whatsappUrl = `https://wa.me/917888890037?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Custom design redirect function
function redirectToCustomDesign() {
    const message = `I want a custom poster design`;
    const whatsappUrl = `https://wa.me/917888890037?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Create Your Own poster redirect function
function redirectToCreateYourOwn() {
    const message = `I want to create my own custom poster design`;
    const whatsappUrl = `https://wa.me/917888890037?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Poster data with your actual posters
const postersData = [
    {
        id: 1,
        title: "Attack on Titan - Fire Wall",
        category: "anime",
        price: "",
        image: "https://i.pinimg.com/736x/67/b6/90/67b690140f09b858dd942c7a35e434e2.jpg",
        description: "Trends International Attack on Titan Fire Wall Poster featuring iconic anime characters and dramatic scenes."
    },
    {
        id: 2,
        title: "Itachi Uchiha - Digital Art",
        category: "anime",
        price: "",
        image: "https://i.pinimg.com/736x/05/d0/a5/05d0a5cd32b2f400c7348dc18a758e26.jpg",
        description: "Stunning black and white poster of Itachi Uchiha with red accents, perfect for Naruto fans."
    },
    {
        id: 3,
        title: "Akatsuki - Legendary Organization",
        category: "anime",
        price: "",
        image: "https://i.pinimg.com/1200x/2b/1d/97/2b1d971eef08ba0265c45b9742e8367c.jpg",
        description: "Akatsuki poster featuring the legendary organization from Naruto with striking visual design."
    },
    {
        id: 4,
        title: "The Akatsuki - Colorful Artwork",
        category: "anime",
        price: "",
        image: "https://i.pinimg.com/736x/a1/f1/60/a1f16030e47c02e6fdd12c727a095052.jpg",
        description: "Vibrant and artistic Akatsuki poster with multiple colors and dynamic composition."
    },
    {
        id: 5,
        title: "Levi Ackerman - Attack on Titan",
        category: "anime",
        price: "",
        image: "https://i.pinimg.com/736x/ea/bb/fb/eabbfb0d733c4f9cdc0132406f1307af.jpg",
        description: "Epic poster featuring Levi Ackerman, the legendary Survey Corps captain from Attack on Titan."
    },
    {
        id: 6,
        title: "Dragon Ball - Legendary Warriors",
        category: "anime",
        price: "",
        image: "https://i.pinimg.com/736x/be/04/83/be0483bf695124cc0377f69bd64991a2.jpg",
        description: "Iconic Dragon Ball poster featuring legendary warriors and epic battles from the classic anime series."
    },
    {
        id: 7,
        title: "The Eminence in Shadow - Mastermind",
        category: "anime",
        price: "",
        image: "https://i.pinimg.com/1200x/75/4b/77/754b77bad408c1440fafe521f8e3f5b4.jpg",
        description: "Stunning poster from The Eminence in Shadow featuring the mysterious mastermind and dark fantasy elements."
    },
    {
        id: 8,
        title: "Anime Art Collection - Premium Poster",
        category: "anime",
        price: "",
        image: "https://i.pinimg.com/1200x/00/e8/17/00e8179f98da8786929c779eff42b016.jpg",
        description: "Beautiful anime artwork poster featuring stunning visual design and artistic composition."
    },
    {
        id: 9,
        title: "JDM Sports Car - Street Racing",
        category: "automotive",
        price: "",
        image: "https://i.pinimg.com/736x/aa/4d/72/aa4d7239b5b6f37cb03fbb14fdc02341.jpg",
        description: "High-performance JDM sports car poster with dynamic street racing aesthetics and vibrant colors."
    },
    {
        id: 10,
        title: "Classic Muscle Car - American Power",
        category: "automotive",
        price: "",
        image: "https://i.pinimg.com/736x/f5/45/75/f54575ba861d184a75415e883c0b0db0.jpg",
        description: "Iconic American muscle car poster showcasing raw power and classic automotive design."
    },
    {
        id: 11,
        title: "Supercar Collection - Exotic Beauty",
        category: "automotive",
        price: "",
        image: "https://i.pinimg.com/736x/6a/07/ad/6a07ad4574a480ffe6c535b1484dfffb.jpg",
        description: "Stunning supercar poster featuring exotic automotive engineering and sleek design aesthetics."
    },
    {
        id: 12,
        title: "Racing Legend - Track Performance",
        category: "automotive",
        price: "",
        image: "https://i.pinimg.com/736x/33/5a/cd/335acd107382c92027eabac14238f4de.jpg",
        description: "Professional racing car poster with track-focused design and high-performance automotive art."
    },
    {
        id: 13,
        title: "Drift King - Sideways Action",
        category: "automotive",
        price: "",
        image: "https://i.pinimg.com/736x/23/59/de/2359dec020ee42d47a481d39e7fe17f4.jpg",
        description: "Epic drift car poster capturing the thrill of sideways action and automotive culture."
    }
];

// Function to create poster HTML
function createPosterHTML(poster) {
    if (poster.image === "custom-anime-poster" || poster.image === "custom-car-poster") {
        // Special custom poster with big + icon
        return `
            <div class="poster-item custom-poster" data-category="${poster.category}">
                <div class="poster-image custom-poster-image">
                    <div class="custom-poster-content">
                        <div class="big-plus-icon">
                            <i class="fas fa-plus"></i>
                        </div>
                        <h3 class="custom-title">Create Your Own</h3>
                        <p class="custom-subtitle">${poster.title}</p>
                    </div>
                </div>
                <div class="poster-info">
                    <button class="btn btn-primary custom-bottom-btn" onclick="redirectToCreateYourOwn()" style="background: #ff6b6b; color: white; border: none; padding: 15px; font-size: 16px; font-weight: bold; cursor: pointer;">
                        Talk for Custom Design
                    </button>
                </div>
            </div>
        `;
    } else {
        // Regular poster with Buy button
        return `
            <div class="poster-item" data-category="${poster.category}">
                <div class="poster-image">
                    <img src="${poster.image}" alt="${poster.title}" loading="lazy">
                    <div class="poster-overlay">
                        <button class="btn btn-primary" onclick="redirectToWhatsApp('${poster.title}')">
                            Buy Now
                        </button>
                    </div>
                </div>
                <div class="poster-info">
                    <h3 class="poster-title">${poster.title}</h3>
                    <p class="poster-category">${poster.category.charAt(0).toUpperCase() + poster.category.slice(1)}</p>
                </div>
            </div>
        `;
    }
}

// Function to render posters
function renderPosters(filter = 'all') {
    const postersGrid = document.getElementById('postersGrid');
    const filteredPosters = filter === 'all' ? postersData : postersData.filter(poster => poster.category === filter);
    
    postersGrid.innerHTML = filteredPosters.map(poster => createPosterHTML(poster)).join('');
}

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        renderPosters(filter);
    });
});

// Function to redirect to Instagram for custom orders
function redirectToInstagram() {
    console.log('Redirecting to Instagram...');
    try {
        // Try multiple methods to ensure redirect works
        const instagramUrl = 'https://www.instagram.com/wallfever.studio/';
        
        // Method 1: window.open
        const newWindow = window.open(instagramUrl, '_blank');
        
        // Method 2: If popup blocked, try direct navigation
        if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
            console.log('Popup blocked, trying direct navigation...');
            window.location.href = instagramUrl;
        }
        
        console.log('Instagram redirect successful');
    } catch (error) {
        console.error('Error redirecting to Instagram:', error);
        // Fallback: direct navigation
        window.location.href = 'https://www.instagram.com/wallfever.studio/';
    }
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully! We\'ll get back to you soon.');
        this.reset();
    });
}

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (!email) {
            showNotification('Please enter your email address');
            return;
        }
        
        showNotification('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize posters
    renderPosters();
    
    // Add animation to elements
    const animateElements = document.querySelectorAll('.category-card, .poster-item, .feature');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Enhanced filter animation
function animateFilterChange() {
    const posters = document.querySelectorAll('.poster-item');
    posters.forEach((poster, index) => {
        poster.style.opacity = '0';
        poster.style.transform = 'translateY(20px)';
        setTimeout(() => {
            poster.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            poster.style.opacity = '1';
            poster.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Add smooth reveal animation to sections
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-revealed');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Wallfever.studio website loaded successfully!');
    
    // Initialize theme switcher
    initThemeSwitcher();
    
    // Add loading animation
    document.body.classList.add('loaded');
});