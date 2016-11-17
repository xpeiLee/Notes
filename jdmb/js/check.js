/**
 * Created by Administrator on 2016/9/23.
 */

function check() {
   var jdtit = document.getElementsByClassName("jd_zy");
    for(var i = 0; i <jdtit.length;i++){
        var checkBox = jdtit[i].getElementsByClassName("check_box")[0];
        checkBox.addEventListener("click",function () {
            var checked = this.getAttribute("checked");
            var isChecked = false;
            if (checked != null) {
                this.removeAttribute("checked");
            } else {
                isChecked = true;
                this.setAttribute("checked", "");
            }
            var checkBox = this.parentNode.parentNode.getElementsByClassName("jd_shop_con");

            //如果为真下面的复选框都应该被选中
            for (var i = 0; i < checkBox.length; i++) {
                var checkBoxs = checkBox[i].getElementsByClassName("check_box")[0];
                isChecked ? checkBoxs.setAttribute("checked", "") : checkBoxs.removeAttribute("checked", "")
            }
            sumMoney();
        })
    }

}

function checkBox() {
    var quan = document.getElementsByClassName("quan");
    for(var i = 0 ; i< quan.length;i++){
        quan[i].addEventListener("click",function () {
            var checked = this.getAttribute("checked");
            var isChecked = false;
            if (checked != null) {
                this.removeAttribute("checked");
            } else {
                isChecked = true;
                this.setAttribute("checked", "");
            }
            sumMoney();
    })
}
}
//计算总额
function sumMoney() {
    var quan = document.getElementsByClassName("quan");
    var moneys = document.getElementsByClassName("moneys")[0];
    var moneya = document.getElementsByClassName("moneya")[0];
    var all_money = 0;
    for (var i = 0; i < quan.length; i++) {
        var money = quan[i].parentNode.getElementsByClassName("money")[0];
        // console.log(money)
        var checked = quan[i].getAttribute("checked");
        if (checked != null) {
            all_money += parseInt(money.innerText);
            // console.log(all_money)
        }
    }
    moneys.innerText = all_money+".00";
    moneya.innerText = all_money+".00";
    }

