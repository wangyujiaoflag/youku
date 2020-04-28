var comment = document.getElementById("comment");
//点赞、数量加1，再一次点，数量减一
var love = document.getElementsByClassName("dianzan");
var num = document.getElementsByClassName("num");
//点击更多回复，block消失，回复展开
var block = document.getElementsByClassName("block");
var speak = document.getElementsByClassName("speak");
var goback = document.getElementsByClassName("goback");
for (var i = 0; i < love.length; i++) {
    //点赞、数量加1，再一次点，数量减一
    love[i].flag = true;
    love[i].onclick = function () {
        var xin = this.children[0];
        if (this.flag) {
            this.children[1].innerHTML++;
            xin.style.color = "pink";
            this.flag = false;
        } else {
            this.children[1].innerHTML--;
            xin.style.color = "#666";
            this.flag = true;
        }
    }

//点击更多回复，block消失，回复展开
block[i].index=i;
goback[i].index=i;
block[i].onclick = function () {
    this.style.display = "none";
    speak[this.index].style.display = "block";
}
goback[i].onclick = function () {
    speak[this.index].style.display = "none";
    block[this.index].style.display = "block";
}

// //发表一条评论  参数 头像src，昵称，发表时间，内容，点赞数
// // function showComment(imgUrl,name,date,content,dianZanNum){
// // }

// //点击回复选项的时候，使用addcomments函数，新增一个回复框，只能产生一个框，
// // 用户点击提交按钮后，将文本的内容新增到ul的最前面

var huifu = document.getElementsByClassName("huifu");
huifu[i].index=i;
huifu[i].onclick = function () {
    var texts = document.getElementsByClassName("text")[this.index];
    //如果要回复，则创建，如果已创建，则隐藏该元素
    if (this.children[1].innerHTML == "回复") {
        if (texts == null) {
            addcomments(this.index);
            //点击回复，追加评论
            var btn = document.getElementsByClassName("btn")[this.index];
            var textarea = document.getElementsByTagName("textarea")[this.index];
            var textlength = document.getElementsByClassName("nownum")[this.index];
            var allnum = document.getElementsByClassName("allnum")[this.index];
            var ul = document.getElementsByClassName("speak")[this.index].children[0];
            btn.onclick = function () {
                var date = new Date();
                //创建一个li元素，把内容加进去
                var li = document.createElement("li");
                li.innerHTML = textarea.value + ' ' + date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getHours() + ":" + (date.getMinutes() >= 9 ? date.getMinutes() : ('0' + date.getMinutes()));
                ul.insertBefore(li, ul.children[0]);
                //回复的数量加一
                allnum.innerHTML = 1 + parseInt(allnum.innerHTML);
                textarea.value = "";
                //统计字数清零
                textlength.innerHTML="0";
            }
            // 节流、时间戳、键盘事件 当他起来的时候计算字数
            var throttle = function (func, wait) {
                var prev = 0;
                return function () {
                    let now = +new Date();
                    let context = this;
                    if (now - prev >= wait) {
                        func.apply(context, arguments);
                        prev = now;
                    }
                }
            }
            textarea.onkeyup =throttle(function(){
                textlength.innerHTML = textarea.value.length;
            },200)
        } else {
            texts.style.display = "block";
        }
        this.children[1].innerHTML = "收起";
    } else {
        this.children[1].innerHTML = "回复";
        texts.style.display = "none";
    }

}
}
// // 回复框  自己发表、回复别人的
function addcomments(index) {
    //会复框产生 限制字数  ：：brfore
    //回复框
    var div = document.createElement("div");
    div.className = "text";
    //留言
    var liuyan = document.createElement("textarea");
    liuyan.maxLength = "300";
    div.append(liuyan);
    //字数统计、回复按钮框
    var btm = document.createElement("div");
    btm.className = "button";
    //回复按钮
    var btn = document.createElement("button");
    btn.innerHTML = "回复";
    btn.className = "btn";
    //字数统计
    var chinese = document.createElement("div");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    span2.innerHTML = "/300";
    span1.innerHTML = "0";
    span1.className = "nownum";
    chinese.append(span1);
    chinese.append(span2);
    btm.append(chinese);
    btm.append(btn);
    div.append(btm);
    num[index].insertBefore(div,block[index]);
}