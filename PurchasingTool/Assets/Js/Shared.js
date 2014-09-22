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