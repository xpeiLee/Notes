/**
 * Created by Administrator on 2016/9/18.
 */
function setSquare(lis,iNow) {

    for (var i = 0; i < lis.length; i++) {
        lis[i].className = "";
    }

    lis[iNow].className = "now";

}
function animate(obj,attrs,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in attrs){
            // alert(attr);
            //传进来是哪一个属性，这个属性的值是多少
            //1.计算步长的第一步 拿到属性的初始值
            //拿到当前这个盒子这个属性的初始值
            var currnet = 0;
            if(attr === "opacity"){
                currnet = Math.round(parseInt(getStyle(obj,attr)*100)) || 0;
            }else {
                currnet = parseInt(getStyle(obj,attr));
            }
//                alert(attr);
//                alert(attrs[attr]);
//                2.计算步长
            // 步长计算 （目标值-当前的值）/10
            var  step = (attrs[attr] - currnet)/10; //步长
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (attr === "opacity"){//判断用户有没有输入opacity
                if ("opacity" in obj.style){
                    obj.style.opacity = (currnet + step)/100;

                }else {
                    obj.style.filter = "alpha(opacity = "+current + step+")";
                }

            } else {
                obj.style[attr] = currnet + step + "px";
            }

            if (currnet != attrs[attr]){
                flag = false;
            }
        }

        if (flag){
            clearInterval(obj.timer);
            if(fn != null){
                fn();//当定时器停止了，动画就结束了，如果有回调函数的话我们就该回调函数了 调用函数  就是函数名 + ()
            }
        }

    },20);
}
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]; //返回传递过来的某个属性值
    } else {
        return window.getComputedStyle(obj, null)[attr]; //w3c浏览器
    }
}
    window.onload = function () {
    // function $(id) {
    //     return document.getElementById(id)
    //
    // }
        search();
        var jd_banner = document.getElementById("jd_banner");
        var jdbanner_main = document.getElementById("jdbanner_main");
        var imgs = jdbanner_main.children;
        var lis = document.getElementById("jdbanner_con").children;
        var scrollWidth = jd_banner.clientWidth;
        for (var i = 1; i < imgs.length; i++) {
            imgs[i].style.left = scrollWidth + "px";
        }

        var iNow = 0;
        var clickFlag = true;

        for (var m in lis) {
            lis[m].onclick = function () {

                if (clickFlag == false) {
                    return;
                }
                clickFlag = false;
                var that = this.innerHTML - 1;
                if (that > iNow) {
                    animate(imgs[iNow], {left: -scrollWidth});

                    imgs[that].style.left = scrollWidth + "px";

                } else if (that < iNow) {
                    animate(imgs[iNow], {left: scrollWidth});
                    imgs[that].style.left = -scrollWidth + "px";

                }
                iNow = that;
                animate(imgs[iNow], {left: 0}, function () {
                    clickFlag = true;
                });
                setSquare(lis,iNow);
            }

        }

        var startX,endX;
        var baseDistance = 50;
//    注册事件 滑动事件
        $("#jd_banner").on("touchstart",function (e) {
            //    手指触摸开始记录一下手指所在的坐标x
            startX = e.originalEvent.touches[0].clientX;
            clearInterval(timer)

        });

        $("#jd_banner").on("touchmove",function (e) {
            endX = e.originalEvent.touches[0].clientX;
            clearInterval(timer)
        });

        $("#jd_banner").on("touchend",function () {
            clearInterval(timer)
            if (clickFlag == false){
                return;
            }
            clickFlag = false;
            var distance = Math.abs(endX - startX);
            if (distance > baseDistance && startX > endX ) {
                animate(imgs[iNow],{left:scrollWidth});
                --iNow < 0?iNow = imgs.length -1:iNow;
                imgs[iNow].style.left = -scrollWidth + "px";
                animate(imgs[iNow],{left:0},function () {
                    clickFlag = true;
                });
                setSquare(lis,iNow);
            }else if(distance > baseDistance && startX < endX ) {
                autoPlay(function () {
                    clickFlag = true;
                });
            }
        });

        function  autoPlay(fn) {
            //当我们点击下一个的时候 当前这张图片应该慢慢的移动到左边，直到消失， 下一张一定是快速的移动右侧，然后在慢慢的回到舞台中（即大盒子中）
            animate(imgs[iNow],{left:-scrollWidth});//当前图片慢慢走到左边
            ++iNow>imgs.length-1?iNow = 0:iNow;
            imgs[iNow].style.left = scrollWidth + "px";
            if (fn){
                animate(imgs[iNow],{left:0},function () {
                    fn();

                });
            }else {
                animate(imgs[iNow],{left:0});
            }
            setSquare(lis,iNow);

        }

        var timer = null;
        timer = setInterval(autoPlay,2000);//开启定时器
        jd_banner.onmouseover = function () {//清除定时器
            clearInterval(timer);
        }
        jd_banner.onmouseout = function () {
            timer = setInterval(autoPlay,2000);//开启定时器
        }

        var date = new Date("2016/9/20 22:30:00");
    function  daoJiShi() {
        var nowDate = Date.now();
        var cz =  date.getTime() - nowDate;
        var second = cz/1000;
        var minutes = parseInt(second /60)%60;
        var hour = parseInt(second/3600)%24;
        var miao = parseInt(second%60);
        if(hour<=9){hour="0"+hour};
        if(minutes<=9){minutes="0"+minutes};
        if(miao<=9){miao="0"+miao};
        document.getElementById("hour1").innerHTML=  parseInt(hour/10);
        document.getElementById("hour2").innerHTML=  hour%10;
        document.getElementById("minutes1").innerHTML=   parseInt(minutes/10);
        document.getElementById("minutes2").innerHTML=   minutes%10;
        document.getElementById("second1").innerHTML=  parseInt(miao/10);
        document.getElementById("second2").innerHTML=  miao%10;
    }
    setInterval(daoJiShi,1000);

}



