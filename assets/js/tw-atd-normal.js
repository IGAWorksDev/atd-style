$(function () {

    // Header bar function
    $.scrollWindow = function () {
        if ($(window).scrollTop() > 56) {
            $('.mainheader-sticky').addClass('is-fixed');
        } else {
            $('.mainheader-sticky').removeClass('is-fixed');
        };
    };
    $.scrollWindow();
    $(window).scroll(function () {
        $.scrollWindow();
    });
    $(window).resize(function () {
        $.scrollWindow();
    });


    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Dropdown
    $('.dropdown-toggle').dropdown();
})