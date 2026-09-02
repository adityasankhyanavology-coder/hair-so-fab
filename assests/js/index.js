
$(document).ready(function () {

    $('.desired-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 600,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});


// ghjhgjm

$(document).ready(function () {

    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,

        arrows: true,
        dots: false,

        infinite: true,

        autoplay: true,
        autoplaySpeed: 4000,

        speed: 700,
        fade: true,
        cssEase: 'linear',

        pauseOnHover: false,
        pauseOnFocus: false,

        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

});



//  desire-slider



    $(document).ready(function () {

        $('.desired-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2500,
            speed: 600,
            pauseOnHover: true,

            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        });




        // HeADER JS 

        

        document.addEventListener("DOMContentLoaded", function () {

            const toggle = document.getElementById("headerToggle");
            const menu = document.querySelector(".header-menu");
            const dropdown = document.querySelector(".dropdown");
            const dropdownLink = document.querySelector(".dropdown > a");


            /* HAMBURGER TOGGLE */

            toggle.addEventListener("click", function () {

                toggle.classList.toggle("active");
                menu.classList.toggle("active");

            });


            /* DROPDOWN TOGGLE */

            dropdownLink.addEventListener("click", function (e) {

                if (window.innerWidth <= 991) {

                    e.preventDefault();

                    dropdown.classList.toggle("active");

                }

            });


            /* RESET ON DESKTOP */

            window.addEventListener("resize", function () {

                if (window.innerWidth > 991) {

                    toggle.classList.remove("active");
                    menu.classList.remove("active");
                    dropdown.classList.remove("active");

                }

            });

        });
  