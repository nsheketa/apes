function isMobile() {
    var target = $('.is-mobile');

    if (target.css('display') === 'block') {
        return true;
    } else {
        return false;
    }
}

//Landing page animation
function landingAnimation() {
    var tl = new TimelineMax({
        repeat: 0,
        ease: Power3.easeInOut
    });

    var item_00_wrap = $('.page-content__wrap.landing-page'),
        item_01_video = $('.landing__animation-video'),
        item_01_header_mob = $('.header.landing-page'),

        item_02_nav = $('.page-nav.landing-page'),
        item_02_00_frame = $('.landing__frame'),
        item_02_06_socials = $('.page-socials.landing-page'),
        item_02_06_ppl = $('.landing-animation__overlay'),

        item_05_production_text = $('.landing__production-text'),
        item_05_01_production_line = $('.landing__production-line--left'),
        item_05_02_production_line = $('.landing__production-line--right'),
        item_06_heading = $('.landing__heading'),

        item_07_showreel = $('.landing__production-showreel');

    // item_08_plane = $(''),

    if (isMobile()) {
        tl.to(item_00_wrap, 0.2, {opacity: 1})
            .fromTo(item_01_video, 0.3, {opacity: 0}, {opacity: 1})
            .staggerFromTo(item_01_header_mob, 0.5, {opacity: 0}, {opacity: 1}, '+=0.4')
            .staggerFromTo(item_02_06_socials, 0.3, {opacity: 0}, {opacity: 1}, '+=0.1')
            .staggerFromTo(item_02_06_ppl, 0.3, {opacity: 0}, {opacity: 1}, '+=0.1')

            .staggerFromTo(item_05_production_text, 0.3, {opacity: 0}, {opacity: 1}, 0.2, 'title')
            .staggerFromTo(item_06_heading, 0.3, {opacity: 0}, {opacity: 1}, 0.2, 'title')
            .staggerFromTo(item_07_showreel, 0.4, {opacity: 0}, {opacity: 1}, '+=0.2');
        //+plane

        $('.page-content__wrap.landing-page').addClass('was-animated');

    } else {
        tl.to(item_00_wrap, 0.4, {opacity: 1})
            .fromTo(item_01_video, 0.4, {opacity: 0}, {opacity: 1})

            .staggerFromTo(item_02_nav, 0.3, {opacity: 0}, {opacity: 1}, 1, 'frame')
            .staggerFromTo(item_02_00_frame, 0.3, {opacity: 0}, {opacity: 1}, 1, 'frame')
            .staggerFromTo(item_02_06_socials, 0.3, {opacity: 0}, {opacity: 1}, 1, 'frame')
            .staggerFromTo(item_02_06_ppl, 0.3, {opacity: 0}, {opacity: 1}, '+=0.4')


            .staggerFromTo(item_05_01_production_line, 0.2, {opacity: 0}, {opacity: 1}, 0.2, 'title')
            .staggerFromTo(item_05_02_production_line, 0.2, {opacity: 0}, {opacity: 1}, 0.2, 'title')
            .staggerFromTo(item_05_production_text, 0.4, {opacity: 0}, {opacity: 1}, 0.2, 'title')
            .staggerFromTo(item_06_heading, 0.4, {opacity: 0}, {opacity: 1}, 0.2, 'title')

            .staggerFromTo(item_07_showreel, 0.4, {opacity: 0}, {opacity: 1}, '+=0.4');
        //+plane

        $('.page-content__wrap.landing-page').addClass('was-animated');
    }
}

