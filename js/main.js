// ================= SCROLL ANIMATIONS =================
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section.section-fade');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => observer.observe(section));
});

// ================= MOBILE MENU =================
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu.classList.remove('hidden');
      menuToggle.setAttribute('aria-expanded', 'true');
    }
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ================= SERVICE CAROUSELS =================
const serviceCarousels = {
  instalacion: ['img/instalacion1.jpeg', 'img/instalacion2.jpeg', 'img/instalacion3.jpeg', 'img/instalacion4.jpeg', 'img/instalacion5.jpeg', 'img/instalacion6.jpeg', 'img/instalacion7.jpeg', 'img/instalacion8.jpeg', 'img/instalacion9.jpeg', 'img/instalacion10.jpeg', 'img/instalacion11.jpeg', 'img/instalacion12.jpeg', 'img/instalacion13.jpeg', 'img/instalacion14.jpeg', 'img/instalacion15.jpeg', 'img/instalacion16.jpeg', 'img/instalacion17.jpeg', 'img/instalacion18.jpeg', 'img/instalacion19.jpeg', 'img/instalacion20.jpeg', 'img/instalacion21.jpeg', 'img/instalacion22.jpeg', 'img/instalacion23.jpeg', 'img/instalacion24.jpeg', 'img/instalacion25.jpeg', 'img/instalacion26.jpeg', 'img/instalacion27.jpeg'],
  mantencion: ['img/Mantencion1.jpeg', 'img/Mantencion2.jpeg', 'img/Mantencion3.jpeg', 'img/Mantencion4.jpeg', 'img/Mantencion5.jpeg', 'img/Mantencion6.jpeg', 'img/Mantencion7.jpeg', 'img/Mantencion8.jpeg', 'img/Mantencion9.jpeg', 'img/Mantencion10.jpeg'],
  emergencia: ['img/Emergencia1.jpeg', 'img/Emergencia2.jpeg', 'img/Emergencia3.jpeg', 'img/Emergencia4.jpeg', 'img/Emergencia5.jpeg', 'img/Emergencia6.jpeg', 'img/Emergencia7.jpeg', 'img/Emergencia8.jpeg', 'img/Emergencia9.jpeg', 'img/Emergencia10.jpeg', 'img/Emergencia11.jpeg', 'img/Emergencia12.jpeg', 'img/Emergencia13.jpeg', 'img/Emergencia14.jpeg']
};

let carouselStates = {
  instalacion: 0,
  mantencion: 0,
  emergencia: 0
};

// Carousel navigation
document.querySelectorAll('.prev-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const service = btn.dataset.service;
    const imgs = serviceCarousels[service];
    carouselStates[service] = (carouselStates[service] - 1 + imgs.length) % imgs.length;
    updateCarousel(service);
  });
});

document.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const service = btn.dataset.service;
    const imgs = serviceCarousels[service];
    carouselStates[service] = (carouselStates[service] + 1) % imgs.length;
    updateCarousel(service);
  });
});

function updateCarousel(service) {
  const carouselElement = document.querySelector(`.carousel-service[data-service="${service}"] .carousel-img-wrapper img`);
  if (carouselElement) {
    carouselElement.src = serviceCarousels[service][carouselStates[service]];
    carouselElement.style.animation = 'none';
    setTimeout(() => {
      carouselElement.style.animation = '';
    }, 50);
  }
}

// Auto-rotate carousels
Object.keys(serviceCarousels).forEach(service => {
  setInterval(() => {
    const imgs = serviceCarousels[service];
    carouselStates[service] = (carouselStates[service] + 1) % imgs.length;
    updateCarousel(service);
  }, 5000);
});

// ================= WHATSAPP BUTTON =================
const whatsappFloat = document.getElementById('whatsapp-float');
const whatsappMenu = document.getElementById('whatsapp-menu');

if (whatsappFloat && whatsappMenu) {
  whatsappFloat.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = !whatsappMenu.classList.contains('hidden');
    
    if (isOpen) {
      whatsappMenu.classList.add('hidden');
      setTimeout(() => {
        whatsappMenu.classList.add('opacity-0', 'scale-95');
        whatsappMenu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
      }, 10);
    } else {
      whatsappMenu.classList.remove('hidden');
      whatsappMenu.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
      whatsappMenu.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!whatsappFloat.contains(e.target) && !whatsappMenu.contains(e.target)) {
      whatsappMenu.classList.add('hidden', 'opacity-0', 'scale-95', 'pointer-events-none');
      whatsappMenu.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
    }
  });
}

// ================= SMOOTH SCROLL LINKS =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ================= FORM VALIDATION & FEEDBACK =================
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    // Optional: Add custom validation
    const email = this.querySelector('input[type="email"]');
    if (!email.value.includes('@')) {
      e.preventDefault();
      alert('Por favor ingresa un correo válido');
    }
  });
}

// ================= SCROLL TO TOP OFFSET =================
// Adjust header height for scroll offset
const headerHeight = document.querySelector('header').offsetHeight;
const originalScrollTo = Element.prototype.scrollIntoView;
Element.prototype.scrollIntoView = function(options = true) {
  const headerHeight = document.querySelector('header')?.offsetHeight || 0;
  const target = this.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
  
  if (typeof options === 'boolean') {
    window.scrollTo(0, target);
  } else {
    window.scrollTo({
      top: target,
      behavior: options.behavior || 'auto'
    });
  }
};