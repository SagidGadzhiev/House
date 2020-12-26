$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        // autoplay: true,
        // autoplayTimeout: 4000,
        // autoplayHoverPause: true,
        autoHeight: true,
        lazyLoad: true,
    });

    // Go to the next item
    $('.owlNextBtn').each(function (i) {
        $(this).on('click', function (e) {
            $('.owlNextBtn').eq(i).trigger('next.owl.carousel');
        });
    });

// Go to the previous item
    $('.owlPrevBtn').each(function (i) {
        $(this).on('click', function (e) {
            $('.owlPrevBtn').eq(i).trigger('prev.owl.carousel', [300]);
        });
    });

});