//work page animation
function workPageAnimation() {
    var tlWork = new TimelineMax({
            repeat: 0,
            ease: Power3.easeInOut
        }),
        item_00_01_wrap = $('.page-content__wrap.work-page'),
        item_00_01_nav = $('.page-nav.work-page'),
        item_00_01_header_mob = $('.header.work-page'),

        item_01_frame = $('.page__frame.work-page'),

        item_02_socials = $('.page-socials.work-page'),

        item_03_line_left = $('.work-nav__pointer-left'),
        item_03_line_top = $('.work-nav__pointer-top'),
        item_03_line_right = $('.work-nav__pointer-right'),
        item_03_pointer = $('.work-nav__pointer-link'),

        item_04_title = $('.work__heading'),
        item_05_list = $('.work-list__wrap');

    if (isMobile()) {
        tlWork.to(item_00_01_wrap, 0.3, {opacity: 1})
            .staggerFromTo(item_00_01_header_mob, 0.3, {opacity: 0}, {opacity: 1}, '+=0.2')
            .staggerFromTo(item_02_socials, 0.3, {opacity: 0}, {opacity: 1}, '+=0.1')
            .fromTo(item_04_title, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_05_list, 0.4, {opacity: 0}, {opacity: 1});

        $('.page-content__wrap.work-page').addClass('was-animated');
    } else {
        tlWork.to(item_00_01_wrap, 0.3, {opacity: 1})
            .fromTo(item_00_01_nav, 0.3, {opacity: 0}, {opacity: 1})

            .staggerFromTo(item_03_line_left, 0.3, {
                opacity: 0,
                scaleY: 0,
                transformOrigin: "left bottom"
            }, {opacity: 1, scaleY: 1}, '+=0.2')
            .fromTo(item_03_line_top, 0.3, {
                opacity: 0,
                scaleY: 0,
                transformOrigin: "left"
            }, {opacity: 1, scaleY: 1})
            .fromTo(item_03_line_right, 0.3, {
                opacity: 0,
                scaleY: 0,
                transformOrigin: "top left"
            }, {opacity: 1, scaleY: 1})
            .fromTo(item_03_pointer, 0.2, {opacity: 0}, {opacity: 1})

            .fromTo(item_04_title, 0.3, {opacity: 0}, {opacity: 1})

            .staggerFromTo(item_01_frame, 0.3, {opacity: 0}, {opacity: 1}, 0.2, 'work-frame')
            .staggerFromTo(item_02_socials, 0.2, {opacity: 0}, {opacity: 1}, 0.2, 'work-frame')

            .fromTo(item_05_list, 0.4, {opacity: 0}, {opacity: 1});

        $('.page-content__wrap.work-page').addClass('was-animated');
    }
}

//work detail page animation
function workDetailAnimation(){
    var tlWorkDetail = new TimelineMax({
            repeat: 0,
            ease: Power3.easeInOut
        }),
        item_00_01_wrap = $('.page-content__wrap.work-detail-page'),
        item_00_01_nav = $('.page-nav.work-detail-page'),
        item_00_01_header_mob = $('.header.work-detail-page'),

        item_01_line_middle = $('.work-detail-nav__pointer-middle'),
        item_01_content = $('.work-detail__content-inner'),
        item_01_line_right = $('.work-detail__content-border'),
        item_01_back_link = $('.work-detail__return-wrap'),
        item_01_graphics = $('.work-detail__heading-graphics'),

        item_02_frame = $('.page__frame.work-detail-page'),
        item_02_socials = $('.page-socials.work-detail-page'),

        item_03_list = $('.work-detail__list-wrap');

    if (isMobile()) {
        tlWorkDetail.to(item_00_01_wrap, 0.3, {opacity: 1})
            .staggerFromTo(item_00_01_header_mob, 0.3, {opacity: 0}, {opacity: 1}, '+=0.2')
            .staggerFromTo(item_01_back_link, 0.2, {opacity: 0}, {opacity: 1}, '+=0.1')
            .fromTo(item_01_content, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_03_list, 0.4, {opacity: 0}, {opacity: 1});

        $('.page-content__wrap.work-detail-page').addClass('was-animated');
    } else {
        tlWorkDetail.to(item_00_01_wrap, 0.3, {opacity: 1})
            .fromTo(item_00_01_nav, 0.3, {opacity: 0}, {opacity: 1})
            .staggerFromTo(item_02_frame, 0.3, {opacity: 0}, {opacity: 1}, 0.2, 'work-detail-frame')
            .staggerFromTo(item_02_socials, 0.2, {opacity: 0}, {opacity: 1}, 0.2, 'work-detail-frame')

            .staggerFromTo(item_01_line_middle, 0.2, {opacity: 0}, {opacity: 1}, 0.2, 'border')
            .staggerFromTo(item_01_line_right, 0.2, {opacity: 0}, {opacity: 1}, 0.2, 'border')
            .fromTo(item_01_content, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_01_back_link, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_01_graphics, 0.2, {opacity: 0, x: -50}, {opacity: 1, x:0})

            .fromTo(item_03_list, 0.3, {opacity: 0}, {opacity: 1});

        $('.page-content__wrap.work-detail-page').addClass('was-animated');
    }
}

