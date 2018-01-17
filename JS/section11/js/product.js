/**
 * Created by Administrator on 2018/1/16/016.
 */

$(document).ready(function () {
    $.ajax({
        type:"post",//请求类型
        url:"json/firstJson.txt",//请求地址
        data:null,//参数
        dataType:"JSON",//返回数据类型
        success:function (ret) {//请求成功
            console.log(ret);
            //生成列表
            var htmlContent = "";
            for (var index in ret){
                var temp = ret[index];
                htmlContent += "<li>";

                //名称
                htmlContent += "<a>";
                htmlContent += temp.name;
                htmlContent += "</a>";

                //数量
                htmlContent += "<span>";
                htmlContent += "(" + temp.number + ")";
                htmlContent += "</span>";

                htmlContent += "</li>";
            }

            //添加内容
            $("#product_catList_class ul").html(htmlContent);
        },
        error:function (ret) {//请求失败
            console.error(ret);
        }
    })
});