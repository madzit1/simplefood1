$(function () {

    $('.customer__slider-inner').slick({
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpead: 2000,
        prevArrow: '<button type="button"class="slick-prev slick-prev--active"><svg class="slick-prev__icon" width="10" height="18"><use href="images/icons/sprite.svg#icon-arrow-left"></use></svg><span class="sr-only">стрелка влево</span></button>',
        nextArrow: '<button type="button"class="slick-next"><svg class="slick-next__icon" width="10" height="18"><use href="images/icons/sprite.svg#icon-arrow-right"></use></svg><span class="sr-only">стрелка вправо</span><button>',
    })

    var mixer = mixitup('.categories__content-list');
});