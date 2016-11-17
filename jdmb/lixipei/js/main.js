/**
 * Created by Administrator on 2016/9/19.
 */

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

