$(document).ready(function () {
    var $body, options, content;
    var scrolling, scroll;

    function isMobile() {
        var target = $('.is-mobile');

        if (target.css('display') === 'block') {
            return true;
        } else {
            return false;
        }
    }

    function mobMenuInit() {
        $('.hamburger').on('click', function (e) {
            e.preventDefault();

            $(this).toggleClass('is-active');
            $('.header').toggleClass('is-visible');
            $('.page-nav').toggleClass('is-active');
            $('body, html').toggleClass('no-scroll');
        });
    }

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

    //Langing modal showreel
    function handleLandingModal() {
        $('.landing__production-play').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $("#overlay").addClass('is-visible');
            $('.showreel__modal-wrap').addClass('is-open is-shadowed');
            $('body, html').toggleClass('no-scroll');
        });
    }

    $('.modal__close').on('click', function (e) {
        $('.showreel__modal-wrap').removeClass('is-open is-shadowed');
        $("#overlay").removeClass('is-visible');
        $('body, html').toggleClass('no-scroll');
    });

    $(document).on('click', function (e) {
        if (!e) e = window.event;
        if ($('.showreel__modal-wrap').hasClass('is-open')) {
            if (!$(e.target).closest('.showreel__modal-wrap.is-open').length || !$(e.target).closest('#overlay').length) {
                $('.showreel__modal-wrap.is-open').find('video').get(0).pause();
                $('.showreel__modal-wrap.is-open').removeClass('is-open is-shadowed').removeClass('is-visible');
                $('#overlay').fadeOut();
                $('body', 'html').removeClass('no-scroll');
            }
        }
    });

    //Landing animation

    function landingAnimation() {
        var tl = new TimelineMax({
            repeat: 0,
            ease: Power3.easeInOut
        });

        var item_00_wrap = $('.page-content__wrap.landing-page'),
            item_01_video = $('.landing__animation-video'),
            item_01_header_mob = $('.header.landing-page'),
            item_02_nav = $('.page-nav.landing-page'),
            item_03_frame_left = $('.landing__frame-top-left'),

            item_04_socials = $('.page-socials'),
            item_04_01_frame_top_right = $('.landing__frame-top-right'),
            item_04_02_frame_bottom_right = $('.landing__frame-bottom-right'),
            item_04_03_frame_bottom = $('.landing__frame-bottom'),
            item_04_04_frame_bottom_left = $('.landing__frame-bottom-left'),

            item_05_production = $('.landing__production'),
            item_06_heading = $('.landing__heading');

        if (isMobile()) {
            tl.to(item_00_wrap, 0.2, {opacity: 1})
                .staggerFromTo(item_01_video, 0.3, {opacity: 0}, {opacity: 0.3}, '+=0.2')
                .staggerFromTo(item_01_header_mob, 0.5, {opacity: 0, y: -30}, {opacity: 1, y: 0}, '+=0.2')
                .staggerFromTo(item_04_socials, 0.3, {opacity: 0, y: -50}, {opacity: 1, y: 0}, '+=0.2')
                .staggerFromTo(item_05_production, 0.3, {opacity: 0, y: 30}, {opacity: 1, y: 0}, '-=0.2')
                .staggerFromTo(item_06_heading, 0.3, {opacity: 0, x: -50}, {opacity: 1, x: 0}, '+=0.2');

            $('.page-content__wrap.landing-page').addClass('was-animated');

        } else {
            tl.to(item_00_wrap, 0.2, {opacity: 1})
                .staggerFromTo(item_01_video, 0.3, {opacity: 0}, {opacity: 0.3}, '+=0.2')
                .staggerFromTo(item_02_nav, 0.3, {opacity: 0, x: -50}, {opacity: 1, x: 0}, '+=0.2')
                .staggerFromTo(item_03_frame_left, 0.2, {
                    opacity: 0,
                    scaleX: 0,
                    transformOrigin: 'left bottom'
                }, {opacity: 1, scaleX: 1}, '+=0.2')

                .staggerFromTo(item_04_socials, 0.3, {opacity: 0, y: -50}, {opacity: 1, y: 0}, '+=0.2')
                .staggerFromTo(item_04_01_frame_top_right, 0.2, {
                    opacity: 0,
                    scaleY: 0,
                    transformOrigin: 'top'
                }, {opacity: 1, scaleY: 1}, 0.1, 'frame')
                .staggerFromTo(item_04_02_frame_bottom_right, 0.2, {
                    opacity: 0,
                    scaleY: 0,
                    transformOrigin: "top"
                }, {opacity: 1, scaleY: 1}, 0.1)
                .staggerFromTo(item_04_03_frame_bottom, 0.2, {
                    opacity: 0,
                    scaleX: 0,
                    transformOrigin: 'right'
                }, {opacity: 1, scaleX: 1}, 0, 'frame')
                .staggerFromTo(item_04_04_frame_bottom_left, 0.2, {
                    opacity: 0,
                    scaleY: 0,
                    transformOrigin: 'bottom'
                }, {opacity: 1, scaleY: 1}, 0.1)

                .staggerFromTo(item_05_production, 0.3, {opacity: 0, y: 30}, {opacity: 1, y: 0}, '-=0.2')
                .staggerFromTo(item_06_heading, 0.3, {opacity: 0, x: -50}, {opacity: 1, x: 0}, '+=0.2');

            $('.page-content__wrap.landing-page').addClass('was-animated');
        }
    }

    //work page animation
    function workPageAnimation() {
        var tlWork = new TimelineMax({
                repeat: 0,
                ease: Power3.easeInOut
            }),
            item_00_nav = $('.page-nav.work-page'),
            item_00_01_header_mob = $('.header'),

            item_01_frame_left = $('.page__frame-top-left'),
            item_01_02_frame_right = $('.page__frame-right'),
            item_01_03_frame_bottom = $('.page__frame-bottom'),
            item_01_03_frame_bottom_left = $('.page__frame-bottom-left'),

            item_02_socials = $('.page-socials'),

            item_03_line_left = $('.work-nav__pointer-left'),
            item_03_line_top = $('.work-nav__pointer-top'),
            item_03_line_right = $('.work-nav__pointer-right'),

            item_04_title = $('.work__heading'),
            item_05_list = $('.work-list__wrap');

        if (isMobile()) {
            tlWork.fromTo(item_00_01_header_mob, 0.5, {opacity: 0, y: -30, zIndex: 110}, {
                opacity: 1,
                y: 0,
                zIndex: 110
            })
                .staggerFromTo(item_04_title, 0.2, {
                    opacity: 0,
                    x: "-50%",
                }, {opacity: 1, x: '0%'}, '+=0.2')
                .staggerFromTo(item_05_list, 0.4, {
                    opacity: 0
                }, {opacity: 1}, '+=0.2')
                .staggerFromTo(item_02_socials, 0.3, {opacity: 0, y: -50}, {opacity: 1, y: 0}, '+=0.3');
        } else {
            tlWork.fromTo(item_00_nav, 0.3, {opacity: 0, x: -50}, {opacity: 1, x: 0})

                .staggerFromTo(item_03_line_left, 0.2, {
                    opacity: 0,
                    scaleY: 0,
                    transformOrigin: "bottom"
                }, {opacity: 1, scaleY: 1}, '+=0.2')
                .staggerFromTo(item_03_line_top, 0.4, {
                    opacity: 0,
                    scaleY: 0,
                    transformOrigin: "left"
                }, {opacity: 1, scaleY: 1}, '-=0.2')
                .staggerFromTo(item_03_line_right, 0.2, {
                    opacity: 0,
                    scaleY: 0,
                    transformOrigin: "top"
                }, {opacity: 1, scaleY: 1}, '+=0.2')

                .staggerFromTo(item_04_title, 0.2, {
                    opacity: 0,
                    y: -50,
                    transformOrigin: "left"
                }, {opacity: 1, y: 0}, '+=0.2')
                .staggerFromTo(item_05_list, 0.2, {
                    opacity: 0
                }, {opacity: 1}, '+=0.2')

                .staggerFromTo(item_01_frame_left, 0.2, {
                    opacity: 0,
                    scaleX: 0,
                    transformOrigin: 'left bottom'
                }, {opacity: 1, scaleX: 1}, 0.1, 'frame')
                .staggerFromTo(item_01_02_frame_right, 0.3, {
                    opacity: 0,
                    scaleY: 0,
                    transformOrigin: 'top'
                }, {opacity: 1, scaleY: 1}, 0.1, 'frame')
                .staggerFromTo(item_01_03_frame_bottom, 0.2, {
                    opacity: 0,
                    scaleY: 0,
                    transformOrigin: 'top'
                }, {opacity: 1, scaleY: 1}, 0.1, 'frame')
                .staggerFromTo(item_01_03_frame_bottom_left, 0.2, {
                    opacity: 0,
                    scaleY: 0,
                    transformOrigin: "top"
                }, {opacity: 1, scaleY: 1}, 0.1, 'frame')
        }
    }

    //work page scroll

    scroll = 25;
    function workPageScroll() {
        $('.work-list__scroll-link').on('mouseenter', function (e) {
            var wrap = $('.work-list__wrap');

            scrolling = setInterval(function () {
                wrap.animate({
                    scrollTop: scroll
                }, 300, 'linear');
                scroll += 25;
            }, 300);

        }).on('mouseleave', function (e) {
            if (scrolling) {
                clearInterval(scrolling);
                scrolling = false;
            }
        });
    }

    function resetWorkScroll() {
        scroll = 25;
        $('.work-list__wrap').scrollTop(0);
    }

    //Smooth page transitions

    $body = $('html, body');
    options = {
        debug: true,
        anchors: '.page-nav__list-link',
        repeatDelay: 300,
        blacklist: '.no-smoothState',
        onStart: {
            duration: 250,
            render: function ($container) {
                $container.toggleClass('is-exiting');
                $body.animate({'scrollTop': 0});
                $('.main-scene').addClass('is-loading');
                // smoothState.restartCSSAnimations();
            }
        },
        onProgress: {
            duration: 250,
            render: function ($container) {
                // console.log('on progress')
            }
        },
        onAfter: function ($container, $newContent) {
            $container.toggleClass('is-exiting').removeClass('is-loading').addClass('is-loaded');
            $('.page-content__wrap').addClass('was-animated');

            mobMenuInit();

            landingAnimation();
            handleLandingModal();

            resetWorkScroll();
            workPageScroll();
            workPageAnimation();

        }
    };

    content = $('#main').smoothState(options).data('smoothState');

    mobMenuInit();
    handleLandingModal();
    landingAnimation();
    workPageScroll();
    workPageAnimation();

    $(window).resize(function () {
        if (!isMobile()) {
            headerReset();
        }

    });
    $(window).on('load', function () {
        $('.main-scene').removeClass('is-loading').addClass('is-loaded');
        $('.page-content__wrap').addClass('was-animated');
    })

});