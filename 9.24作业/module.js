/**
 * Created by Administrator on 2016/9/24.
 */
function Module() {
    this.name = "";
    this.desc = "";
}

Module.prototype.bindModule = function () {
    var str = "";
    str += "<li><strong>";
    str += "<a href='#'>"+this.name+"</a></strong>";
    str += "<span><a href='#'>"+this.desc+"</a></span></li>";
    return str;
}