//clients page animation
function clientsPageAnimation() {
    var tlClients = new TimelineMax({
            repeat: 0,
            ease: Power3.easeInOut
        }),
        item_00_wrap = $('.page-content__wrap.clients-page'),
        item_00_nav = $('.page-nav.clients-page'),
        item_00_header_mob = $('.header.clients-page'),

        item_02_socials = $('.page-socials.clients-page'),
        item_02_frame = $('.page__frame.clients-page'),

        item_03_line_middle = $('.clients-nav__pointer-middle'),
        item_03_line_left = $('.clients-nav__pointer-left'),
        item_03_line_top = $('.clients-nav__pointer-top'),
        item_03_line_right = $('.clients-nav__pointer-right'),
        item_03_pointer = $('.clients-nav__pointer .button-svg'),

        item_04_title = $('.clients__heading'),
        item_04_subtitle = $('.clients__subheading'),
        item_05_list = $('.clients-list__wrap');

    if (isMobile()) {
        tlClients.to(item_00_wrap, 0.3, {opacity: 1})
            .staggerFromTo(item_00_header_mob, 0.3, {opacity: 0}, {opacity: 1}, '+=0.2')
            .staggerFromTo(item_02_socials, 0.3, {opacity: 0}, {opacity: 1}, '+=0.1')
            .fromTo(item_04_title, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_04_subtitle, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_05_list, 0.4, {opacity: 0}, {opacity: 1});

        $('.page-content__wrap.clients-page').addClass('was-animated');
    } else {
        tlClients.to(item_00_wrap, 0.3, {opacity: 1})
            .fromTo(item_00_nav, 0.3, {opacity: 0}, {opacity: 1})

            .staggerFromTo(item_03_line_middle, 0.17, {
                opacity: 0,
                scaleX: 0,
                transformOrigin: "left"
            }, {opacity: 1, scaleX: 1}, '+=0.2')
            .fromTo(item_03_line_left, 0.17, {
                opacity: 0,
                scaleY: 0,
                transformOrigin: "bottom left"
            }, {opacity: 1, scaleY: 1})
            .fromTo(item_03_line_top, 0.17, {
                opacity: 0,
                scaleX: 0,
                transformOrigin: "left"
            }, {opacity: 1, scaleX: 1})
            .fromTo(item_03_line_right, 0.17, {
                opacity: 0,
                scaleY: 0,
                transformOrigin: "top left"
            }, {opacity: 1, scaleY: 1})

            .fromTo(item_03_pointer, 0.2, {opacity: 0}, {opacity: 1})

            .staggerFromTo(item_04_title, 0.3, {opacity: 0}, {opacity: 1}, '0.2', 'heading')
            .staggerFromTo(item_04_subtitle, 0.3, {opacity: 0}, {opacity: 1}, '0.2', 'heading')

            .staggerFromTo(item_02_frame, 0.3, {opacity: 0}, {opacity: 1}, 0.2, 'clients-frame')
            .staggerFromTo(item_02_socials, 0.2, {opacity: 0}, {opacity: 1}, 0.2, 'clients-frame')

            .fromTo(item_05_list, 0.4, {opacity: 0}, {opacity: 1});

        $('.page-content__wrap.clients-page').addClass('was-animated');
    }
}

