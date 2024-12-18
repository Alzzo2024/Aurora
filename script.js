// Theme Toggle with Local Storage
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(`theme-${savedTheme}`);

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('theme-light')) {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
        localStorage.setItem('theme', 'light');
    }
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

// Sybilla Alert with Animation
const sybillaLink = document.getElementById('sybillaLink');
const sybillaAlert = document.getElementById('sybillaAlert');

if (sybillaLink && sybillaAlert) {
    sybillaAlert.style.display = 'none';
    
    sybillaLink.addEventListener('click', (e) => {
        e.preventDefault();
        sybillaAlert.style.display = 'block';
        sybillaAlert.style.animation = 'slideDown 0.3s ease-out';
        
        setTimeout(() => {
            sybillaAlert.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => {
                sybillaAlert.style.display = 'none';
            }, 300);
        }, 3000);
    });
}

// Initialize Swiper with optimized settings
document.addEventListener('DOMContentLoaded', () => {
    const swipers = document.querySelectorAll('.product-swiper');
    
    swipers.forEach(swiperElement => {
        new Swiper(swiperElement, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true
            },
            speed: 800,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            grabCursor: true,
            watchOverflow: true,
            keyboard: {
                enabled: true
            }
        });
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Download Buttons with Platform Detection
document.querySelectorAll('.btn-download').forEach(button => {
    button.addEventListener('click', function() {
        const app = this.dataset.app;
        const platform = this.dataset.platform;
        console.log(`Download clicked: ${app} for ${platform}`);
        
        // Add loading state
        this.classList.add('loading');
        
        // Simulate download process
        setTimeout(() => {
            this.classList.remove('loading');
            this.classList.add('downloaded');
            
            setTimeout(() => {
                this.classList.remove('downloaded');
            }, 2000);
        }, 1000);
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (menu && !menu.contains(e.target) && !hamburger?.contains(e.target)) {
        menu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    }
});

// Fade in animation with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.app-box').forEach(element => {
    observer.observe(element);
});

// Prevent scroll when mobile menu is open
function toggleBodyScroll(disable) {
    document.body.style.overflow = disable ? 'hidden' : '';
}

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const isMenuActive = menu.classList.contains('active');
        toggleBodyScroll(isMenuActive);
    });
}