/**
 * Created by Administrator on 2016/9/20.
 */
//引入外部js
document.write("<script src='js/check.js'></script>")
window.onload = function () {
    alertView();
    checkFun();
    check();
    checkBox();
    sumMoney();
}

//模态弹出视图
function alertView() {
    var win = document.getElementsByClassName("jd_win")[0];
    var winBox = win.getElementsByClassName("jd_win_box")[0];
    var delBtn = winBox.getElementsByClassName("submit")[0];
    var cancleBtn = winBox.getElementsByClassName("cancle")[0];
    var deleteBtn = document.getElementsByClassName("delete_box");
    //表示当前点击的是第几行删除按钮
    var touchRow = -1;
    //遍历所有btn
    function eachDeleBtn() {
        for(var i = 0; i<deleteBtn.length;i++){
            deleteBtn[i].index = i;
            deleteBtn[i].onclick = function () {
                touchRow =this.index;
                win.style.display = "block";
                // var top = document.body.scrollTop +(window.innerHeight - winBox.offsetHeight)/2;
                var top = (window.innerHeight - winBox.offsetHeight)/2;
                // document.body.style.position = "absolute";
                winBox.style.transition = "all .5s ease";
                winBox.style.webkitTransition = "all .5s ease";
                winBox.style.transform = "translateY("+top+"px)";
                var deleteTop = this.getElementsByTagName("div")[0];
                deleteTop.style.transition = "all .5s ease";
                deleteTop.style.webkitTransition = "all .5s ease";
                deleteTop.style.transform = "translateX(-4px) translateY(-3px) rotate(-30deg)";
                deleteTop.style.webkitTransform = "translateX(-4px) translateY(-3px) rotate(-30deg)";
                winBox.style.opacity = "1";
            }
        }
    }
    eachDeleBtn();
    function dissView() {
        // winBox.className = "jd_win_box"
        winBox.style.opacity = 0;
        winBox.style.transform = "translateY("+0+"px)";
        winBox.style.webkitTransform = "translateY("+0+"px)";
        function trans() {
            win.style.display = "none";
            winBox.removeEventListener("transitionend",trans);
        }
        winBox.addEventListener("transitionend",trans);
        var deleteTop = deleteBtn[touchRow].getElementsByTagName("div")[0];
        deleteTop.style.transition = "all .5s ease";
        deleteTop.style.webkitTransition = "all .5s ease";
        deleteTop.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        deleteTop.style.webkitTransform = "translateX(0) translateY(0) rotate(0deg)";
    }
    delBtn.onclick = function () {
    dissView();
        var list = document.getElementsByClassName("list")[0];
        var shop = document.getElementsByClassName("jd_shop");
      var deleteShop = shop[touchRow];
        deleteShop.parentNode.removeChild(deleteShop);
        eachDeleBtn();
        touchRow = -1;//修改touchRow
    }
    cancleBtn.onclick = function () {
dissView()
    }
}
var checkFun = function () {
var amountcheck = document.getElementsByClassName("amount_check")[0];
var jdcheckBox = amountcheck.getElementsByClassName("jd_check_box")[0];
    var checkBox = document.getElementsByClassName("check_box");
    var money = document.getElementsByClassName("money");
    var moneys = document.getElementsByClassName("moneys")[0];
    var moneya = document.getElementsByClassName("moneya")[0];
    var all_money =0;
jdcheckBox.onclick = function () {
    var checked = this.getAttribute("checked");
    var isChecked = false;
    if(checked != null){
        this.removeAttribute("checked");
        moneys.innerText = "0.00";
        moneya.innerText = "0.00";
    }else{
        isChecked = true;
        this.setAttribute("checked","");
        all_money =0;
        for (var j = 0; j < money.length;j++ ){
            all_money +=parseInt(money[j].innerText) ;
            moneys.innerText = all_money+".00";
            moneya.innerText = all_money+".00";
        }
    }
    var checkBoxs = document.getElementsByClassName("check_box");
    for(var i = 0; i<checkBoxs.length;i++){
        if(checkBoxs[i]==this){
        }else{
            isChecked ? checkBoxs[i].setAttribute("checked",""):checkBoxs[i].removeAttribute("checked","")
        }
    }
}
}

