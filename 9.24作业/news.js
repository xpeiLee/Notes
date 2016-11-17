/**
 * Created by Administrator on 2016/9/25.
 */
var news = function () {

    var newsbox = document.getElementsByClassName("news")[0];
    //获取图片的宽度
    var width = newsbox.offsetWidth;
    // console.log(width);
    //图片盒子
    var imgBox = newsbox.getElementsByClassName("content")[0];
    var newshd = newsbox.getElementsByClassName("news_hd")[0];
    var hs = newshd.getElementsByTagName("h2");
console.log(hs)
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
    for(var i = 0;i< hs.length;i++){
        hs[i].index = i;
        hs[i].onclick = function () {
            for(var j = 0; j<hs.length;j++){
                hs[j].className = "";
            }
            this.className = "current";
            addTransition();
            changePoinsition(-this.index*width);
        }
    }

}