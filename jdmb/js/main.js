/**
 * Created by Administrator on 2016/9/19.
 */
window.onload = function () {
    search();
    scrollPic();
    secondKill();
}

//头部搜索
var search = function () {
    //搜索框对象
    var search = document.getElementsByClassName("jdheader-box")[0];
    //banner
    var banner = document.getElementsByClassName("jd_banner")[0];
    var height = banner.offsetHeight;
    window.onscroll = function () {
        var top = document.body.scrollTop;
       //当滚动高度大于banner高度的时候，颜色不变
        if (top>height){
            search.style.background = "rgba(201,21,35,.85)"
        }else{
            var op = top/height*0.85;
            search.style.background = "rgba(201,21,35,"+op+")";
        }
    }
}

var scrollPic = function () {
//    banner
    var banner = document.getElementsByClassName("jd_banner")[0];
    //获取图片的宽度
    var width = banner.offsetWidth;
    //图片盒子
    var imgBox = banner.getElementsByTagName("ul")[0];
    //点盒子
    var pointBox = banner.getElementsByTagName("ul")[1];
    //获取里边的每一个点
    var pointList = pointBox.getElementsByTagName("li");
   //加过渡
    var addTransition = function () {
        imgBox.style.transition = "all .3s ease";
        imgBox.style.webkitTransition = "all .3s ease";
    }
    //删除过渡
    var removeTransition = function () {
        imgBox.style.transition = "none";
        imgBox.style.webkitTransition = "none";
    }
    //改变位置
    var changePoinsition = function (position) {
        imgBox.style.transform = "translateX("+position+"px)";
        imgBox.style.webkitTransform = "translateX("+position+"px)";
    }
    var changePointWithIndex = function (index) {
        for(var i = 0 ; i < pointList.length;i++){
            if(index==9){
                index = 1;
            }
            if(i==index-1){
                pointList[index-1].className = "now";
            }else{
                pointList[i].className = "";
            }
        }

    }
    //当前图片的索引号
    var index = 1;
    var timer =null;
    var startX,endX,moveX
    timer = setInterval(function () {
        index++;
        addTransition();
        changePoinsition(-index*width)
        changePointWithIndex(index);
    },5000)
    //过渡结束会调用，即每换一张图片
    imgBox.addEventListener("webkitTransitionEnd",function () {
       if(index>=9){
           index=1;
           removeTransition();
           changePoinsition(-index*width);
           changePointWithIndex(index);
       }else if(index<= 0) {
           index = 8 ;
           removeTransition();
           changePoinsition(-index*width);
           changePointWithIndex(index);
       }

    });
    //手势
    imgBox.addEventListener("touchstart",function (e) {
        startX = e.touches[0].clientX;
        console.log("aaaa")
    })

    imgBox.addEventListener("touchmove",function (e) {
        clearInterval(timer);
        //清除默认事件
        e.preventDefault();
        console.log("bbbb")
        endX = e.touches[0].clientX;
        //记录一下移动的距离
        moveX = endX - startX;
        removeTransition();
        changePoinsition(-index*width+moveX);
    })
    //触屏结束
    imgBox.addEventListener("touchend",function (e) {
        console.log("cccc");
        if(Math.abs(moveX)>(1/3*width) && endX > 0){
            if(moveX > 0){
                index--;
            }else{
                index++;
            }
            changePoinsition(-index*width);
            changePointWithIndex(index);
        }
        //如果没有查过三分之一执行的是这部分代码
        addTransition();
        changePoinsition(-index*width);
        changePointWithIndex(index);
        //初始化
        startX=0;
        endX=0;
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            addTransition();
            changePoinsition(-index*width)
            changePointWithIndex(index);
        },5000)
    })
}


//秒杀倒计时

var secondKill = function () {
    //父盒子
    var sk_time = document.getElementsByClassName("sk_time")[0];
    var timeList = sk_time.getElementsByClassName("sk_num");
    var times = 10*60*60;
    var timer = setInterval(function () {
        times--;
        var h = Math.floor(times/(60*60));
        var m = Math.floor(times/60%60);
        var s = Math.floor(times%60);
        timeList[0].innerText = h >= 10 ? Math.floor(h/10):0;
        timeList[1].innerText = h%10;
        timeList[2].innerText = m >= 10 ? Math.floor(m/10):0;
        timeList[3].innerText = m%10;
        timeList[4].innerText = s >= 10 ? Math.floor(s/10):0;
        timeList[5].innerText = s%10;
    },1000)
    if(times==0){
        clearInterval(timer);
    }
}