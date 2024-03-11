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
            $('.backdrop').addClass('active')
            $('.body').addClass('lock')
        });
    });

    $(document).ready(function () {
        $('.mobile-menu__close-button').click(function (evenet) {
            $('.backdrop').removeClass('active')
            $('.body').removeClass('lock')
        });
    });

    var mixer = mixitup('.categories__content-list');

});