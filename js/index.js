    //hero text fade flexslider
    $(window).load(function() {
        $('.flexslider').flexslider({
            controlNav: false,
            directionNav: false,
            slideshowSpeed: 4000
        });
    });

    //home slider
    $(window).load(function() {
        $('.main-slider').flexslider({
            controlNav: false,
            directionNav: true,
            slideshowSpeed: 4000,
            prevText: "<i class='ion-chevron-left'></i>",
            nextText: "<i class='ion-chevron-right'></i>"
        });
    });


    $(document).ready(function() {

        //Sort random function
        function random(owlSelector) {
            owlSelector.children().sort(function() {
                return Math.round(Math.random()) - 0.5;
            }).each(function() {
                $(this).appendTo(owlSelector);
            });
        }

        $("#owl-demo").owlCarousel({
            navigation: true,
            navigationText: [
                "<div class='custom-icon-prev'><i class='ion-chevron-left icon-white'></i></div>",
                "<div class='custom-icon-next'> <i class='ion-chevron-right icon-white'></i></div>"
            ],
            items: 5,
            pagination: false,
            autoPlay: true,



            beforeInit: function(elem) {
                //Parameter elem pointing to $("#owl-demo")
                random(elem);
            }

        });

        $("#owl-demo1").owlCarousel({
            navigation: true,
            navigationText: [
                "<div class='custom-icon-prev'><i class='ion-chevron-left icon-white'></i></div>",
                "<div class='custom-icon-next'> <i class='ion-chevron-right icon-white'></i></div>"
            ],
            items: 5,
            pagination: false,
            autoPlay: true,



            beforeInit: function(elem) {
                //Parameter elem pointing to $("#owl-demo")
                random(elem);
            }

        });

    });

    /*!
 * Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

! function(a) {
    "use strict";
    a("a.page-scroll").bind("click", function(e) {
        var l=a(this);
        a("html, body").stop().animate( {
            scrollTop: a(l.attr("href")).offset().top - 50
        }
        , 1250, "easeInOutExpo"), e.preventDefault()
    }
    ),
    a("body").scrollspy( {
        target: ".navbar-fixed-top", offset: 51
    }
    ),
    a(".navbar-collapse ul li a").click(function() {
        a(".navbar-toggle:visible").click()
    }
    ),
    a("#mainNav").affix( {
        offset: {
            top: 100
        }
    }
    ),
    window.sr=ScrollReveal(),
    sr.reveal(".sr-icons", {
        duration: 600, scale: .3, distance: "0px"
    }
    , 200),
    sr.reveal(".sr-button", {
        duration: 1e3, delay: 200
    }
    ),
    sr.reveal(".sr-contact", {
        duration: 600, scale: .3, distance: "0px"
    }
    , 300),
    a(".popup-gallery").magnificPopup( {
        delegate: "a", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: {
            enabled: !0, navigateByImgClick: !0, preload: [0, 1]
        }
        , image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    }
    )
}

(jQuery);
