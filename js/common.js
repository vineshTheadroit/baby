$(function () {
    console.log("ready!");

    $('.feedback-slider').slick({
        infinite: true,
        dots: false,
        speed: 300,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.flag-img-wrapper').slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        focusOnSelect: false,
        pauseOnHover: true,
        buttons: false
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    });

    $('.nutshell-box-wrap,.sec-apply .box-wrapper').slick({
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick",
            },
            {
                breakpoint: 767,
                settings: {
                    speed: 300,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });






});

// gsap.to("#yearsElement", { innerText: 16, duration: 1, snap: "innerText"});
// gsap.to("#cityElement", { innerText: 18, duration: 1, snap: "innerText"});
// gsap.to("#mediaHouseElement", { innerText: 50, duration: 1, snap: {
//     innerText:5
// }});

// gsap.to("#familyElement", { innerText: 8500, duration: 1, snap: {
//     innerText:5
// }});

// gsap.to("#instructorElement", { innerText: 10000, duration: 1, snap: {
//     innerText:5
// },
// modifiers: {
//     innerText: function (innerText) {
//         return gsap.utils
//             .snap(increment, innerText)
//             .toString()
//             .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     }
// }

// });


// Wait for the DOM content to load
let increment = 1;
document.addEventListener("DOMContentLoaded", function () {
    // Define the counters and their corresponding scroll trigger sections
    const counters = [
        { element: "#yearsElement", targetNumber: 16, trigger: "#counterWrapper" },
        { element: "#cityElement", targetNumber: 18, trigger: "#counterWrapper" },
        { element: "#mediaHouseElement", targetNumber: 50, trigger: "#counterWrapper" },
        { element: "#familyElement", targetNumber: 8500, trigger: "#counterWrapper" },
        { element: "#instructorElement", targetNumber: 10000, trigger: "#counterWrapper" }
    ];

    // Loop through each counter
    counters.forEach(counter => {
        const { element, targetNumber, trigger } = counter;

        // Set up ScrollTrigger for the corresponding section
        ScrollTrigger.create({
            trigger: trigger,
            start: "top 80%", // Adjust start position based on your needs
            end: "bottom 20%", // Adjust end position based on your needs
            once: true, // Only trigger the animation once
            onEnter: () => {
                // Animate the counter element when its section comes into view
                gsap.to(element, {
                    innerText: targetNumber,
                    duration: 1,
                    snap: "innerText", // Snap the innerText value for smooth animation
                    modifiers: {
                        innerText: function (innerText) {
                            return gsap.utils
                                .snap(increment, innerText)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        }
                    },

                });
            }
        });
    });
});

$(".close-btn, .overlay").on("click", function () {
    $(".applynow-popup, .overlay").fadeOut()
});

$(".applynow-box").on("click", function () {
    $(".applynow-popup, .overlay").fadeIn()
});

$(window).on('load', function () {
    setTimeout(function () {
        $(".applynow-popup, .overlay").fadeIn()
    }, 1000)
});