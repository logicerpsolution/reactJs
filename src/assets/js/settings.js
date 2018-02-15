$(document).ready(function(){
    $('.loading-img').css({'top': ($(window).outerHeight() - $('.loading-img').outerHeight()) / 2 }); 
    setTimeout(function(){
         setTimeout(removeloader,2000)
    },1800);
    function removeloader(){
        setTimeout(function(){
            $("body").removeClass("loader");
        },2000);
    }
}); 
$(function(){        
    /* reportrange */
    if($("#reportrange").length > 0){   
        $("#reportrange").daterangepicker({                    
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            opens: 'left',
            buttonClasses: ['btn btn-default'],
            applyClass: 'btn-small btn-primary',
            cancelClass: 'btn-small',
            format: 'MM.DD.YYYY',
            separator: ' to ',
            startDate: moment().subtract('days', 29),
            endDate: moment()            
          },function(start, end) {
              $('#reportrange span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
        });
        
        $("#reportrange span").html(moment().subtract('days', 29).format('MMM D, YYYY') + ' - ' + moment().format('MMM D, YYYY'));
    }
    /* end reportrange */

});
$(function(){
    if ($(".select").length > 0) {
        $(".select").selectpicker();
        $(".select").on("change", function () {
            if ($(this).val() == "" || null === $(this).val()) {
                if (!$(this).attr("multiple"))
                    $(this).val("").find("option").removeAttr("selected").prop("selected", false);
            } else {
                $(this).find("option[value=" + $(this).val() + "]").attr("selected", true);
            }
        });
    }
}); //END Bootstrap select
