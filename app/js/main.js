
$(function () {

    var mixer = mixitup('.grid');

    $('.review__inner').slick({
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpead: 2000,
        adaptiveHeight: true,
        autoHeight: true,

        prevArrow: '<button class="arrow-button arrow-button--prew" type="button"><span class="sr-only">попередній слайд</span><svg class="arrow-button__icon" width="10" height="18"><use href="images/icons/sprite.svg#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button class="arrow-button arrow-button--next" type="button"><span class="sr-only">наступний слайд</span><svg class="arrow-button__icon" width="10" height="18"><use href="images/icons/sprite.svg#icon-arrow-left"></use></svg><button>',
    });

    var $range = $(".filters__price-input"),
        $inputFrom = $(".filters__box-input--from"),
        $inputTo = $(".filters__box-input--to"),
        instance,
        min = 0,
        max = 1000,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 200,
        to: 800,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });


    $(document).ready(function () {
        $('.selectNamesBtn').click(function (evenet) {
            $('.dropdown--names').toggleClass('active')
        });

        $('.selectNumbersBtn').click(function (evenet) {
            $('.dropdown--numbers').toggleClass('active')
        });
    });

    $('.select').styler();

    $(document).ready(function () {
        $('.header__btn').click(function (evenet) {
            $('.backdrop').addClass('active')
            $('.body').addClass('lock')
        });
    });

    $(document).ready(function () {
        $('.close-button').click(function (evenet) {
            $('.backdrop').removeClass('active')
            $('.body').removeClass('lock')
        });
    });
});

