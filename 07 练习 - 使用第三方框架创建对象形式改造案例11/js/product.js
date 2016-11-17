/**
 * Created by Administrator on 2016/9/24.
 */
function Product() {
    this.name = "";
    this.description = "";
    this.normalPrice = "";
    this.youhuijia = "";
    this.buySum = "";
    this.images = [];
}
Product.prototype = {
    bindDetail:function () {
        $("#pname").html(this.name);
        $("#buyCount").html(this.description);
        $("#price").html(this.normalPrice);
        $("#groupPrice").html(this.youhuijia);
        $("#description").html(this.buySum);
    },
    bindImaes:function () {
        var length = this.images.length;
        var str = ""
        for(var i = 0; i<length; i++){
            str += "<li>"
            str += "<img class='etalage_thumb_image' src='images/"+this.images[i].small+"' class='img-responsive' />"
            str += "<img class='etalage_source_image' src='images/"+this.images[i].big+"' class='img-responsive' />"
            str += "</li>"
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
        // cart.products.push(this);
        // cart.bindBasc();
        // cart.bindList();

    },
    nowToBuy:function () {

    }
}
