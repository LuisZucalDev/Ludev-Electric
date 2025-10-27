// ================= MENÚ MÓVIL =================
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
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

  window.addEventListener('resize', () => { offset = 0; carousel.style.transform = `translateX(${offset}px)`; });
});

// ================= WHATSAPP =================
const whatsappFloat = document.querySelector('.whatsapp-float');
const whatsappMenu = document.querySelector('.whatsapp-menu');
whatsappFloat.addEventListener('click', () => { whatsappMenu.style.display = whatsappMenu.style.display === 'flex' ? 'none' : 'flex'; });
document.addEventListener('click', e => {
  if(!whatsappFloat.contains(e.target) && !whatsappMenu.contains(e.target)) whatsappMenu.style.display = 'none';
});
