/**
 * Created by Administrator on 2016/9/24.
 */
function Cart() {
    //数组装的都是product产品
    this.products = [];
    this.sum = 0;
    this.allPrice = 0;

}
Cart.prototype = {
    bindBasc:function () {
      //数量
        $(".cartsum").html(this.getSum());
      //总价
        $("#cartprice").html(this.getAllPrice());
    },
    bindList:function () {
        var str = "";
        for(var i = 0; i<this.products.length; i++){
            str += "<div class='cart_box'>";
            str += "<div class='message'>";
            str += "<div class='alert-close'> </div>";
            str += "<div class='list_img'><img src='images/"+this.products[i].images[0].small+"' class='img-responsive' alt=''/></div>";
            str += "<div class='list_desc'><h4><a href='#'>"+this.products[i].name+"</a></h4>1 x<span class='actual'>";
            str += "$"+this.products[i].groupPrice+"</span></div>";
            str += "<div class='clearfix'></div>";
            str += "</div>";
            str += "</div>";
        }
        $(".shopping_cart").html(str);
    },
    //计算
    cal:function () {

    },
    getSum:function () {
         this.sum = this.products.length;
        return this.sum;
    },
    getAllPrice:function () {
        this.allPrice = 0;
        for( var i = 0;i < this.products.length;i++){
            this.allPrice += parseFloat(this.products[i].groupPrice);
        }
        return this.allPrice.toFixed(2);
    }
}