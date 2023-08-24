//  Stykey Header  
$(function () {
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.navbar').addClass('sticky_header');
        }
        else {
            $('.navbar').removeClass('sticky_header');
        }
    });


    //==== Back-to-top button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 1200) {
            $('.back-to-top').fadeIn(300)
        } else {
            $('.back-to-top').fadeOut(300)
        }
    });
    //==== Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });


    // venobox 
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'plane'
    });


    new VenoBox({
        selector: '.my-video-links',
    });
    // venobox 

});

// mixitup//
var containerEl = document.querySelector('.filter');

var mixer = mixitup(containerEl);