//about page animation
function aboutPageAnimation() {
    var tlAbout = new TimelineMax({
            repeat: 0,
            ease: Power3.easeInOut
        }),
        item_00_01_wrap = $('.page-content__wrap.about-page'),
        item_00_01_nav = $('.page-nav.about-page'),
        item_00_01_header_mob = $('.header.about-page'),

        item_01_frame = $('.page__frame.about-page'),
        item_01_socials = $('.page-socials.about-page'),

        item_02_title = $('.about__heading'),
        item_02_info = $('.about__heading-info'),

        item_03_people_brain = $('.about-row_people-brain'),
        item_03_people_left = $('.about-row__people--jerry'),
        item_03_people_right = $('.about-row__people-hoi'),
        item_03_people_center = $('.about-row__people-item--center'),
        item_03_people = $('.about-row__people'),

        item_04_content = $('.about__content-wrap');

    if (isMobile()) {
        tlAbout.to(item_00_01_wrap, 0.3, {opacity: 1})
            .staggerFromTo(item_00_01_header_mob, 0.3, {opacity: 0}, {opacity: 1}, '+=0.2')
            .staggerFromTo(item_01_socials, 0.2, {opacity: 0}, {opacity: 1}, '+=0.1')

            .fromTo(item_02_title, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_02_info, 0.2, {opacity: 0}, {opacity: 1})

            .fromTo(item_03_people_left, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_03_people_center, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_03_people_right, 0.2, {opacity: 0}, {opacity: 1})

            .fromTo(item_04_content, 0.2, {opacity: 0}, {opacity: 1});

        $('.page-content__wrap.about-page').addClass('was-animated');
    } else {
        tlAbout.to(item_00_01_wrap, 0.3, {opacity: 1})
            .fromTo(item_00_01_nav, 0.3, {opacity: 0}, {opacity: 1})
            .staggerFromTo(item_01_frame, 0.3, {opacity: 0}, {opacity: 1}, 0.2, 'work-detail-frame')
            .staggerFromTo(item_01_socials, 0.2, {opacity: 0}, {opacity: 1}, 0.2, 'work-detail-frame')

            .staggerFromTo(item_02_title, 0.2, {opacity: 0}, {opacity: 1}, 0.1, 'border')
            .staggerFromTo(item_02_info, 0.2, {opacity: 0}, {opacity: 1}, 0.1, 'border')

            .fromTo(item_03_people, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_03_people_brain, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_03_people_center, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_03_people_left, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_03_people_right, 0.2, {opacity: 0}, {opacity: 1})

            .fromTo(item_04_content, 0.2, {opacity: 0}, {opacity: 1});

        $('.page-content__wrap.about-page').addClass('was-animated');
    }
}

