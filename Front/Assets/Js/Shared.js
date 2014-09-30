/// <reference path="../External/jQuery/jquery-2.1.1.min.js" />

$(document).ready(function () {

    //Header transform
    $(function () {
        $('.MainHeader').data('size', 'big');
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            if ($('.MainHeader').data('size') == 'big') {
                $('.MainHeader').data('size', 'small');
                $('.MainHeader').fadeOut(300, function () {
                    $('.MainHeader').addClass("sticky");
                    $('.MainHeader').fadeIn(300);
                });
            }
        }
        else {
            if ($('.MainHeader').data('size') == 'small') {
                $('.MainHeader').data('size', 'big');
                $('.MainHeader').fadeOut(300, function () {
                    $('.MainHeader').removeClass("sticky");
                    $('.MainHeader').fadeIn(300);
                });
            }
        }
    });



    



});