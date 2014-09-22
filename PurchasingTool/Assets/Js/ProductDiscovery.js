/// <reference path="../External/jQuery/jquery-2.1.1.min.js" />



function results_entries(result_id, page, per_page) {

    var url = APIurl + '/results/' + result_id + '/entries.json';

    $.ajax({
        type: "GET",
        url: url,
        data: {
            organisation_id: org,
            context_id : ctx,
            user_token: user_token,
            country_code: country_code,
            page: page,
            per_page: per_page
        },
        dataType: "json",
        success: function (data) {
                                    
            var template = $('#results_entries_template').html()
            var rendered = Mustache.render(template, data);
            $('#results_entries_result').html(rendered);

        }
    });
   

}




$(document).ready(function () {
    
    
    results_entries(3, 1, 10);
        
    
    

    $("#TblSelectAll").click(function () {
        if ($('#TblSelectAll:checked').length > 0) {
            $(".ProductsList tbody").find("input[type='checkbox']").prop("checked", true);
        }
        else {
            $(".ProductsList tbody").find("input[type='checkbox']").prop("checked", false);
        }
    });

});
