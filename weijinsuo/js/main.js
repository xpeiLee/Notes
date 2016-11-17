/**
 * Created by JackWong on 2016/9/12.
 */
'use strict';

$(function () {
    /*当文档加载完成才会执行*/

    /*根据屏幕宽度的变化决定轮播图图片应该显示什么 大图 ？小图*/
    function resize() {
        /*获取当前屏幕的宽*/
        var windowWidth = $(window).width();
    //    判断屏幕是否满足我们的条件（是大还是小）
        var isSmallScreen = windowWidth < 768;
        /*根据屏幕的大小设置每一张轮播图*/
        $("#main_ad > .carousel-inner > .item").each(function (i,item) {
            // /item是dom对象*/
            var $item = $(item);
            var imageSrc = isSmallScreen ? $item.data("image-xs"):$item.data("image-lg");

            $item.css({
                "backgroundImage":"url("+imageSrc+")"
            });
            if (isSmallScreen){
                $item.html("<img src='" +imageSrc+"'/>");
            }else {
                $item.empty();
            }


        });

    }
    $(window).on('resize',resize).triggerHandler('resize');

//    初始化tooltips 插件
    $('[data-toggle="tooltip"]').tooltip();

    /*控制标签页的标签容器宽度*/
    var $ulcontainer = $(".nav-tabs");
    /*获取ul下面的所有的li*/
   // console.log( );
   //  totalW = sum(li.width)

    var totalW = 50;
    $ulcontainer.children().each(function (index,ele) {
        totalW += ele.clientWidth;

    });
    // alert(totalW);

    if(totalW > $(window).width()){
        $ulcontainer
            .css('width',totalW)
            .parent().css('overflow-x','scroll');
    }

    /*
    * 获取界面上的轮播图
    * */
    var $carousels = $(".carousel");
    var startX,endX;
    var baseDistance = 50;
//    注册事件 滑动事件
    $carousels.on("touchstart",function (e) {
    //    手指触摸开始记录一下手指所在的坐标x
        startX = e.originalEvent.touches[0].clientX;

    });

    $carousels.on("touchmove",function (e) {
        endX = e.originalEvent.touches[0].clientX;
    });



    $carousels.on("touchend",function (e) {
        var distance = Math.abs(endX - startX);
       if (distance > baseDistance) {
           $carousels.carousel(startX > endX ? 'next':'prev');
       }

    });

});
