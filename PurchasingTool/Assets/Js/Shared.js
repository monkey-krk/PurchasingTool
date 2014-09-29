﻿/// <reference path="../External/jQuery/jquery-2.1.1.min.js" />

$(document).ready(function () {


    $('.dropdown-menu').on('click', function (e) {
        if ($(this).hasClass('dropdown-menu-form')) {
            e.stopPropagation();
        }
    });


    if ($(".TooltipHolder").length > 0) {
        $(".TooltipHolder").tooltip();
    }
    

    if ($(".TopSearch").length > 0) {

        $(".TopSearchOpen").click(function (e) {
            $(this).parent().find(".TopSearchBox").addClass("active");
            $(this).hide();
            e.preventDefault();
        })
        $(".TopSearchClose").click(function (e) {
            $(this).parent().removeClass("active");
            $(".TopSearchOpen").show();
            e.preventDefault();
        })

        var NameList = [{ value: 'Adidas Runner 750mx' }, { value: 'Adidas Runner 620rx' }, { value: 'Nike Sport 78654' }, { value: 'Rebook black XL' }, { value: 'Apple Iphone 16Gb' }, { value: 'Apple Iphone 32Gb' }, { value: 'Apple Iphone 64Gb' }];
        $(".TopSearch").autocomplete({
            lookup: NameList,
            onSelect: function (suggestion) {
                var SelectedValue = suggestion.value;
            }
        });

        $(".TopSearchGoBtn").click(function (e) {
            SearchFor();
            e.preventDefault();
        });

        $(".TopSearch").keypress(function (e) {
            if (e.which == 13) {
                SearchFor();
            }
        });

        function SearchFor() {
            alert("Search for : " + $(".TopSearch").val())
        }

    }


});