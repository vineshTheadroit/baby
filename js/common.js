$(function () {
    console.log("ready!");

    $('.feedback-slider').slick({
        infinite: true,
        dots: false,
        speed: 300,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    });
    
    console.log($(".counter-text").text())
    $(".counter-text").each(function(index, element) {
        console.log($(element).text())
        gsap.to(element, {
            innerText: $(element).text(), // animate each element's text individually
            duration: 3,
            snap: {
                innerText: 5 // Snap to 5 for each element
            }
        });
    });
    
});
