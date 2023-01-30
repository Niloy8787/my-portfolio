$(document).ready(function () {
    $('.menu-bar').click(function (e) { 
        $('.overlay-menu-fullscerene').slideToggle(1000);
        $('header').hide();
        $('.menu-bar-active').show();
    });
    $('.menu-bar-active i').click(function (e) { 
        $('.overlay-menu-fullscerene').slideUp(1000,function(){
            $('header').show();
        });
    });
    $('.banner-area-right').mouseenter(function () { 
        $('.laptop-img').animate({
            right:'-100px',
        },2000,function(){})
    });
    $('.banner-area-left').mouseenter(function () { 
        $('.laptop-img').animate({
            right:'-150px',
        },2000,function(){})
    });
    $('.page-number-one').click(function (e) { 
        $('.banner-area-right').slideDown(1000);
        $('.banner-area-right-two').hide();
        
    });
    $('.page-number-two').click(function (e) { 
      $('.banner-area-right').slideUp(1000);
      $('.banner-area-right-two').slideDown(1000);
        
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
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
        /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function () {

        if ($(window).scrollTop() > 300) {
            $('.fixed-top').addClass('fixed-top-bar-active')

        } else {
            $('.fixed-top').removeClass('fixed-top-bar-active')
        }

    });
    $('.portfolio-item').mouseenter(function () { 
        $('.icon').slideDown(1000,function(){
            $('.icon').animate({
                right:'50px',
            },1000)
        });
    });

    $('.left-btn').click(function (e) { 
        $('.box-number-1').slideUp(500,function(){
            $('.box-number-2').slideDown(500);
        });
        
    });

    
});