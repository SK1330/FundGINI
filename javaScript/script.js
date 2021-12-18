$(document).ready(function() {
    $('.first-slider').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        // autoplayTimeout: 1000,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        center: true,
        responsive: {
            320: {
                items: 1,
                nav: false,
            },
            576: {
                items: 2,
                nav: true,
            },
            1350: {
                items: 4,
                nav: true,
            }

        }
    });
});


$(document).ready(function() {
    $('.slider').owlCarousel({
        loop: true,
        margin: 80,
        nav: true,
        autoplay: true,
        autoplayTimeout: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});