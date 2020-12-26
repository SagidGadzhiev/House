$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700){
            $('.upBtn').fadeIn(3000)
        }else{
            $('.upBtn').fadeOut()
        }
        if ($(this).scrollTop() < 700){
            $('.downBtn').fadeIn(3000)
        }else{
            $('.downBtn').fadeOut()
        }
    });
    $('.burger-menu').on('click', function () {
        $('.burger-menu').toggleClass('active')
        $('.tabs .tabs__nav').toggleClass('active')
    });
});