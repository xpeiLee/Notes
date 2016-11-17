/**
 * Created by Administrator on 2016/9/20.
 */
window.onload = function () {
    initLeft();
    initRight();
}
// window.onresize = function () {
//     location.reload(true)
// }
//左侧分类
 var initLeft = function () {
    //找到父元素
    var parentDom = document.getElementsByClassName("jd_category_left")[0];
    var leftDom = parentDom.getElementsByClassName("jd_category_left_box")[0];
    //找到ul
    var childDom = leftDom.getElementsByTagName("ul")[0];
    //找到所有的li
    var liDom = childDom.getElementsByTagName("li");
    //取出父容器高度
    //先取出盒子的高度
    var parentH = parentDom.offsetHeight;
   //获得内容高度
    parentH -=46;
    //获取子容器的高度
    var childH = childDom.offsetHeight;
    //添加过渡
    var addTransition = function () {
        childDom.style.webkitTransiton = "all .3s ease";
        childDom.style.transition = "all .3s ease";
    }
    //删除过渡
    var removeTransition = function () {
        childDom.style.webkitTransition = "none";
        childDom.style.transition = "none";
    }
    //滑动
    var startY = 0;
     var endY = 0;
     var moveY = 0;
     var currY = 0;
     //最大的移动距离
     var maxY = 150;
     //最小的移动距离
     var minY = -(childH - parentH + 150);
     //点击事件
     var startTime = 0;
     var endTime = 0;
     childDom.addEventListener("touchstart",function (e) {
         startTime = new Date().getDate();
         startY = e.touches[0].clientY;//相对于父容器的
     });
     childDom.addEventListener("touchmove",function (e) {
         e.preventDefault();
         endY = e.touches[0].clientY;
         moveY = endY - startY;
         // console.log("minY"+minY)
         if ((currY+moveY)<=maxY && (currY+moveY)>=minY){
             removeTransition();
             childDom.style.transform = "translateY("+(currY+moveY)+"px)";
             childDom.style.webkitTransform = "translateY("+(currY+moveY)+"px)";

         }

     });
     childDom.addEventListener("touchend",function (e) {
         e.preventDefault();
         //滑动结束之后记录下当前的translateY
         if ((currY+moveY)<=0 && (currY+moveY)>=-(childH - parentH)){currY = currY + moveY;
         }else if((currY+moveY)>0){
             currY = 0;
             addTransition();
             childDom.style.transform = "translateY("+(currY)+"px)";
             childDom.style.webkitTransform = "translateY("+(currY)+"px)";
         }else{
             currY = -(childH - parentH);
             addTransition();
             childDom.style.transform = "translateY("+(currY)+"px)";
             childDom.style.webkitTransform = "translateY("+(currY)+"px)";
         }
         endTime = new Date().getDate();
         //点击事件
         if(moveY == 0 && (endTime - startTime) < 200 ){
             var currentLi = e.target.parentNode;
             console.log(currentLi)
             for(var i = 0; i< liDom.length;i++){
                 liDom[i].index=i;
                 liDom[i].children[0].className = "";
             }
             currentLi.children[0].className = "now";
             var top = currentLi.index*46;
             if(top<(childH - parentH)){
                 addTransition();
                 childDom.style.transform = "translateY("+(-top)+"px)";
                 childDom.style.webkitTransform = "translateY("+(-top)+"px)";
              //设置当前的translateY
                 currY = -top;
             }else{
                 addTransition();
                 childDom.style.transform = "translateY("+(-(childH - parentH))+"px)";
                 childDom.style.webkitTransform = "translateY("+(-(childH - parentH))+"px)";
                 currY = -(childH - parentH);
             }
             var rightDom = document.getElementsByClassName("jd_category_right_box")[0];
             rightDom.style.webkitTransition = "all .2s ease";
             rightDom.style.transition = "all .2s ease";
             rightDom.style.opacity = 0;
             setTimeout(function () {
                 rightDom.style.opacity = 1;
             },300)
         }
         //把数据清零
         startY = 0;
         endY= 0 ;
         moveY = 0;
         // console.log("moveY"+moveY)
         // console.log("currY"+currY)
     })
     

}
//右测分类
var initRight = function () {
    var parentDom = document.getElementsByClassName("jd_category_right")[0];
    var childDom = parentDom.getElementsByClassName("jd_category_right_box")[0];
    var childH = childDom.offsetHeight;
    var parentH = parentDom.offsetHeight;
    var addTransition = function () {
        childDom.style.webkitTransform = "all .3s ease";
        childDom.style.transform = "all .3s ease";
    }
    //删除过渡
    var removeTransition = function () {
        childDom.style.webkitTransform = "none";
        childDom.style.transform = "none";
    }
    var startY = 0;
    var endY = 0;
    var moveY = 0;
    var currY = 0;
    //最大的移动距离
    var maxY = 150;
    //最小的移动距离
    var minY = -(childH - parentH + 150);
    childDom.addEventListener("touchstart",function (e) {
        startY = e.touches[0].clientY;//相对于父容器的
    });
    childDom.addEventListener("touchmove",function (e) {
        e.preventDefault();
        endY = e.touches[0].clientY;
        moveY = endY - startY;
        // console.log("minY"+minY)
        if ((currY+moveY)<=maxY && (currY+moveY)>=minY){
            removeTransition();
            childDom.style.transform = "translateY("+(currY+moveY)+"px)";
            childDom.style.webkitTransform = "translateY("+(currY+moveY)+"px)";

        }

    });
    childDom.addEventListener("touchend",function (e) {
        e.preventDefault();
        //滑动结束之后记录下当前的translateY
        if ((currY+moveY)<=0 && (currY+moveY)>=-(childH - parentH)){currY = currY + moveY;
        }else if((currY+moveY)>0){
            currY = 0;
            addTransition();
            childDom.style.transform = "translateY("+(currY)+"px)";
            childDom.style.webkitTransform = "translateY("+(currY)+"px)";
        }else{
            currY =-(childH - parentH);
            addTransition();
            childDom.style.transform = "translateY("+(currY)+"px)";
            childDom.style.webkitTransform = "translateY("+(currY)+"px)";
        }
        })
}
