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
