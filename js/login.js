var close = document.getElementsByClassName("close")[0];
var login = document.getElementById("login");
var code = document.getElementsByClassName("code")[0];
var form = document.getElementsByTagName("form")[0];
var codeimg = code.children[0];
var txt = form.innerHTML;
var flag = true; //切换
close.onclick = function () {
    login.style.display = "none";
}
code.onclick = function () {
    if (flag) {
        var imgs = new Image();
        imgs.src = "./img/haibao4.jpg";
        imgs.className = 'img'
        form.innerHTML = "";
        form.appendChild(imgs);
        codeimg.src = "./img/haibao5.jpg"; //3或5
        flag = false;
    } else {
        form.innerHTML = txt;
        codeimg.src = "./img/haibao3.jpg";
        flag = true;
    }
}
// 密码显示隐藏切换  type类型转换
//另外一个是length-1 ，再减去i  ！！！
var eyeIsShow = document.getElementsByClassName("isshow");
var userpassword = document.getElementsByClassName("userpassword")[0];
for (let i = 0; i < eyeIsShow.length; i++) {
    eyeIsShow[i].onclick = function () {
        this.style.display = "none";
        eyeIsShow[eyeIsShow.length - 1 - i].style.display = "block";
        userpassword.setAttribute("type", userpassword.getAttribute("type") == "password" ? "text" : "password");
    }
}
// 正则验证
//手机、邮箱

// 多选框
var remeber = document.getElementsByClassName("remeber")[0];
var formuser = document.getElementsByTagName("form")[0];
var usercount = document.getElementsByClassName("usercount")[0];
// focus时的样式  
usercount.onfocus = function () {
    this.value = "";
    this.style.color = "#000";
    this.style.fontSize = "12px";
}
userpassword.onfocus = function () {
    this.value = "";
    this.type = "password";
    this.style.color = "#000";
    this.style.fontSize = "12px";
}
// 表单提交
formuser.onsubmit = function () {
    //如果填的信息不符合要求、不可以提交
    //手机 邮箱
    var regcount = /^1[3456789]\d{9}$/;
    var regcount2=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    //密码  至少8个字符，至少1个大写字母，1个小写字母和1个数字
    var regpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if ((regcount.test(usercount.value) == true||regcount2.test(usercount.value) == true) && regpassword.test(userpassword.value) == true) {
        if (remeber.checked == true) {
            var data={
                "usercount":usercount.value,
                "userpassword":userpassword.value
            }
            localStorage.setItem("user",JSON.stringify(data));
        }
        return true;
    } 
    else {
        if (regcount.test(usercount.value)==false||regcount.test(usercount.value) == false) {
            usercount.value = "必须是手机、邮箱号";
            usercount.style.color = "red";
            usercount.style.fontSize = "10px";
            usercount.style.fontSize = "10px";
        }
        if (regpassword.test(userpassword.value) == false) {
            userpassword.type = "text";
            userpassword.style.color = "red";
            userpassword.value = "至少8个字符 至少1个大写字母，1个小写字母和1个数字";
            userpassword.style.fontSize = "10px";
        }
        return false;
    }
}
window.onload=function(){
    if(this.localStorage.getItem("user")){
        var data=this.JSON.parse(this.localStorage.getItem("user"));
        usercount.value=data.usercount;
        userpassword.value=data.userpassword;
        remeber.checked="checked";
    }
}
