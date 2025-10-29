// ================= MENÚ MÓVIL =================
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('show');
});
// ================= SCROLL ANIMATION =================
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
sections.forEach(sec => observer.observe(sec));

// ================= CARRUSEL =================
document.querySelectorAll('.carousel-card').forEach(card => {
  const carousel = card.querySelector('.carousel');
  const prev = card.querySelector('.prev');
  const next = card.querySelector('.next');
  let offset = 0;

  function imgWidth() { return carousel.querySelector('.carousel-img').offsetWidth; }

  next.addEventListener('click', () => {
    const width = imgWidth();
    if(offset <= -(width * (carousel.children.length -1))) offset = 0;
    else offset -= width;
    carousel.style.transform = `translateX(${offset}px)`;
  });

  prev.addEventListener('click', () => {
    const width = imgWidth();
    if(offset >= 0) offset = -(width * (carousel.children.length -1));
    else offset += width;
    carousel.style.transform = `translateX(${offset}px)`;
  });

window.addEventListener('resize', () => {
  const width = imgWidth();
  carousel.style.transform = `translateX(${Math.round(offset / width) * width}px)`;
});

// ================= WHATSAPP =================
const whatsappFloat = document.querySelector('.whatsapp-float');
const whatsappMenu = document.querySelector('.whatsapp-menu');
whatsappFloat.addEventListener('click', e => {
  e.preventDefault();
  whatsappMenu.style.display = whatsappMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', e => {
  if(!whatsappMenu.contains(e.target) && !whatsappFloat.contains(e.target)) {
    whatsappMenu.style.display = 'none';
  }
});
});
// ================= FIN DEL CÓDIGO =================