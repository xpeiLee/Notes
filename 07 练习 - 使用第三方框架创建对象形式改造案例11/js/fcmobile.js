/**
 * Created by Administrator on 2016/9/27.
 */

var $$ = function () {

}

$$.prototype = {
    $id: function (id) {
        return document.getElementById(id);
    },
    //true 的话表示返回的不为空，false的话为空
    $checkNull: function (value) {
        if (value != "") {
            return true;
        } else {
            return false;
        }
    },
    $checkNull2: function (value) {
        if (value.length == 0) {
            return false;
        } else {
            return true;
        }
    },
    $checkMobile: function (value) {
        if (value.length == 11 && value.substr(0, 1) === "1") {
            var str = "0123456789";
            for (var i = 0; i < value.length; i++) {
                var eachNum = value.substr(i, 1);
                var index = str.indexOf(eachNum);
                if (index < 0) {
                    alert("你输入的不是手机号");
                    return
                }
            }
        } else {
            alert("你输入的不是手机号")
        }
    }
}
$$.prototype.$id = function (id) {
    return document.getElementById(id);
}
//^表示以XX开头
//  \s表示空格
// *表示匹配0次或多次
// (^\s*)表示匹配以空格开头的一个或多个字符
// value.replace(/(^\s*)/g,"")
// 表示用""替换掉所有的以空格开头所有字符
//清除左边空格
$$.prototype.$ltrim = function (value) {
    return value.replace(/(^\s*)/g, "");
}
//清除右边空格
$$.prototype.$rtrim = function (value) {
    return value.replace(/(\s*$)/g, "");
}
//清除左边和右边空格
$$.prototype.$trim = function (value) {
    return value.replace(/(^\s*)|(\s*$)/g, "");
}
//判断是不是数字
$$.prototype.$checkNum = function (value) {
    //body...
    //如果是数字的话 它必须至少有一个数字，有可能有很多位，但至少有一位
    //用正则表达式来判断是否是数字
    var regex = /^[0-9]+$/;
    if (value.match(regex)) {
        return true;
    }
    return false;
};
$$.prototype.$checkNumWithLimite = function(value) {
    //只能是9位数字
    var regex = /^[0-9]{9}$/;
    if(value.match(regex)){
        return true;
    }
    return false;
};
//是不是QQ号
 $$.prototype.$chenkQQ = function(value) {
    var regex = /^[0-9]{5,12}$/;
    if(value.match(regex)){
        return true;
    }else{
        return false;
    }
};
 $$.prototype.$checkZM= function(value) {
    //匹配6-12个字母
    var regex = /^[A-Z|a-z]{6,12}$/;
    if(value.match(regex)){
        return true
    }
    return false
};
//匹配邮箱
$$.prototype.$checkEmail=function(value) {
    //匹配邮箱
    var regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;

    if(value.match(regex)){
        return true
    }
    return false
}
$$.prototype.$formatString = function (str,data) {
    //key 是(\w+) ; match 是 /#\((\w+)\)/g；
    return str.replace(/#\((\w+)\)/g,function (match,key) {
        return data[key];
    })
}
//拷贝新的框架
$$.prototype.$extend = function (target,source) {
    //遍历对象
    for(var key in source){
        target[key] = source[key];
    }
    return target;
}
$$.prototype.myAjax= function(URL,fn){
    var xhr = createXHR();	//返回了一个对象，这个对象IE6兼容。
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                fn(xhr.responseText);
            }else{
                alert("错误的文件！");
            }
        }
    };
    xhr.open("get",URL,true);
    xhr.send();

    //闭包形式，因为这个函数只服务于ajax函数，所以放在里面
    function createXHR() {
        //本函数来自于《JavaScript高级程序设计 第3版》第21章
        if (typeof XMLHttpRequest != "undefined") {
            return new XMLHttpRequest();
        } else if (typeof ActiveXObject != "undefined") {
            if (typeof arguments.callee.activeXString != "string") {
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                        "MSXML2.XMLHttp"
                    ],
                    i, len;

                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex) {
                        //skip
                    }
                }
            }

            return new ActiveXObject(arguments.callee.activeXString);
        } else {
            throw new Error("No XHR object available.");
        }
    }
}




//在框架中实例化对象，这样我们在外面就不用再实例化
$$ = new $$();