// FORMULARIO CONTACTO
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    alert(`Gracias ${nombre}, tu mensaje ha sido enviado!`);
    this.reset();
});

// CARRUSELES
document.querySelectorAll('.project-carousel').forEach(section=>{
    const carousel = section.querySelector('.carousel');
    const prev = section.querySelector('.prev');
    const next = section.querySelector('.next');
    let offset=0;
    const imgWidth = carousel.querySelector('img').offsetWidth + 15;

    const slideNext=()=>{
        if(offset <= -(imgWidth*(carousel.children.length-1))) offset=0;
        else offset-=imgWidth;
        carousel.style.transform=`translateX(${offset}px)`;
    }
    next.addEventListener('click',slideNext);
    prev.addEventListener('click',()=>{
        if(offset>=0) offset=-(imgWidth*(carousel.children.length-1));
        else offset+=imgWidth;
        carousel.style.transform=`translateX(${offset}px)`;
    });
    setInterval(slideNext,4000);
});

// WHATSAPP
const whatsappBtn=document.querySelector('.whatsapp-btn');
const whatsappMenu=document.querySelector('.whatsapp-menu');
whatsappBtn.addEventListener('click',()=>{ whatsappMenu.style.display=whatsappMenu.style.display==='block'?'none':'block';});
window.addEventListener('click',e=>{ if(!e.target.closest('.whatsapp-dropdown')) whatsappMenu.style.display='none';});

// MENÚ MÓVIL
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show'); // Oculta el menú
    });
});

// Cerrar menú si se hace clic afuera
window.addEventListener('click', e => {
    if (!e.target.closest('.menu-mobile')) {
        navLinks.classList.remove('show');
    }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert('¡Gracias! Tu mensaje ha sido enviado.');
            form.reset();
        } else {
            alert('Ups! Hubo un error al enviar tu mensaje.');
        }
    }).catch(error => {
        alert('Ups! Hubo un error al enviar tu mensaje.');
    });
});