//services page animation
function servicesPageAnimation() {
    var tlServices = new TimelineMax({
            repeat: 0,
            ease: Power3.easeInOut
        }),
        item_00_01_wrap = $('.page-content__wrap.services-page'),
        item_00_01_nav = $('.page-nav.services-page'),
        item_00_01_header_mob = $('.header.services-page'),

        item_01_frame = $('.page__frame.services-page'),
        item_01_socials = $('.page-socials.services-page'),

        item_02_title = $('.services__info-wrap'),

        item_03_sales = $('.services__img-sales'),
        item_03_creative = $('.services__img-creative'),
        item_03_filming = $('.services__img-filming'),
        item_03_production = $('.services__img-production'),
        item_03_after = $('.services__img-after');

    if (isMobile()) {
        tlServices.to(item_00_01_wrap, 0.3, {opacity: 1})
            .fromTo(item_00_01_header_mob, 0.3, {opacity: 0}, {opacity: 1})
            .fromTo(item_01_socials, 0.2, {opacity: 0}, {opacity: 1})

            .fromTo(item_02_title, 0.2, {opacity: 0}, {opacity: 1})

            .fromTo(item_03_sales, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_03_creative, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_03_filming, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_03_production, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_03_after, 0.2, {opacity: 0}, {opacity: 1});

        $('.page-content__wrap.services-page').addClass('was-animated');
    } else {
        tlServices.to(item_00_01_wrap, 0.3, {opacity: 1})
            .fromTo(item_00_01_nav, 0.3, {opacity: 0}, {opacity: 1})
            .staggerFromTo(item_01_frame, 0.3, {opacity: 0}, {opacity: 1}, 0.2, 'work-detail-frame')
            .staggerFromTo(item_01_socials, 0.2, {opacity: 0}, {opacity: 1}, 0.2, 'work-detail-frame')

            .staggerFromTo(item_02_title, 0.2, {opacity: 0}, {opacity: 1}, 0.1, 'border')

            .staggerFromTo(item_03_sales, 0.4, {opacity: 0}, {opacity: 1}, 0.3, 'scheme')
            .staggerFromTo(item_03_creative, 0.3, {opacity: 0}, {opacity: 1}, 0.3, 'scheme')
            .staggerFromTo(item_03_filming, 0.4, {opacity: 0}, {opacity: 1}, 0.3, 'scheme')
            .staggerFromTo(item_03_production, 0.4, {opacity: 0}, {opacity: 1}, 0.3, 'scheme')
            .staggerFromTo(item_03_after, 0.4, {opacity: 0}, {opacity: 1}, 0.3, 'scheme');

        $('.page-content__wrap.services-page').addClass('was-animated');
    }
}

//contact page animation
function contactPageAnimation() {
    var tlContact = new TimelineMax({
            repeat: 0,
            ease: Power3.easeInOut
        }),
        item_00_01_wrap = $('.page-content__wrap.contact-page'),
        item_00_01_nav = $('.page-nav.contact-page'),
        item_00_01_header_mob = $('.header.contact-page'),

        item_01_frame = $('.page__frame.contact-page'),
        item_01_socials = $('.page-socials.contact-page'),

        item_02_title = $('.contact__heading'),
        item_02_map = $('.contact-inner__map'),

        item_03_info = $('.contact-inner__info'),
        item_03_form = $('.contact-inner__form-wrap');

    if (isMobile()) {
        tlContact.to(item_00_01_wrap, 0.3, {opacity: 1})
            .staggerFromTo(item_00_01_header_mob, 0.3, {opacity: 0}, {opacity: 1}, '+=0.2')
            .staggerFromTo(item_01_socials, 0.2, {opacity: 0}, {opacity: 1}, '+=0.1')

            .fromTo(item_02_map, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_02_title, 0.2, {opacity: 0}, {opacity: 1})

            .fromTo(item_03_form, 0.2, {opacity: 0}, {opacity: 1})
            .fromTo(item_03_info, 0.2, {opacity: 0}, {opacity: 1});

        $('.page-content__wrap.contact-page').addClass('was-animated');
    } else {
        tlContact.to(item_00_01_wrap, 0.3, {opacity: 1})
            .staggerFromTo(item_00_01_nav, 0.3, {opacity: 0}, {opacity: 1}, 0.2, 'contact-frame')
            .staggerFromTo(item_01_frame, 0.3, {opacity: 0}, {opacity: 1}, 0.2, 'contact-frame')
            .staggerFromTo(item_01_socials, 0.3, {opacity: 0}, {opacity: 1}, 0.2, 'contact-frame')

            .fromTo(item_02_map, 0.3, {opacity: 0}, {opacity: 1})
            .fromTo(item_02_title, 0.3, {opacity: 0}, {opacity: 1})

            .fromTo(item_03_info, 0.4, {opacity: 0}, {opacity: 1} )
            .fromTo(item_03_form, 0.3, {opacity: 0}, {opacity: 1});

        $('.page-content__wrap.contact-page').addClass('was-animated');
    }
}

