/**
 * Created by JackWong on 2016/8/10.
 */

// 获取盒子的某个属性兼容性写法
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]; //返回传递过来的某个属性值
    } else {
        return window.getComputedStyle(obj, null)[attr]; //w3c浏览器
    }

}

//多个属性的运动框架封装
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

    },30);
}


window.onload = function () {

    //获取元素
    function $(objId) { return document.getElementById(objId);}

    var js_slider = $("js-slider");// 获取最大的盒子
    var slider_main = $("slider-main"); // 滚动视图的父亲

    //获取所有的图片
    var imgs = slider_main.children;//获取所有需要滚动的部分
    var slider_ctrl = $("slider-ctrl"); // 获取控制span的父盒子

    //操作元素生成小span
    for(var i = 0; i < imgs.length;i++){
        var span = document.createElement("span");
        span.className = "slider-ctrl-con";//添加类名
        span.innerHTML = imgs.length-i;//6 - 1 实现倒叙的方式的插入
        slider_ctrl.insertBefore(span,slider_ctrl.children[1]);//每一次插入到第二个盒子的前面
    }
    var spans = slider_ctrl.children;
    spans[1].setAttribute("class","slider-ctrl-con current");

    var scrollWidth = js_slider.clientWidth; // 得到大盒子的宽度，也就是每个盒子每次要走动距离 310
    // //第一次排他性 ，所有的盒子都移动大盒子的外边去
    for(var i = 1;i < imgs.length;i++){
        imgs[i].style.left = scrollWidth + "px";
    }

    var iNow = 0;//用来标记当前显示的是第几张图片
    var clickFlag = true;
    //遍历每一个span 给span都加上事件
    for (var k in spans){
        //k是索引号 span[k]索引号对应的值

        spans[k].onclick = function () {
            if (clickFlag == false){
                return;
            }
            clickFlag = false;
            if(this.className === "slider-ctrl-prev"){
                //这个是判断你当前点的span是不是左箭头
                // alert("阿里山的姑娘");
                //当我们点击左侧的时候，当前的这张图片先慢慢走到右边，上一张图片一定先快速走到左侧（-310），然后在慢慢走到当前可视的盒子（即大盒子中）
                animate(imgs[iNow],{left:scrollWidth});
                --iNow < 0?iNow = imgs.length -1:iNow;
                imgs[iNow].style.left = -scrollWidth + "px";
                animate(imgs[iNow],{left:0},function () {
                    clickFlag = true;
                });
                setSquare();

            }else if (this.className === "slider-ctrl-next"){

                autoPlay(function () {
                    clickFlag = true;
                });
            }else {
                //首先我们要知道我们点的是第几张图片
                var that = this.innerHTML - 1;
                if(that > iNow){
                    animate(imgs[iNow],{left:-scrollWidth});
                    //让这张图片慢慢走出去
                    imgs[that].style.left = scrollWidth + "px";

                }else if (that < iNow){
                    animate(imgs[iNow],{left:scrollWidth});
                    imgs[that].style.left = -scrollWidth + "px";

                }
                iNow = that;
                animate(imgs[iNow],{left:0},function () {
                    clickFlag = true;
                });
                setSquare();
            }

        }
    }

    //设置当前被选中span
    function setSquare() {
        //1.清除所有的span 恢复到没有被选中的样式
        for(var i = 1 ; i <　spans.length - 1; i++){ //总共有8个 0和7不是我们要的 我们要的是1-6
            spans[i].className = "slider-ctrl-con";
        }
        // 2.设备当前被选中的样式
        spans[iNow+1].className = "slider-ctrl-con current";//记住加1 隔过<span class="slider-ctrl-prev"></span>

    }
    //每一次点击切换到下一张和我们定时器的功能类似，只不过一个机器，一个是人
    function  autoPlay(fn) {
        //当我们点击下一个的时候 当前这张图片应该慢慢的移动到左边，直到消失， 下一张一定是快速的移动右侧，然后在慢慢的回到舞台中（即大盒子中）
        animate(imgs[iNow],{left:-scrollWidth});//当前图片慢慢走到左边
        ++iNow>imgs.length-1?iNow = 0:iNow;
        imgs[iNow].style.left = scrollWidth + "px";
        if (fn){
            animate(imgs[iNow],{left:0},fn);
        }else {
            animate(imgs[iNow],{left:0});
        }
        setSquare();

    }

    var timer = null;
    timer = setInterval(autoPlay,2000);//开启定时器
    js_slider.onmouseover = function () {//清除定时器
        clearInterval(timer);

    }
    js_slider.onmouseout = function () {
        timer = setInterval(autoPlay,2000);//开启定时器
    }
}