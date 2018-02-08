/**
 * Created by Administrator on 2018/2/7/007.
 */
$(function () {
    $(".main-hotel-logo-arr img").click(function () {
        if ($(this).index() == 0){
            $(".main-hotel-logo-img").animate({"left":"-200px"},1000)
        } else if ($(this).index() == 1){
            $(".main-hotel-logo-img").animate({"left":"0px"},1000)
        }
    })
});