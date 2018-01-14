/**
 * Created by Administrator on 2018/1/11/011.
 */

$(document).ready(function () {
    //获取需要计算的tr
    var trNum = $(".product");
    //商品总价
    var summer = 0;
    //总积分
    var integral = 0;

    /*全选功能*/
    //获取不包含全选按钮的复选框
    var $myCheck = $("input[name='cartCheckBox']");
    $("#allCheckBox").click(function () {
        //判断全选按钮是否选中
        if (($("#allCheckBox").is(':checked'))) {
            $myCheck.each(function () {
                $(this).prop('checked', true);
            });
        } else if (($("#allCheckBox").is(':checked')) == false) {
            $myCheck.each(function () {
                $(this).prop('checked', false);
            });
        }
    });


    /*商品数量增加和减少功能*/
    for (var j = 0; j < trNum.length; j++) {
        shoping(trNum.eq(j));
    }

    function shoping(obj) {
        //获取 + -
        var add = obj.children(".cart_td_6").children(".hand");
        //获取数量标签
        var myNum = obj.children(".cart_td_6").children(".num_input");
        var myNumInt = parseInt(myNum.val());
        //获取所有的单价标签
        var myPrice = obj.children(".cart_td_5");
        //获取所有的小计
        var addPrice = obj.children(".cart_td_7");

        /*点击减号事件*/
        add.eq(0).click(function () {
            //数量自减1
            myNum.val(--myNumInt);
            //判断数量小于1时
            if (myNumInt < 1) {
                myNum.val("1");
                return;
            }
            //显示减1后的小计
            addPrice.html(myPrice.eq(0).html() * myNumInt);
            //显示商品总价
            $("#total").html(summer -= myPrice.eq(0).html());
            //显示可获积分点
            $("#integral").html(integral -= obj.children(".cart_td_4").text());
        });

        /* 点击加号事件*/
        add.eq(1).click(function () {
            //数量自增1
            myNum.val(++myNumInt);
            //显示加1后的小计
            addPrice.html(myPrice.eq(0).html() * myNumInt);
            //显示商品总价
            $("#total").html(summer += parseInt(myPrice.eq(0).html()));
            //显示可获积分点
            $("#integral").html(integral += parseInt(obj.children(".cart_td_4").text()));
        });


    }

    /*判断所有的复选框都被选中*/
    //获取到复选框
    var myCheck = $(".product").find(".cart_td_1").children("input");
    myCheck.click(function () {
        if (myCheck.eq(0).is(':checked') && myCheck.eq(1).is(':checked') && myCheck.eq(2).is(':checked') && myCheck.eq(3).is(':checked')) {
            $("#allCheckBox").prop("checked", true);
        } else {
            $("#allCheckBox").prop("checked", false);
        }
    });

    /*点击删除  删除对应的商品和卖家信息所在*/
    $(".cart_td_8").find("a").click(function () {
        //获取数量
        var myNum = $(this).parent().parent().find(".cart_td_6").children("input").val();
        //获取当前商品价格
        var money = $(this).parent().parent().find(".cart_td_7").html();
        //获取当前商品积分
        var userIntegral = $(this).parent().parent().find(".cart_td_4").html() * myNum;
        //获取总价
        var old = $("#total").html();
        //获取总积分
        var oldIntegral = $("#integral").html();
        //重新设置总价
        $("#total").html(old - money);
        //重新设置总积分
        $("#integral").html(oldIntegral - userIntegral);
        $(this).parent().parent().prev().remove();
        $(this).parent().parent().remove();
    });

    /*删除所选商品方法*/
    $("#deleteAll").click(function () {

    });

    /*计算总价和积分点方法*/
    function totalFun() {
        for (var i = 0; i < trNum.length; i++) {
            //获取数量
            var num = trNum.eq(i).children(".cart_td_6").find("input").val();
            //商品小计
            var price = num * trNum.eq(i).children(".cart_td_5").text();
            //显示商品小计
            trNum.eq(i).children(".cart_td_7").html(price);
            //计算总价
            summer += price;
            //计算总积分
            integral += num * trNum.eq(i).children(".cart_td_4").text();
        }
        //显示商品总价
        $("#total").html(summer);
        //显示可获积分点
        $("#integral").html(integral);
    }

    //调用计算商品总价和积分的方法
    window.onload = totalFun;
});

