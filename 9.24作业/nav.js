/**
 * Created by Administrator on 2016/9/24.
 */
function Nav() {
    this.name = "";
}

Nav.prototype.bindNav = function () {
    var str = "";
    str += "<li><a href='#'>";
    str += this.name;
    str += "</a></li>"
    return str;
}

function More() {
    var nav1 = document.getElementById("tx_nav");
    var nav2 = document.getElementById("tx_nav2")
    var more = nav1.getElementsByTagName("li")[4];
    var shou = nav2.getElementsByTagName("li")[4];
    more.onclick = function () {
         nav2.style.display = "block";
         nav1.style.display = "none";
    }
    shou.onclick = function () {
        nav1.style.display = "block";
        nav2.style.display = "none";
    }
}
window.onload = function () {
    var navs = [{name:"新闻"},{name:"财经"},{name:"娱乐"},{name:"体育"},{name:"更多"},{name:"军事"},{name:"NBA"},{name:"应用"},{name:"科技"},{name:"星座"}];
    var navs2 = [{name:"新闻"},{name:"财经"},{name:"娱乐"},{name:"体育"},{name:"收起"},{name:"房产"},{name:"汽车"},{name:"游戏"},{name:"数码"},{name:"时尚"},{name:"证券"},{name:"城市"},{name:"视频"},{name:"书城"},{name:"订阅"},{name:"军事"},{name:"NBA"},{name:"应用"},{name:"科技"},{name:"星座"}];
    var str1 = "";
    var str = "";
    for(var i = 0; i < navs.length;i++){
        var nav = new Nav();
        nav.name = navs[i].name;
        str1 += nav.bindNav();
    }
    for(var i = 0; i < navs2.length;i++){
        var nav2 = new Nav();
        nav2.name = navs2[i].name;
        str += nav2.bindNav();
    }

    var txNav = document.getElementById("tx_nav");
    txNav.innerHTML = str1;
    var txNav2 = document.getElementById("tx_nav2");
    txNav2.innerHTML = str;

    var banners = [{img:"2.jpg",desc:"百花奖红毯：Baby获晓明全程搀扶"},{img:"1.jpg",desc:"深圳“钉子楼”坚挺十余年 周围成菜地"},{img:"2.jpg",desc:"百花奖红毯：Baby获晓明全程搀扶"},{img:"1.jpg",desc:"深圳“钉子楼”坚挺十余年 周围成菜地"}];
    var str2 = "";
    for (var j = 0;j<banners.length;j++){
        var banner = new Banner();
        banner.img = banners[j].img;
        banner.desc = banners[j].desc;
        str2 += banner.bindBanner();
    }
    var txBanner = document.getElementById("tx_banner");
    txBanner.innerHTML = str2;

    var modules = [{name:"H5精选",desc:"一分钟读懂iPho..."},{name:"财经",desc:"建行天津房贷新政：外地人购房首付提高"},{name:"娱乐",desc:"带小baby走红毯？黄晓明、Baby：很多人一起来"},{name:"体育",desc:"中超-正播上港0-0恒大 高拉特失点"},{name:"军事",desc:"这些镖不是玩具，它们是恐怖杀手"}];
    var str3 = "";
    for (var m = 0;m<modules.length;m++){
        var module = new Module();
        module.name = modules[m].name;
        module.desc = modules[m].desc;
        str3 += module.bindModule();
    }
    var txModule = document.getElementById("tx_module");
    txModule.innerHTML = str3;

    var contents = [{a:"李克强和特鲁多为蒙特利尔“加拿大人”冰球队开球",b:"中超-正播上港0-0恒大 高拉特失点",c:"壮观！直击南海舰队海上扫雷现场 水雷将海水炸上高空",d:"青岛市民秋季赶海 挖海鲜有技巧",e:"深圳“钉子楼”坚挺十余年 周围成菜地",f:"重大突破！癌细胞竟被中国医生用这种方法“饿死了”",g:"十一出行早知道：哪些景点可能游客爆棚？啥时候出行最集中？",f:"14岁特警班少年残忍捅死同学获刑17年 检察院抗诉后改判无期",h:"小偷煞费苦心躲监控 6小时绕行60里终被抓"},{a:"李克强和特鲁多为蒙特利尔“加拿大人”冰球队开球",b:"中超-正播上港0-0恒大 高拉特失点",c:"壮观！直击南海舰队海上扫雷现场 水雷将海水炸上高空",d:"青岛市民秋季赶海 挖海鲜有技巧",e:"深圳“钉子楼”坚挺十余年 周围成菜地",f:"重大突破！癌细胞竟被中国医生用这种方法“饿死了”",g:"十一出行早知道：哪些景点可能游客爆棚？啥时候出行最集中？",f:"14岁特警班少年残忍捅死同学获刑17年 检察院抗诉后改判无期",h:"小偷煞费苦心躲监控 6小时绕行60里终被抓"},{a:"李克强和特鲁多为蒙特利尔“加拿大人”冰球队开球",b:"中超-正播上港0-0恒大 高拉特失点",c:"壮观！直击南海舰队海上扫雷现场 水雷将海水炸上高空",d:"青岛市民秋季赶海 挖海鲜有技巧",e:"深圳“钉子楼”坚挺十余年 周围成菜地",f:"重大突破！癌细胞竟被中国医生用这种方法“饿死了”",g:"十一出行早知道：哪些景点可能游客爆棚？啥时候出行最集中？",f:"14岁特警班少年残忍捅死同学获刑17年 检察院抗诉后改判无期",h:"小偷煞费苦心躲监控 6小时绕行60里终被抓"},{a:"李克强和特鲁多为蒙特利尔“加拿大人”冰球队开球",b:"中超-正播上港0-0恒大 高拉特失点",c:"壮观！直击南海舰队海上扫雷现场 水雷将海水炸上高空",d:"青岛市民秋季赶海 挖海鲜有技巧",e:"深圳“钉子楼”坚挺十余年 周围成菜地",f:"重大突破！癌细胞竟被中国医生用这种方法“饿死了”",g:"十一出行早知道：哪些景点可能游客爆棚？啥时候出行最集中？",f:"14岁特警班少年残忍捅死同学获刑17年 检察院抗诉后改判无期",h:"小偷煞费苦心躲监控 6小时绕行60里终被抓"}];
    var str4 = "";
    for (var n = 0;n<contents.length;n++){
        var content = new Content();
        content.a = contents[n].a;
        content.b = contents[n].b;
        content.c = contents[n].c;
        content.d = contents[n].d;
        content.e = contents[n].e;
        content.f = contents[n].f;
        content.g = contents[n].g;
        content.h = contents[n].h;
        str4 += content.bindContent();
    }
    var txContent = document.getElementById("content");
    txContent.innerHTML = str4;
    scrollPic();
    news();
    More();
}