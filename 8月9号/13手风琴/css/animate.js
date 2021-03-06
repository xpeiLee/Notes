/**
 * Created by JackWong on 2016/8/9.
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

    },20);
}