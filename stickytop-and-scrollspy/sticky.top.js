$(document).ready(function () {
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky_menu');

        if (scrolling >= 150) {
            sticky.addClass('menu_bg');
        } else {
            sticky.removeClass('menu_bg');
        }
    });
});
