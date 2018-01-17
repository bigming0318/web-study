/**
 * Created by Administrator on 2018/1/17/017.
 */
$(document).ready(function () {
    $(".adver").mouseover(function () {
        $(".arrowLeft").show();
        $(".arrowRight").show();
    })
    $(".adver").mouseout(function () {
        $(".arrowLeft").hide();
        $(".arrowRight").hide();
    })


    var i = 1;
    var j = 0;
    $(".arrowRight").click(function () {
        if (i < 6){
            $(".adver").css("background","url('images/adver0"+(i+1)+".jpg')");
            $("ul li").eq(j+1).css("background","orange");
            $("ul li").eq(j+1).siblings().css("background","#333");
            i += 1;
            j += 1;
        }else if (i = 6){
            alert("这已经是最后一张图片了");
        }
        return i;
    });

    $(".arrowLeft").click(function () {
        if (i != 1 || i <= 6){
            $(".adver").css("background","url('images/adver0"+(i)+".jpg')");
            $("ul li").eq(j).css("background","orange");
            $("ul li").eq(j).siblings().css("background","#333");
        } else if (i = 1){
            $(".adver").css("background","url('images/adver0"+(i)+".jpg')");
            $("ul li").eq(j).css("background","orange");
            $("ul li").eq(j).siblings().css("background","#333");
            alert("这已经是第一张图片了")
        }
    })
});