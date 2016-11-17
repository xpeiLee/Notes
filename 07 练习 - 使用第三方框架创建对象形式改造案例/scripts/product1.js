/**
 * Created by JackWong on 2016/9/24.
 */

function Product() {
    this.name = "";
    this.buyCount = "";
    this.price = "";
    this.groupPrice = "";
    this.desc = "";
    this.images = [];
}
Product.prototype = {
    bindDetail:function () {
        $("#pname").html(this.name);
        $("#buyCount").html(this.buyCount);
        $("#price").html(this.price);
        $("#groupPrice").html(this.groupPrice);
        $("#description").html(this.desc);
    },
    bindImaes:function () {

        var length = this.images.length;
        var str = "";
        for (var i = 0; i < length;i++){
            str += "<li>";
                    str += "<img class='etalage_thumb_image' src='"+this.images[i].small+"' class='img-responsive'/>";
                    str += "<img class='etalage_source_image' src='"+this.images[i].big+"' class='img-responsive'/>";
            str += "</li>";
    }
     $("#etalage").html(str);

        /*jquery插件实现的幻灯片特效*/
        $('#etalage').etalage({
            thumb_image_width: 300,
            thumb_image_height: 400,

            show_hint: true,
            click_callback: function(image_anchor, instance_id){
                alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
            }
        });
        // This is for the dropdown list example:
        $('.dropdownlist').change(function(){
            etalage_show( $(this).find('option:selected').attr('class') );
        });

    },
    addToCart:function (cart) {
        cart.products.push(this);
        cart.bindBasc();
        cart.bindList();

    },
    nowToBuy:function () {

    }
}
