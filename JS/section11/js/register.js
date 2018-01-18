/**
 * Created by Administrator on 2018/1/13/013.
 */

$(document).ready(function () {
    /*注册验证*/
    $("#registerBtn").click(function () {
        /*Email地址验证*/
        //获取Email标签
        var userEmail = document.getElementById("email");
        if (userEmail.validity.valueMissing == true) {
            userEmail.setCustomValidity("邮箱不能为空");
        } else if (userEmail.validity.patternMismatch == true) {
            userEmail.setCustomValidity("请输入正确的邮箱格式");
        } else {
            userEmail.setCustomValidity("");
        }
        /*昵称验证*/
        //获取昵称标签
        var userNickName = document.getElementById("nickName");
        if (userNickName.validity.valueMissing == true) {
            userNickName.setCustomValidity("昵称不能为空");
        } else if (userNickName.patternMismatch == true) {
            userNickName.setCustomValidity("昵称必须使用大小写英文字母、数字，长度为4-20个字符");
        } else {
            userNickName.setCustomValidity("");
        }
        /*密码验证*/
        //获取密码标签
        var userPwd = document.getElementById("pwd");
        if (userPwd.validity.valueMissing == true) {
            userPwd.setCustomValidity("密码不能为空");
        } else if (userPwd.patternMismatch == true) {
            userPwd.setCustomValidity("密码必须使用大小写英文字母、数字，长度为6-20个字符");
        } else {
            userPwd.setCustomValidity("");
        }
        //获取再次输入密码标签
        var userRepwd = document.getElementById("repwd");
        if (userRepwd.valueMissing == true) {
            userRepwd.setCustomValidity("两次输入的密码不一致");
        } else if (userRepwd.value !== userPwd.value) {
            userRepwd.setCustomValidity("两次输入的密码不一致");
        } else {
            userRepwd.setCustomValidity("");
        }
    });


    $("#province").change(function () {
        var provinceList = ["0","湖南","湖北","江苏","浙江","安徽","福建","山东"];
        provinceList["0"] = ["请选择城市/地区"];
        provinceList["湖南"] = ["长沙市","益阳市","永州市","岳阳市","株洲市","湘潭市","衡阳市","邵阳市","常德市","张家界市","郴州市","娄底市","湘西市"];
        provinceList["湖北"] = ["武汉市","黄石市","襄樊市","十堰市","荆州市","宜昌市","荆门市","孝感市","黄冈市","随州市","潜江市","仙桃市","天门市","咸宁市","恩施市","鄂州市"];
        provinceList["江苏"] = ["济南市","泰安市","德州市","滨州市","济宁市","烟台市","青岛市","聊城市"];
        provinceList["浙江"] = ["杭州市","温州市","宁波市","瑞安市","慈溪市","建德市","绍兴市","湖州市","平湖市","嘉兴市","海宁市","乐青市","上虞市","奉化市"];
        provinceList["安徽"] = ["合肥市","芜湖市","淮南市","巢湖市","马鞍山市","安庆市","宿州市","淮北市","六安市","亳州市","滁州市"];
        provinceList["福建"] = ["福州市","厦门市","宁德市","莆田市","泉州市","漳州市","龙岩市","三明市","南平市"];
        provinceList["山东"] = ["济南市","泰安市","德州市","滨州市","济宁市","烟台市","青岛市","聊城市"];
        var htmlContent = "";
        for (var i = 0;i < provinceList[$(this).val()].length;i++){
            htmlContent += "<option>" + provinceList[$(this).val()][i] + "</option>";
        }
        $("#city").html(htmlContent)
    })
});