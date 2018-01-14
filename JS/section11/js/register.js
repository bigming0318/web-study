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
});