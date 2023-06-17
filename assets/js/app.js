$(function () {

    $('.banner_slider').slick({
        arrows: false,
        dots: true,
        dotsClass:'banner_slider_dots',
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        fade: true,
    });

    $('.slider').slick({
        prevArrow:'<i class="fa-solid fa-chevron-left slider_arrow"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right slider_arrow"></i>',
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 4,
    })  
    $('.best_seller_products_slider').slick({
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 4,
    })  


});


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

