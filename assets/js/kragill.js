$(document).ready(function () {
    $('.btn-2').click(function (e) { 
        $('.nav-item-1').hide();
        $('.nav-item-3').hide();
        $('.nav-item-2').fadeIn('slow');
        
    });
    $('.btn-3').click(function (e) { 
        $('.nav-item-1').hide();
        $('.nav-item-2').hide();
        $('.nav-item-3').fadeIn('slow');
        
    });
    $('.btn-1').click(function (e) { 
        $('.nav-item-3').hide();
        $('.nav-item-2').hide();
        $('.nav-item-1').fadeIn('slow');
    });
});