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

            } else if (attr === "zindex") {
                obj.style.zIndex = attrs[attr];

            } else {
                obj.style[attr] = currnet + step + "px";
            }

            if (attr === "zindex") {
                continue;
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
    }, 30);
}

window.onload = function () {
    function $(objId) {
        return document.getElementById(objId);
    }

    var wrap = $("wrap");//大盒子
    var arrow = $("arrow");//三角
    var slider = $("slider");

    var lis = slider.getElementsByTagName("li");//所有需要操作的盒子

    wrap.onmouseover = function () {
        animate(arrow, {opacity: 100});
    }
    wrap.onmouseout = function () {
        animate(arrow, {opacity:0});

    }

    //  存储了每个图片的信息
    var json = [
        {   //  1
            width:400,
            top:20,
            left:50,
            opacity:20,
            z:2
        },
        {  // 2
            width:600,
            top:70,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            z:4
        },
        {  // 4
            width:600,
            top:70,
            left:600,
            opacity:80,
            z:3
        },
        {   //5
            width:400,
            top:20,
            left:750,
            opacity:20,
            z:2
        }
    ];

//两个箭头的点击事件
    var as = arrow.children;
    for(var k in as){
        as[k].onclick = function () {
            if(this.className === "prev"){
                // alert("左边按钮");
                change(true);
            }else {
                // alert("右边按钮");
                change(false);
            }

        }
    }
    change();
    function change(direct) {
        if(direct == true){
            //删除第0个元素
            var json0 = json.shift();
            json.push(json0);//把第零个元素添加到数组的末尾
        }else if(direct == false) {
            //删除最后一个元素
            var jsonzh = json.pop();
            //把数组元素插入到第一个
            json.unshift(jsonzh);
        }

        for(var i = 0; i < json.length;i++){
            animate(lis[i],
                {
                    width:json[i].width,
                    height:json[i].height,
                    top:json[i].top,
                    left: json[i].left,
                    opacity:json[i].opacity,
                    zindex:json[i].z
            },function () {

            });
        }

    }
}