/**
 * Created by Administrator on 2016/9/24.
 */
function Product() {
    //属性
    this.name = "";
    this.price = "";
    this.desc = "";
    this.originPrice = "";
    this.sales = "";
    this.dazhe = "";
    this.image = "";
}
Product.prototype = {
          bindDom:function () {
              var str = "";
              str += "<dl>";
              str += "<dt><a><img src='img/"+this.image+"' width='384' height='225' /></a></dt>";
              str += "<dd>"
              str += "<span><a><em>"+this.dazhe+"折/</em>"+this.name+"</a></span>";
              str += "</dd>";
              str += "<dd class='price'>";
              str += "<em>$"+this.price+"</em>";;
              str += "<del>$"+this.originPrice+"</del>";
              str += "<i>销量："+this.sales+"  0天2时19分6秒</i>";
              str += "</dd>";
              str += "</dl>";
              return str;
          }   ,
    bindEvents:function () {

    }
}
window.onload = function () {
    //假设数据是通过ajax从服务器获取的
    var products = [{name:"兰蔻",price:"1000",desc:"法国兰蔻",originPrice:"5000",sales:"5000",dazhe:"0.1",image:"boutque10_r2_c2.jpg"},{name:"兰蔻",price:"1000",desc:"法国兰蔻",originPrice:"5000",sales:"5000",dazhe:"0.1",image:"boutque10_r2_c2.jpg"},{name:"兰蔻",price:"1000",desc:"法国兰蔻",originPrice:"5000",sales:"5000",dazhe:"0.1",image:"boutque10_r2_c2.jpg"}];
    //前端代码编写
    var str = "";
    for(var i = 0; i < products.length;i++){
        var product = new Product();
        product.name = products[i].name;
        product.desc = products[i].desc;
        product.price = products[i].price;
        product.originPrice = products[i].originPrice;
        product.sales = products[i].sales;
        product.image = products[i].image;
        product.dazhe = products[i].dazhe;
        str += product.bindDom();
    }
    var container = document.getElementById("container");
    container.innerHTML = str;
}
