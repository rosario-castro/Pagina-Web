// ============================================
// AsimovIA - JavaScript
// Coloca este archivo en: js/script.js
// ============================================

// Navegación móvil
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Smooth scrolling para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto navbar al hacer scroll
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Cambiar sombra del navbar
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 30px rgba(13, 110, 253, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(13, 110, 253, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer para animaciones
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

// Observar elementos para animaciones
const animateElements = document.querySelectorAll('.service-card, .value-card, .gallery-item, .about-text, .about-image');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Validación del formulario
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            e.preventDefault();
            alert('Por favor, completa todos los campos requeridos.');
            return false;
        }
        
        // Validación básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Por favor, ingresa un correo electrónico válido.');
            return false;
        }
    });
}

// Efecto parallax suave en hero scroll
const heroScroll = document.querySelector('.hero-scroll');
if (heroScroll) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            heroScroll.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
}

// Animación de contador (opcional - para estadísticas)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Efecto hover en cards de servicios
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Lazy loading de imágenes
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Animación de entrada de página
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Prevenir comportamiento por defecto en enlaces vacíos
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// Efecto de typing para el tagline (opcional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Detectar si el usuario está en la parte superior de la página
function isTop() {
    return window.pageYOffset === 0;
}

// Cambiar estilo del navbar cuando está en la parte superior
window.addEventListener('scroll', () => {
    if (isTop()) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 1)';
    }
});

// Mensaje de bienvenida en consola (opcional - para desarrolladores)
console.log('%cAsimovIA', 'color: #0D6EFD; font-size: 24px; font-weight: bold;');
console.log('%c"La tecnología nos conecta, la cooperación nos fortalece"', 'color: #6C757D; font-size: 14px; font-style: italic;');
console.log('%cSitio web desarrollado por AsimovIA', 'color: #0B5ED7; font-size: 12px;');

// Deshabilitar clic derecho (opcional - solo si lo necesitas)
// document.addEventListener('contextmenu', e => e.preventDefault());

// Protección contra selección de texto (opcional)
// document.addEventListener('selectstart', e => e.preventDefault());


// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  if (!form) return; // por si no se encuentra el formulario

  form.addEventListener("submit", function(e) {
    // Después de enviar (FormSubmit procesa el envío)
    setTimeout(() => {
      form.reset(); // Limpia todos los campos
    }, 500); // medio segundo de espera
  });
});













