


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
    })
    
}

(jQuery);
