$(function () {

    $('.customer-slider__inner').slick({
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpead: 2000,
        prevArrow: '<button type="button"class="slick-prev slick-prev--active"><svg width="10" height="18"><use href="images/stack/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button"class="slick-next"><svg  width="10" height="18"><use href="images/stack/sprite.svg#arrow-right"></use></svg><button>',
    })

    var mixer = mixitup('.categories__content-list');
});