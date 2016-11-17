/**
 * Created by Administrator on 2016/9/24.
 */
$(function () {
    var product = new Product();
    product.name = "哈根达斯";
    product.buyCount = 1000;
    product.price = "0.0001";
    product.groupPrice = "100.00";
    product.desc = "好吃不贵";
    product.images = [{small:"s11.jpg",big:"s11.jpg"},{small:"s11.jpg",big:"s11.jpg"},{small:"s11.jpg",big:"s11.jpg"}];
    product.bindDetail();
    product.bindImaes();
    $("#btnaddcart").on("click",function () {
        cart.products.push(product);
        cart.bindBasc();
        cart.bindList();
      // product.addToCart(cart);
        $(window).scrollTop(0);
    });
    //实例化一个购物车
    var cart = new Cart();
    cart.sum = 0;
    cart.allPrice = 0;
    cart.bindBasc();
    cart.bindList();
});