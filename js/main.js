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
        // $('.header').toggleClass('is-open');
        $('.page-nav').toggleClass('is-active');
        handleBodyScroll();
    });

    //reseting header classes on resize
    function headerReset() {
        $('.hamburger').removeClass('is-active');
        // $('.header').removeClass('is-open');
        $('.page-nav').removeClass('is-active');
        $('body, html').removeClass('no-scroll');
    }

    $('.page-nav__list-link').on('click', function (e) {
        headerReset();
    });

    function handleBodyScroll() {
        if(isMobile()){
            $('body, html').toggleClass('no-scroll');
        }
    }

    $('.landing__production-play').on('click', function (e) {
        e.preventDefault();
        $('.showreel__modal-wrap').addClass('is-open');
        $("#overlay").fadeIn(200);
        $('body', 'html').addClass('no-scroll');
    })

    $('.modal__close').on('click', function (e) {
        // e.stopPropagation();
        $('.showreel__modal-wrap').removeClass('is-open');
        $("#overlay").fadeOut(300);
    })

    $(document).on('click', function (e) {
        if (!e) e = window.event;
        if ($('showreel__modal-wrap').hasClass('is-open')) {
            if (!$(e.target).closest('.showreel__modal-wrap.is-open').length || !$(e.target).closest('#overlay').length ) {
                $('.showreel__modal-wrap.is-open').find('video').get(0).pause();
                $('.showreel__modal-wrap.is-open').removeClass('is-open').fadeOut(200);
                $('#overlay').fadeOut(200);
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