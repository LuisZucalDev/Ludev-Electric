// Formulario contacto
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    alert(`Gracias ${nombre}, tu mensaje ha sido enviado!`);
    this.reset();
});

// Carruseles múltiples
document.querySelectorAll('.project-carousel').forEach(carouselSection => {
    const carousel = carouselSection.querySelector('.carousel');
    const prevBtn = carouselSection.querySelector('.prev');
    const nextBtn = carouselSection.querySelector('.next');

    let offset = 0;
    const imgWidth = carousel.querySelector('img').offsetWidth + 10; // ancho + margin

    nextBtn.addEventListener('click', () => {
        if(offset > -(imgWidth * (carousel.children.length - 1))){
            offset -= imgWidth;
            carousel.style.transform = `translateX(${offset}px)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if(offset < 0){
            offset += imgWidth;
            carousel.style.transform = `translateX(${offset}px)`;
        }
    });
});

// Seleccionamos el botón y el menú
const whatsappBtn = document.querySelector('.whatsapp-btn');
const whatsappMenu = document.querySelector('.whatsapp-menu');

// Alternar el menú al hacer clic en el ícono
whatsappBtn.addEventListener('click', () => {
    if (whatsappMenu.style.display === 'block') {
        whatsappMenu.style.display = 'none';
    } else {
        whatsappMenu.style.display = 'block';
    }
});

// Cerrar menú si se hace clic afuera
window.addEventListener('click', function(e) {
    if (!e.target.closest('.whatsapp-dropdown')) {
        whatsappMenu.style.display = 'none';
    }
});

