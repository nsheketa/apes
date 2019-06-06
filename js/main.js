$(document).ready(function () {

    function isMobile() {
        var target = $('.is-mobile');

        if (target.css('display') === 'block') {
            return true;
        } else {
            return false;
        }
    }

    $('.hamburger').on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass('is-active');
        $('.header').toggleClass('is-visible');
        $('.page-nav').toggleClass('is-active');
        $('body, html').toggleClass('no-scroll');
    });

    //reseting header classes on resize
    function headerReset() {
        $('.hamburger').removeClass('is-active');
        $('.header').removeClass('is-visible');
        $('.page-nav').removeClass('is-active');
        $('body, html').removeClass('no-scroll');
    }

    $('.page-nav__list-link').on('click', function (e) {
        headerReset();
    });

    $('.landing__production-play').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#overlay").addClass('is-visible');
        $('.showreel__modal-wrap').addClass('is-open is-shadowed');
        $('body, html').toggleClass('no-scroll');
    });

    $('.modal__close').on('click', function (e) {
        $('.showreel__modal-wrap').removeClass('is-open is-shadowed');
        $("#overlay").removeClass('is-visible');
        $('body, html').toggleClass('no-scroll');
    });

    $(document).on('click', function (e) {
        if (!e) e = window.event;
        if ($('.showreel__modal-wrap').hasClass('is-open')) {
            if (!$(e.target).closest('.showreel__modal-wrap.is-open').length || !$(e.target).closest('#overlay').length ) {
                $('.showreel__modal-wrap.is-open').find('video').get(0).pause();
                $('.showreel__modal-wrap.is-open').removeClass('is-open is-shadowed').removeClass('is-visible');
                $('#overlay').fadeOut();
                $('body', 'html').removeClass('no-scroll');
            }
        }
    });


    $(window).resize(function () {
        if (!isMobile()) {
            headerReset();
        }

    });

});