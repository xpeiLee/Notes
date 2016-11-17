/**
 * Created by Administrator on 2016/8/13.
 */
function $(id) {
    return document.getElementById(id)

}
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]; //返回传递过来的某个属性值
    } else {
        return window.getComputedStyle(obj, null)[attr]; //w3c浏览器
    }

}

//多个属性的运动框架封装
function animate(obj, attrs, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in attrs) {
            //传进来是哪一个属性，这个属性的值是多少
            //1.计算步长的第一步 拿到属性的初始值
            //拿到当前这个盒子这个属性的初始值
            var currnet = 0;
            if (attr === "opacity") {
                currnet = Math.round(parseInt(getStyle(obj, attr) * 100)) || 0;
            } else {
                currnet = parseInt(getStyle(obj, attr));
            }
//                alert(attr);
//                alert(attrs[attr]);
//                2.计算步长
            // 步长计算 （目标值-当前的值）/10
            var step = (attrs[attr] - currnet) / 10; //步长
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (attr === "opacity") {//判断用户有没有输入opacity
                if ("opacity" in obj.style) {
                    obj.style.opacity = (currnet + step) / 100;

                } else {
                    obj.style.filter = "alpha(opacity = " + current + step + ")";
                }

            } else {
                obj.style[attr] = currnet + step + "px";
            }

            if (currnet != attrs[attr]) {
                flag = false;
            }
        }

        if (flag) {
            clearInterval(obj.timer);
            if (fn != null) {
                fn();//当定时器停止了，动画就结束了，如果有回调函数的话我们就该回调函数了 调用函数  就是函数名 + ()
            }
        }

    }, 20);
}
// window.onload = function () {
//     var topcart = $("topcart");
//     var cartmenu = $("cartmenu");
//     var topa = $("topa");
//     var gwc = $("gwc");
    // topcart.onmouseover = function () {
    //     topa.style.color = "#ff6700";
    //     topa.style.backgroundColor = "#fff";
    //     cartmenu.style.display = "block";
    //     gwc.style.backgroundImage = "url(images/gouwuche1.png)";
    // }
    // topcart.onmouseout = function () {
    //     topa.style.color = "";
    //     topa.style.backgroundColor = "";
    //     cartmenu.style.display = "none";
    //     gwc.style.backgroundImage = ""
    // }

    var arr = ["手机 平板 电话卡", "笔记本", "电视 盒子", "路由器 智能硬件", "移动电源 电池 插线板", "耳机 音箱", "保护套 后盖", "贴膜 其他配件", "米兔 服装", "箱包 其他周边"]
    var siteul = $("siteul");
    for (var i = 0, len = arr.length; i < len; i++) {
        var newLi = document.createElement("li");
        var newa = document.createElement("a");
        siteul.appendChild(newLi);
        newLi.appendChild(newa);
        newa.setAttribute("href", "javascript:;");
        var ulLis = siteul.getElementsByTagName("li");
        ulLis[i].children[0].innerHTML = arr[i];
        ulLis[i].onmouseover = function () {
            for (var j = 0, len = ulLis.length; j < len; j++) {
                ulLis[j].style.backgroundColor = "";
            }
            this.style.backgroundColor = "#ff6700";
        }
        ulLis[i].onmouseout = function () {
            this.style.backgroundColor = ""
        }
    }


    var ctrl = $("ctrl").getElementsByTagName("span")
    var js_slider = $("js-slider");
    var slider_main = $("slider-main");
    var imgs = slider_main.children;
    var slider_ctrl = $("slider-ctrl");
    for (var i = 0; i < imgs.length; i++) {
        var span = document.createElement("span");
        span.className = "slider-ctrl-con";
        span.innerHTML = i + 1;
        slider_ctrl.appendChild(span);
    }
   var spans = slider_ctrl.children;
spans[0].setAttribute("class", "slider-ctrl-con current");

    var scrollWidth = js_slider.clientWidth;
    for (var i = 1; i < imgs.length; i++) {
        imgs[i].style.left = scrollWidth + "px";
    }

    var iNow = 0;
    var clickFlag = true;

    for (var k in ctrl) {
        ctrl[k].onclick = function () {
            if (clickFlag == false) {
                return;
            }
            clickFlag = false;
            if (this.className === "slider-ctrl-prev") {

                animate(imgs[iNow], {left: scrollWidth});
                --iNow < 0 ? iNow = imgs.length - 1 : iNow;
                imgs[iNow].style.left = -scrollWidth + "px";
                animate(imgs[iNow], {left: 0}, function () {
                    clickFlag = true;
                });
                setSquare();

            } else if (this.className === "slider-ctrl-next") {
                autoPlay(function () {
                    clickFlag = true;
                });
            }
        }
    }
    for (var m in spans) {


        spans[m].onclick = function () {

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
            setSquare();
        }

    }


    function setSquare() {

        for (var i = 0; i < spans.length; i++) {
            spans[i].className = "slider-ctrl-con";
        }

        spans[iNow].className = "slider-ctrl-con current";

    }

    function autoPlay(fn) {

        animate(imgs[iNow], {left: -scrollWidth});
        ++iNow > imgs.length - 1 ? iNow = 0 : iNow;
        imgs[iNow].style.left = scrollWidth + "px";
        if (fn) {
            animate(imgs[iNow], {left: 0}, fn);
        } else {
            animate(imgs[iNow], {left: 0});
        }
        setSquare();

    }

    // var arr1 = ["选购手机","企业团购","官翻产品","小米移动","以旧换新","话费充值"]
    var channelul = $("channelul");
    var chana = channelul.getElementsByTagName("a")
    for (var i = 0, len = chana.length; i < len; i++) {
        chana[i].style.background = "url(images/" + 11 * (i + 1) + ".png) no-repeat bottom";
    }

    var txt = $("text");
    var btn = $("btn");
    var hwords = $("hwords");
    var keywords = $("keywords");
    var hsearch = $("hsearch")
    txt.onfocus = function () {
        hwords.style.display = "none";
        txt.style.borderColor = "#ff6700";
        btn.style.borderColor = "#ff6700";
        keywords.style.display = "block";
    }

    txt.onblur = function () {
        hwords.style.display = "block";
        txt.style.borderColor = "";
        btn.style.borderColor = "";
        keywords.style.display = "none";
    }
    hsearch.onmouseover = function () {
        txt.style.borderColor = "#757575";
        btn.style.borderColor = "#757575";
    }
    hsearch.onmouseout = function () {
        txt.style.borderColor = "";
        btn.style.borderColor = "";
    }







// }