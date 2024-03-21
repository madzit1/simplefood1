
$(function () {

    var $range = $(".filters__price-input"),
        $inputFrom = $(".filters__box-form"),
        $inputTo = $(".filters__box-to"),
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
        $('.dropdown').click(function (evenet) {
            $('.dropdown,.dropdown__list').toggleClass('active')
        });
    });

    const pagination = document.getElementById('pagination');
    const pagination__prev = document.getElementById('pagination__prev');
    const pagination__next = document.getElementById('pagination__next');
    const pagination__item = document.guerySelectorAll('pagination__item');
    let pagination__itemActive = 1;
    pagination__next.addEventListenner('click', () => {
        pagination__itemActive++;

        if (pagination__itemActive > circles.length) {
            pagination__itemActive = circles.length;
        }
        update();
    });
    pagination__prev.addEventListener('click' , () => {
        pagination__itemActive--;
        if ( pagination__itemActive < 1) {
            pagination__itemActive = 1;
        }

        update();
    });
    function update() {
        circles.forEach((circles, idx) => {
            if (idx < pagination__itemActive) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
        const actives = document.guerySelectorAll('active');
        pagination.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
        if (pagination__itemActive === 1) {
            pagination__prev.disabled = true;
        } else if (pagination__itemActive === cirsles.length) {
            pagination__next.disabled = true;
        } else {
            pagination__prev.disabled = false;
            pagination__next.disabled = false;
        }
    }


    $('.select').styler();

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


    var mixer = mixitup('.categories__content-list');
});

