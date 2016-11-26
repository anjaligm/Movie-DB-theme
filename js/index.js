


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
