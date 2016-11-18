/**
 * Created by Administrator on 2016/9/9.
 */

var scrollWidth = wjs_banner.clientWidth;
var divs = $('#inner').children('div')
for (var i = 1; i < divs.length; i++) {
    divs[i].style.left = scrollWidth + "px";
}

var iNow = 0;
var clickFlag = true;

for (var k in ctrl) {
    ctrl[k].onclick = function () {
        if (clickFlag == false) {
            return;
        }
        clickFlag = false;
        if (this.className === "slider-ctrl-prev") {

            animate(imgs[iNow], {left: scrollWidth});
            --iNow < 0 ? iNow = imgs.length - 1 : iNow;
            imgs[iNow].style.left = -scrollWidth + "px";
            animate(imgs[iNow], {left: 0}, function () {
                clickFlag = true;
            });
            setSquare();

        } else if (this.className === "slider-ctrl-next") {
            autoPlay(function () {
                clickFlag = true;
            });
        }
    }
}
for (var m in spans) {


    spans[m].onclick = function () {

        if (clickFlag == false) {
            return;
        }
        clickFlag = false;
        var that = this.innerHTML - 1;
        if (that > iNow) {
            animate(imgs[iNow], {left: -scrollWidth});

            imgs[that].style.left = scrollWidth + "px";

        } else if (that < iNow) {
            animate(imgs[iNow], {left: scrollWidth});
            imgs[that].style.left = -scrollWidth + "px";

        }
        iNow = that;
        animate(imgs[iNow], {left: 0}, function () {
            clickFlag = true;
        });
        setSquare();
    }

}
