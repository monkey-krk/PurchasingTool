/// <reference path="../External/jQuery/jquery-2.1.1.min.js" />

var APIurl = "https://api-purchasing.commerceup.com/v1/external";

var QueryString = (function (a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

var org = QueryString["org"];
var ctx = QueryString["ctx"];
var user_token = QueryString["user_token"];
var country_code = "DE";
var authString = 'org=' + org + '&ctx=' + ctx + '&user_token=' + user_token;

if (user_token == undefined) {
    //Redirect to Login
    window.location.href = "https://account.commerceup.com/a/purchasing";
}

$(document).ready(function () {

    $('a').each(function () {
        var href = $(this).attr('href');
        if (href) {
            href += (href.match(/\?/) ? '&' : '?') + authString;
            $(this).attr('href', href);
        }
    });


    $('.dropdown-menu').on('click', function (e) {
        if ($(this).hasClass('dropdown-menu-form')) {
            e.stopPropagation();
        }
    });

    if ($(".TooltipHolder").length > 0) {
        $(".TooltipHolder").tooltip();
    }
    
});