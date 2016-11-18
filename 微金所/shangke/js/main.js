/**
 * Created by Administrator on 2016/9/12.
 */
'use strict';
$(function () {
//    当文档加载才会完成执行
//    根据屏幕宽度的变化，决定轮播图图片应该显示什么 大图 ？ 小图
    function resize() {
        //判断屏幕是否满足我们的条件（是大是小）
        var windowWidth = $(window).width();
    //    根据屏幕的大小设置每一张轮播图
        var isSmallScreen = windowWidth < 768;
        $("#main_ad > .carousel-inner > .item").each(function (i,item) {
            var $item = $(item);
            var imageSrc = isSmallScreen ? $item.data("image-xs") : $item.data("image-lg");
            $item.css({
                "backgroundImage":"url("+imageSrc+")"
            });
            if (isSmallScreen){
                $item.html("<img src='"+imageSrc+"'/>")
            }else{
                $item.empty()
            }

        })

    }
    $(window).on('resize',resize).triggerHandler("resize");


    //初始化toolstips插件
    $('[data-toggle="tooltip"]').tooltip();

//    控制标签页的标签容器的宽度
    var $ulcontainer = $(".nav-tabs");
//    获取ul下面的所有的li
    var totalW = 50;
    $ulcontainer.children().each(function (index,ele) {
        totalW += ele.clientWidth;
    });
    if(totalW > $(window).width()){
        $ulcontainer.css('width',totalW).parent().css('overflow-x','scroll');
    }

/*首先获取界面上的轮播图*/
var $carousels = $(".carousel");
    var startX,endX;
    //注册事件  滑动事件
    $carousels.on("touchstart",function (e) {
        //手指触摸开始记录一下手指所在的坐标x
        startX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on("touchmove",function (e) {
        endX = e.originalEvent.touches[0].clientX;
    })

    $carousels.on("touchend",function () {
        var distance = Math.abs(endX-startX);
        if(distance>100){
            $carousels.carousel(startX> endX ?'next':'prev');
        }
        // if(endX-startX<-100){
        //     $carousels.carousel('next');
        // }
    })

    $("#tt").children("li").children("a").hover(function () {
         $(".news-title").text($(this).data("title"))
    },function () {
        $(".news-title").text($("#tt li.active a").data("title"))
    })

    $("#tt").children("li").children("a").on("click",function () {
        $(".news-title").text($(this).data("title"))
    })



     $(".fm-item");
    $(window).on("scroll",function () {
        if($(window).scrollTop()>0){
            $(".fm-item").show();
        }
        else{
            $(".fm-item").hide();
        }
    })

    $(".fm-item").on("click",function () {
        $("body").animate({scrollTop:0},1000);
    })
})