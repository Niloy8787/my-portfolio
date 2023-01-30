$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    $(window).on("scroll", function () {

        if ($(window).scrollTop() > 200) {
            $('.fixed-top').addClass('fixed-top-bar-active')

        } else {
            $('.fixed-top').removeClass('fixed-top-bar-active')
        }

    });
});