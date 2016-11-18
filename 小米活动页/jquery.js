/**
 * Created by Administrator on 2016/8/17.
 */


$(function () {
    $(".item-new").hover(function () {
        $(this).css({backgroundColor: "#ff822d",color:"#fff"});
        $(this).children(".icon").css("background","url(images/nav-icons-hover.png)no-repeat 0 -72px")}, function () {
               $(this).css({backgroundColor: "",color:""});
            $(this).children(".icon").css("background","")
           })
    $(".item-day").hover(function () {
        $(this).css({backgroundColor: "#ff822d",color:"#fff"});
        $(this).children(".icon").css("background","url(images/nav-icons-hover.png)no-repeat")}, function () {
        $(this).css({backgroundColor: "",color:""});
        $(this).children(".icon").css("background","")
    })
    $(".item-star").hover(function () {
        $(this).css({backgroundColor: "#ff822d",color:"#fff"});
        $(this).children(".icon").css("background","url(images/nav-icons-hover.png)no-repeat 0 -36px")}, function () {
        $(this).css({backgroundColor: "",color:""});
        $(this).children(".icon").css("background","")
    })
    $(".item-mitv").hover(function () {
        $(this).css({backgroundColor: "#ff822d",color:"#fff"});
        $(this).children(".icon").css("background","url(images/nav-icons-hover.png)no-repeat 0 -108px")}, function () {
        $(this).css({backgroundColor: "",color:""});
        $(this).children(".icon").css("background","")
    })
    $(".item-smart").hover(function () {
        $(this).css({backgroundColor: "#ff822d",color:"#fff"});
        $(this).children(".icon").css("background","url(images/nav-icons-hover.png)no-repeat 0 -144px")}, function () {
        $(this).css({backgroundColor: "",color:""});
        $(this).children(".icon").css("background","")
    })
    $(".item-lucky").hover(function () {
        $(this).css({backgroundColor: "#ff822d",color:"#fff"});
        $(this).children(".icon").css("background","url(images/nav-icons-hover.png)no-repeat 0 -180px")}, function () {
        $(this).css({backgroundColor: "",color:""});
        $(this).children(".icon").css("background","")
    })

    var F1 = $(".section-phone").offset().top;
    var F2 = $(".section-flash").offset().top;
    var F3 = $(".section-everyday").offset().top;
    var F4 = $(".section-mitv").offset().top;
    var F5 = $(".section-smart").offset().top;
    var F6 = $(".section-lucky").offset().top;

    $(".item-new").on("click",function () {
        $("body").animate({"scrollTop":F1-98},500)
    })
    $(".item-day").on("click",function () {
        $("body").animate({"scrollTop":F2-98},500)
    })
    $(".item-star").on("click",function () {
        $("body").animate({"scrollTop":F3-98},500)
    })
    $(".item-mitv").on("click",function () {
        $("body").animate({"scrollTop":F4-98},500)
    })
    $(".item-smart").on("click",function () {
        $("body").animate({"scrollTop":F5-98},500)
    })
    $(".item-lucky").on("click",function () {
        $("body").animate({"scrollTop":F6-98},500)
    })

        $(".header-bg").on("mousemove",function (eve) {
            $("#aniBox").css({
                top: -eve.pageY / 100,
                left: -eve.pageX / 100
            })
        })

    var topHeight = 502;
    $(window).scroll(function () {
        var didScrollTop = $(document).scrollTop();

        if(didScrollTop>=topHeight){
            $(".nav").css({
                "position":"fixed",
                "top":0});
        }else{
            $(".nav").css({
                "position":"",
                "top":""
            })
        }
    })
   $(".btna").hover(function () {
       $(this).css({"background-color":"#f24d41","color":"#fff"},100);
       $(this).children().css("color","#fff")
   },function () {
       $(this).css({"background-color":"","color":""});
       $(this).children().css("color","")
   })
     $(".control-next").click(time);

    $(".control-prve").click(time);
    var timer=null;
       timer= setInterval(time,5000)
           function time() {
            if($(".slide-mitv60").css("opacity")==1){
                $(".slide-mitv60").animate({"left":-50,"opacity":0},500,"linear");
                $(".slide-mitv43").animate({"left":0,"opacity":1},500,"linear");
            }else{
                $(".slide-mitv60").animate({"left":0,"opacity":1},500,"linear");
                $(".slide-mitv43").animate({"left":50,"opacity":0},500,"linear");
              }}

    $(".slide-box").on("mouseover",function () {
        clearInterval(timer);
    })
    $(".slide-box").on("mouseout",function () {
        timer= setInterval(time,5000);
    })
    var date = new Date("2016/8/20 10:51:00");
    function  daoJiShi() {
        var nowDate = Date.now(); //毫秒
        var cz =  date.getTime() - nowDate;
        var second = cz/1000;
        var minutes = parseInt(second /60)%60;
        var hour = parseInt(second/3600)%24;
        var miao = parseInt(second%60);
        if(hour<=9){hour="0"+hour};
        if(minutes<=9){minutes="0"+minutes};
        if(miao<=9){miao="0"+miao};
        $(".countdown").html(hour +":" + minutes + ":" + miao);
    }
    setInterval(daoJiShi,1000);
  var timer1 = null;
    $("#prve").click(time1);

    $("#next").click(time1);

    function time1() {
        if($(".slide-miwifi3c").css("opacity")==1){
            $(".slide-miwifi3c").animate({"opacity":0},500,"linear");
            $(".slide-pinghengche").animate({"opacity":1},500,"linear");
        }else{
            $(".slide-miwifi3c").animate({"opacity":1},500,"linear");
            $(".slide-pinghengche").animate({"opacity":0},500,"linear");
        }}
    $(".slide-box").on("mouseover",function () {
        clearInterval(timer1);
    })
    $(".slide-box").on("mouseout",function () {
        timer1= setInterval(time1,5000);
    })
})


