/**
 * Created by Administrator on 2018/1/16/016.
 */

$(document).ready(function () {
    /*蔚蓝为你推荐*/
    var state = 0;
    $("#shopping_commend_arrow").click(function () {
        if (state == 0){
            $("#shopping_commend_sort").hide("slow");
            $(this).attr("src","images/shopping_arrow_down.gif");
            state = 1;
        } else {
            $("#shopping_commend_sort").show("slow");
            $(this).attr("src","images/shopping_arrow_up.gif");
            state = 0;
        }
    })
});