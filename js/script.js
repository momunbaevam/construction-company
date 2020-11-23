$(document).ready(function(){
    $('.slider__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: "<button type=\"button\" class=\"slick-prev\"><img src='../icons/arrowLeft.png' alt=''></button>",
        nextArrow: "<button type=\"button\" class=\"slick-next\"><img src='../icons/arrowRight.png' alt=''></button>"
    });
})
$(function(){
    $("#phone").mask("+999(999) 99-99-99");
});