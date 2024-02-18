$(function () {

    $('.review__inner').slick({
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpead: 2000,
        adaptiveHeight: true,
        autoHeight: true,
            
        prevArrow: '<button class="arrow-button arrow-button--prew" type="button"><span class="sr-only">предыдущий слайд</span><svg class="arrow-button__icon" width="10" height="18"><use href="images/icons/sprite.svg#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button class="arrow-button arrow-button--next" type="button"><span class="sr-only">следующий слайд</span><svg class="arrow-button__icon" width="10" height="18"><use href="images/icons/sprite.svg#icon-arrow-left"></use></svg><button>',
    });

    $(document).ready(function () {
        $('.header__btn').click(function (evenet) {
            $('.header__btn,.mobile-menu,body').addClass('active')
        });
    });

    $(document).ready(function () {
        $('.mobile-menu__btn').click(function (evenet) {
            $('.header__btn,.mobile-menu,body').removeClass('active')
        });
    });

    $('.restaurants__list').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpead: 2000,

        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });




    var mixer = mixitup('.categories__content-list');




});