$(document).ready(function () {
    var $body, options, content;
    var scrolling_down, scrolling_up, scroll, scroll_down, scroll_up;
    var controller = new ScrollMagic.Controller();
    var masonryOptions, grid;

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
            $('.showreel__modal-wrap').find('video').get(0).play();
            $('body, html').toggleClass('no-scroll');
        });
    }

    $('.modal__close').on('click', function (e) {
        $('.showreel__modal-wrap').removeClass('is-open is-shadowed');
        $('.showreel__modal-wrap').find('video').get(0).pause();
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

    //work page scroll

    scroll = 0;

    function wheelScrollHandle(){
        $('.scroll-list__wrap').on('mousewheel', function (e) {
            if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0 ) {
                $('.list-scroll__link--up').removeClass('is-inactive');
            }
            else{
                $('.list-scroll__link--down').removeClass('is-inactive');
            }
            scroll = $('.scroll-list__wrap').scrollTop();
        });
    }

    function pageScrollDown() {
        $('.list-scroll__link--down').on('mouseenter', function (e) {
            var wrap = $('.scroll-list__wrap'),
                wrapScrollTop = wrap.scrollTop(),
                wrapScrollH = wrap.prop("scrollHeight"),
                wrapHeight = wrap.outerHeight(true);

            scroll = $('.scroll-list__wrap').scrollTop();

            scrolling_down = setInterval(function () {
                $('.list-scroll__link--up').removeClass('is-inactive');
                if (scroll >= wrapScrollH - wrapHeight + 12) {
                    $('.list-scroll__link--down').addClass('is-inactive');
                    scroll -= 50;
                    return;
                } else {
                    wrap.animate({
                        scrollTop: scroll
                    }, 300, 'linear');
                    scroll += 50;
                }
            }, 300, 'linear');
        }).on('mouseleave', function (e) {
            if (scrolling_down) {
                clearInterval(scrolling_down);
                scrolling_down = false;
                scroll -= 50;
            }
        });
    }

    function pageScrollUp() {
        $('.list-scroll__link--up').on('mouseenter', function (e) {
                var wrap = $('.scroll-list__wrap');

            scroll = $('.scroll-list__wrap').scrollTop();

            scrolling_up = setInterval(function () {
                    $('.list-scroll__link--down').removeClass('is-inactive');
                    if (scroll >= 50) {
                        wrap.animate({
                            scrollTop: scroll
                        }, 300, 'linear');
                        scroll -= 50;
                    } else {
                        wrap.animate({
                            scrollTop: 0
                        }, 300, 'linear');
                        scroll = 0;
                        $('.list-scroll__link--up').addClass('is-inactive')
                    }
                }, 300);
            }
        ).on('mouseleave', function (e) {
            if (scrolling_up) {
                clearInterval(scrolling_up);
                scrolling_up = false;
                scroll += 50;
            }
        });
    }

    function resetWorkScroll() {
        scroll = 0;
        $('.scroll-list__wrap').scrollTop(0);
    }

    //work page mobile scrolling
    function workMobScroll() {
        var w = $(window);
        $('.work-list__item:last-of-type').addClass('work-list__item--last');
        $('.work-list__item').each(function () {
            var $this = $(this),
                content = $this.find('.work-list__item-content');

            if (w.width() < 769) {
                if ($this.hasClass('work-list__item--last')) {
                    new ScrollMagic.Scene({
                        triggerElement: this,
                        offset: -$this.height() / 3,
                        triggerHook: 0.7,
                        reverse: true,
                        duration: $this.height()
                    })
                        .on('enter', function (e) {
                            $this.find('.work-list__item-content').addClass('is-visible-mob')
                        })
                        .on('leave', function (e) {
                            $this.find('.work-list__item-content').removeClass('is-visible-mob')
                        })
                        // .addIndicators()
                        .addTo(controller);
                } else {
                    new ScrollMagic.Scene({
                        triggerElement: this,
                        offset: -30,
                        triggerHook: 0.4,
                        reverse: true,
                        duration: $this.height()
                    })
                        .on('enter', function (e) {
                            $this.find('.work-list__item-content').addClass('is-visible-mob')
                        })
                        .on('leave', function (e) {
                            $this.find('.work-list__item-content').removeClass('is-visible-mob')
                        })
                        // .addIndicators()
                        .addTo(controller);
                }
            }
        });
    }

    //Work project page
    masonryOptions = {
        itemSelector: '.work-detail__list-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        isAnimated: false
    };

    // grid = $('.masonry__grid').masonry(masonryOptions);

    function workDetailExitAnimation(){
        if(!isMobile()){
            $('.work-detail__return-link').on('click', function (e) {
                e.preventDefault();
                var href = $(this).attr('href');
                $(this).parent().addClass('is-clicked');
                setTimeout(function () {
                    location.href = href;
                }, 800);
            });
        }
    }

    function workDetailPopupInit(){
        $('.work-detail__list-link').magnificPopup({
            type:'image',
            disableOn: 200,
            mainClass: 'mfp-fade',
            removalDelay: 160,
            closeBtnInside: false,
            gallery: {
                enabled: true
            },
        });
    }

    //about page


    //Smooth page transitions
    //https://www.javascripting.com/view/smoothstate-js#built-with-smoothstatejs

    $body = $('html, body');
    options = {
        debug: true,
        anchors: '.page-transition__link',
        repeatDelay: 0,
        blacklist: '.no-smoothState',
        onStart: {
            duration: 400,
            render: function ($container) {
                $container.toggleClass('is-exiting').addClass('scene__element--fadein');
                // $body.scrollTop(0);
                $('.main-scene').addClass('is-loading');
                // smoothState.restartCSSAnimations();
            }
        },
        onProgress: {
            duration: 0,
            render: function ($container) {
                // console.log('on progress')
            }
        },
        onReady: {
            duration: 0,
            render: function ($container, $newContent) {
                // Remove your CSS animation reversing class
                $container.removeClass('is-exiting scene__element--fadein');
                // Inject the new content
                $container.html($newContent);
            }
        },
        onAfter: function ($container, $newContent) {
            $container.removeClass('is-loading').addClass('is-loaded');
            $('.page-content__wrap').addClass('was-animated');

            mobMenuInit();
            headerReset();

            landingAnimation();
            handleLandingModal();

            resetWorkScroll();
            pageScrollDown();
            pageScrollUp();
            wheelScrollHandle();
            workPageAnimation();
            workMobScroll();

            workDetailAnimation();
            workDetailExitAnimation();
            workDetailPopupInit();

            clientsPageAnimation();

            aboutPageAnimation();
            servicesPageAnimation();

            contactPageAnimation();
        }
    };

    content = $('#main').smoothState(options).data('smoothState');

    mobMenuInit();
    handleLandingModal();

    pageScrollDown();
    pageScrollUp();
    wheelScrollHandle();
    workMobScroll();

    workDetailExitAnimation();
    workDetailPopupInit();

    $(window).resize(function () {
        if (!isMobile()) {
            headerReset();
        }
    });
});

$(window).on('load', function () {
    landingAnimation();
    workPageAnimation();
    workDetailAnimation();
    clientsPageAnimation();
    aboutPageAnimation();
    servicesPageAnimation();
    contactPageAnimation();

    $('.main-scene').removeClass('is-loading').addClass('is-loaded');
    $('.page-content__wrap').addClass('was-animated');
});