window.onload = function () {
    // 获取对象
    //css3动态变化
    var sca = 1.1; //放大倍数
    var h3 = document.getElementsByTagName("h3"); //小标题
    var lbtn = document.getElementsByClassName("lbtn");
    //导航栏
    $(".nav_right>ul>li").mouseenter(function(){
        $(this).children().find(".navcont").animate({width:"toggle",height:'toggle'},"fast");
    }).mouseleave(function(){
        $(this).children().find(".navcont").hide();
    });
    $(".sys_nav_item").mouseenter(function(){
        $(this).children("ul").show();
        $(".trs").css("display","inline");
        $(this).children(".sanjiao").show();
    }).mouseleave(function(){
        $(this).children("ul").hide();
        $(".trs").css("display","inline-block")
        $(this).children(".sanjiao").hide();
    })
    
    // 1、鼠标进入图片盒子，图片放大、出去还原、字体变色
        $("#item img").mouseenter(function () {
            this.style.transform = 'scale(' + sca + ') translate3d( 0, 0, 0)';
            this.style.webkitTransform = 'scale(' + sca + ') translate3d( 0, 0, 0)';
            this.style.backfaceVisibility = 'hidden';
            this.style.transition = 'all 0.6s linear';
            this.style.cursor='pointer'
        }).mouseout(function () {
            this.style.transform = '';
            this.style.webkitTransform = '';
            this.style.transition = '';
            this.style.backfaceVisibility = 'hidden';
            this.style.cursor='default';
        });
    for (var i = 0; i < h3.length; i++) {
        h3[i].childNodes[0].addEventListener("mouseenter", function () {
            this.style.color = 'rgb(51, 104, 218)';
            this.style.cursor='pointer';
        });
        h3[i].childNodes[0].addEventListener("mouseout", function () {
            this.style.color = '';
            this.style.cursor='default';
        });
    }
    //2、部分标题鼠标进入变色
    $(".h3>span,.h3>strong,.img-content>h4").mouseenter(function () {
        this.style.color = 'rgb(51, 104, 218)';
        this.style.cursor='pointer';
    }).mouseleave(function () {
        this.style.color = '';
        this.style.cursor='default';
    })

    //3、关于优酷首页上半部分的轮播
    //  1、左右箭头： 和左右按钮是一样的，就是变量i得变一下，获取元素也得变一下
    //  2、点击按钮进行左右移动  左右按钮的变换
    // 不管是jquery还是document都可以获得元素的不可见元素！
    //轮播点击

    // 用来获取margin-left要移动的大小
    var yksingleItem = document.getElementsByClassName("yk_single_item");
    for (var k = 0; k < lbtn.length; k++) {
        var marginLeft = parseFloat(window.getComputedStyle(yksingleItem[k]).width); //移动的大小 
    }
    $(".rbtn").click(function () {
        this.style.cursor='pointer';
        $(this).siblings(".ykmove:visible").css("margin-left", function () {
        var marginleft = -(marginLeft * 2) + 'px';
            return marginleft;
        })
        $(this).siblings(".ykmove:visible").css({
            "transition": "margin 0.45s linear",
        });
        $(this).siblings(".lbtn").show();
        this.style.display = "none";
    });
    $(".lbtn").click(function () {
        this.style.cursor='pointer';
        $(this).siblings(".ykmove:visible").css("margin-left", function () {
            return 0;
        })
        $(this).siblings(".ykmove:visible").css({
            "transition": "margin 0.45s linear",
        });
        $(this).siblings(".rbtn").show();
        this.style.display = "none";
    });
    $(".zlbtn").click(function(){
        this.style.cursor='pointer';
        $(this).hide();
        $(this).siblings(".zrbtn").show();
        $(this).siblings(".contimg").find(".allimg").css("margin-left","0")
    })
    $(".zrbtn").click(function(){
        this.style.cursor='pointer';
        $(this).hide();
        $(this).siblings(".zlbtn").show();
        $(this).siblings(".contimg").find(".allimg").css("margin-left","-300px")
    })
//类似直播、右上小箭头 
$(".rybtn").css("color","#fff").siblings(".lybtn").css("color","#666");
    $(".lybtn").click(function () {
        this.style.cursor='pointer';
        $(this).parents(".title").siblings(".ykmove:visible").css("margin-left", function () {
            return 0;
        })
        $(this).parents(".title").siblings(".ykmove:visible").css({
            "transition": "margin 0.45s linear",
        });
        //带动图
        $(this).parents(".title").siblings(".juji").find(".imgmove").css("margin-left", function () {
            return 0;
        })
        $(this).parents(".title").siblings(".juji").find(".imgmove").css({
            "transition": "margin 0.45s linear",
        });
        $(this).css("color","#666").siblings(".rybtn").css("color","#fff");
    })
    $(".rybtn").click(function () {
        this.style.cursor='pointer';
        $(this).parents(".title").siblings(".ykmove:visible").css("margin-left", function () {
            var marginleft = -(marginLeft * 2) + 'px';
                return marginleft;
            });
            $(this).parents(".title").siblings(".ykmove:visible").css({
            "transition": "margin 0.45s linear",
        });
        //带动图
        $(this).parents(".title").siblings(".juji").find(".imgmove").css("margin-left", function () {
            var marginleft = -(marginLeft * 2) + 'px';
                return marginleft;
        })
        $(this).parents(".title").siblings(".juji").find(".imgmove").css({
            "transition": "margin 0.45s linear",
        });
        $(this).css("color","#666").siblings(".lybtn").css("color","#fff");
    })

    // 4、选项卡  选项导航变色  底下的内容变
    $(".ykitem").each(function () {
        $(this).find(".ykmove").eq(0).show().css({
            "opacity": "1",
            "transition": "all .45s linear",
        }).siblings(".ykmove").hide().css({
            "opacity": "0",
            "transition": "all .45s linear",
        });
    });
    // 带一张动图的
    $(".item-6").each(function () {
        $(this).find(".juji").eq(0).show().css({
            "opacity": "1",
            "transition": "all .45s linear",
        }).siblings(".juji").hide().css({
            "opacity": "0",
            "transition": "all .45s linear",
        });
    });
    $(".title-middle").find(".select").mouseenter(function () {
        var index = $(this).index();
        this.style.cursor="pointer";
        $(this).addClass("skyblue").siblings().removeClass("skyblue");
        $(this).parents(".title").siblings(".ykmove,.juji").eq(index).show().css({
                "opacity": "1",
            })
            .siblings(".ykmove,.juji").hide().css({
                "opacity": "0",
            });
    })

    //点击换一换，底下的内容随意切换
    $(".change").parents(".title").siblings(".ykmove").css("opacity","1");
    $(".change").click(function(){
        this.style.cursor='pointer';
        var x=$(this).parents(".title").siblings(".ykmove").length;
        var index=parseInt(Math.floor(Math.random()*x));
        $(this).parents(".title").siblings(".ykmove").eq(index).show().css({
            "opacity": "1",
        }).siblings(".ykmove").hide()
    })

    //滑动一定距离时，客服那块增加一个回到顶部的箭头
    $(window).scroll(function(){
        var h=$(window).scrollTop();
        if(h>1000){
            $(".back").css("display","block");
        }
        else {
            $(".back").css("display","none");
        }
        //滑到一定距离，黑色导航栏显示、里边的部分内容显示 
        if(h>70){
            $("#nav").css({
                "position":"fixed",
                "top":"0",
                "left":"0",
                "background":"#000",
                "z-index":"999"
            })
            $(".sort").show();
        }
        else {
            $("#nav").css({
                "position":"relative",
                "background":"transparent",
            })
            $(".sort").hide();
        }
    })
    //点击回到顶部  方法有三
    // $(".back").click(function(){
        //1、
        // document.documentElement.scrollTop=0;
        //2、回到顶部的值写在括号里！！！
        // $(document).scrollTop(0);
    // })

    //3、
    $(".back").click(function() {
        $("html,body").animate({scrollTop:0}, 500);
    });
}
var speed = 1000;//轮播速度
var content = document.getElementsByClassName("content")[0];//轮播盒子
var circlediv=document.getElementsByClassName("circle")[0];//分页盒子
//创建轮播盒子、图片
var imgs=["lunbo1.jpg","lunbo7.jpg","lunbo6.jpg","lunbo5.jpg","lunbo4.jpg","lunbo3.jpg","lunbo2.jpg","lunbo1.jpg"];
for(var i=0;i<imgs.length;i++){
    var div=document.createElement("div");
    div.className="pic";
    div.style.zIndex=imgs.length-i;
    var img=document.createElement("img");
    img.src='./img/'+imgs[i];
    div.appendChild(img);
    content.appendChild(div);
    var page=document.createElement("div");
    circlediv.appendChild(page);
}
var pic = document.getElementsByClassName("pic");//获取轮播盒子
var zindex = 0; //每张图片的层大小
var timer = null; //计时器
var picindex = 0;//索引
var circle = circlediv.children;//分页的每一个元素
function move(res, count) {
    for (var k = 0; k < count; k++) {
        //获取层、改变层，赋值层
        for (var i = 0; i < pic.length; i++) {
            zindex = parseInt(pic[i].style.zIndex);
            if (res == "right") {
                zindex++;
                //zindex=6->7->1 透明度为0,层变为1
                if (zindex > pic.length) {
                    zindex = 1;
                    pic[i].style.opacity = "0";
                }
                //zindex=5->6 透明度为1
                if (zindex == pic.length) {
                    pic[i].style.opacity = "1"
                    picindex = i;
                }
            } else {
                zindex--;
                //zindex=0->6 透明度为1，层变为6
                if (zindex == 0) {
                    zindex = 8;
                    pic[i].style.opacity = "1";
                    picindex = i;
                }
                //zindex=6->5的透明度为0
                else if (zindex == pic.length - 1) {
                    pic[i].style.opacity = "0";
                }
            }
            pic[i].style.zIndex = zindex;
            addColor();
        }
    }
}
function animate() {
    timer = setInterval(function () {
        move("right", 1);
    }, speed);
}
//小圆点  
//颜色变化
function addColor() {
    for (var i = 0; i < circle.length; i++) {
        if (picindex == i) {
            circle[i].className = "bgc";
        } else {
            circle[i].className = "";
        }
    }
}
function loop() {
    animate();
    addColor();
    //鼠标进入与离开
    content.onmouseenter = function () {
        clearInterval(timer);
    }
    content.onmouseleave = function () {
        animate();
    }

    //鼠标触碰小圆点
    for (var i = 0; i < circle.length; i++) {
        circle[i].picindex = i;
        circle[i].onmouseenter = function () {
            count = this.picindex - picindex > 0 ? this.picindex - picindex : circle.length + (this.picindex - picindex);
            move("right", count);
            picindex = this.picindex;
            addColor();
        }
    }
}
loop();
