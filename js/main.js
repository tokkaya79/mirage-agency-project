$(function () {

    $('.menu__link').on('click', function () {
        $('.menu__link').removeClass('menu__link--active');
        $(this).addClass('menu__link--active');
    });

    $('.menu-burger').on('click', function () {
        $('.menu').toggleClass('menu--active');
    });

    $(".menu a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('.slider').slick({
        arrows: true,
        prevArrow: "<img src='images/icons/slider-right.svg' class='prev' alt='1'>",
        nextArrow: "<img src='images/icons/slider-left.svg' class='next' alt='2'>",
    });

});