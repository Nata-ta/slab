// Slick

$(document).ready(function(){
    $('.testimonials__body-wrap').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        variableWidth: true
      });
    });

// Header menu

const btnMenu = document.querySelector('.hero__header-btn-menu');
const menu = document.querySelector('.hero__nav');

function toggleMobileMenu() {
    btnMenu.classList.toggle('hero__header-btn-menu--open');
    menu.classList.toggle('hero__nav--open');
}

btnMenu.addEventListener('click', toggleMobileMenu);