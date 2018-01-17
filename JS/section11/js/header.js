/**
 * Created by Administrator on 2018/1/16/016.
 */
$(document).ready(function () {
    $("#menu").mouseenter(function () {
        $("#dd_menu_top_down").slideDown(1200);
    });
    $("#menu").mouseleave(function () {
        $("#dd_menu_top_down").slideUp(1200);
    })
});