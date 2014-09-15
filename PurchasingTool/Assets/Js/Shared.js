/// <reference path="../External/jQuery/jquery-2.1.1.min.js" />

$(document).ready(function () {

    $('.dropdown-menu').on('click', function (e) {
        if ($(this).hasClass('dropdown-menu-form')) {
            e.stopPropagation();
        }
    });

    if ($(".TooltipHolder").length > 0) {
        $(".TooltipHolder").tooltip();
    }
    




});