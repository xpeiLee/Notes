/**
 * Created by JackWong on 2016/8/6.
 */

function $(obj) {return document.getElementById(obj);}

//返回滚动信息
function scroll() {
    //ie9以上和其它浏览器都支持
    if (window.pageYOffset != null) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        };
    }else  if(document.compatMode == "CSS1Compat"){
//            判断是不是怪异的浏览器模式（没有声明DTD <!DOCTYPE html>） CSS1Compat标准的浏览器模式，肯定有dtd声明的
        return {
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        };
    }

//        怪异浏览器模式
    return {
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    };

}