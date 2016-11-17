/**
 * Created by JackWong on 2016/9/24.
 */

$(function () {
    var product = new Product();
    product.name = "哈根达斯";
    product.buyCount = 1000;
    product.price = "0.0001";
    product.groupPrice = "0.8888888800";
    product.desc = "好吃不贵";
    product.images = [{small:"images/s11.jpg",big:"images/s11.jpg"},{small:"images/s11.jpg",big:"images/s11.jpg"},{small:"images/s11.jpg",big:"images/s11.jpg"}];
    product.bindDetail();
    product.bindImaes();
    $("#btnaddcart").on("click",function () {
        // product.addToCart(cart);
        // cart.products.push(product);
        cart.products.push(product);
        cart.bindBasc();
        cart.bindList();

        $(window).scrollTop(0);
    });

    /*实例化一个购物车*/
    var  cart = new Cart();
    cart.sum = 0;
    cart.allPrice = 0;
    cart.bindBasc();
    cart.bindList();


});





