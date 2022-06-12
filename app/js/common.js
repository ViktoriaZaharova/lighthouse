$('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }

    $('.mobile-menu').fadeOut();
    return false;
});


$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$('.news-slider').slick({
    slidesToShow: 3,
    appendArrows: '.news-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});

$('.btn-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.row').find('.shops-col:hidden').slice(0, 4).slideDown();

    var onBlock = $(this).parents('.row').find('.shops-col:hidden').length;
    if (onBlock <= 0) {
        $(this).hide();
    }
});

$('.btn-burger').click(function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
});

$('[name="phone"]').mask('+7 (999) 999 - 99 - 99');


$(function(){
    var drag = false;
    $(".location-complex-map > img").on('mousedown', function(e){
        e.preventDefault();
        drag = true;
    }).on('mouseup mouseout', function(){
        $(this).data({
            startX: 0,
            startY: 0,
        });
        drag = false;
    }).on('mousemove', function(e){
        e.preventDefault();
        if(drag){
            console.log($(this).data(),e);
            var left = parseInt($(this).css('left')) || 0,
                top = parseInt($(this).css('top')) || 0,
                newLeft = left + (e.clientX - ($(this).data().startX || e.clientX)),
                newTop  = top + (e.clientY - ($(this).data().startY || e.clientY)),
                parentHeight = $(this).parent().height(),
                parentWidth = $(this).parent().width(),
                imgHeight = $(this).height(),
                imgWidth = $(this).width();


            $(this).css({
                left: newLeft < 0 && (Math.abs(newLeft - parentWidth) < imgWidth) ? newLeft : left,
                top: newTop < 0 && (Math.abs(newTop - parentHeight) < imgHeight) ? newTop : top
            }).data({
                startX: e.clientX,
                startY: e.clientY,
            });
        }
    })
});