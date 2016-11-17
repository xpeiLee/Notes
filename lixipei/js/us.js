/**
 * Created by Administrator on 2016/9/30.
 */
$(function () {
    var url = 'https://api.douban.com/v2/movie/us_box';
    getData(url);
})

function Data() {
    this.alt ="";
    this.rank= "";
    this.images="";
    this.original_title ="";
    this.title = "";
    this.year = "";
    this.directors="";
    this.rating = "";
    this.config = {
        container:$(".movie")
    };
}
Data.prototype.bindDom = function () {
    var tag = "<li><a href='"+this.alt+"' target='_blank'>";
    tag += "<img src='"+this.images+"'/>";
    tag += "<div class='fl'>"
    tag += "<h3>No."+this.rank+"</h3>"
    tag += "<h4>"+this.original_title+"</h4>";
    tag += "<p>"+this.title+"<span>("+this.year+")</span></p>";
    tag += "<p>导演："+this.directors+"</p>";
    tag += "</div>";
    tag += "<div class='fr'>"+this.rating+"</div>";
    tag += "</a></li>"
    $(this.config.container).append($(tag));
}
var opts = {
    lines: 13 // The number of lines to draw
    , length: 28 // The length of each line
    , width: 14 // The line thickness
    , radius: 42 // The radius of the inner circle
    , scale: 1 // Scales overall size of the spinner
    , corners: 1 // Corner roundness (0..1)
    , color: '#000' // #rgb or #rrggbb or array of colors
    , opacity: 0.25 // Opacity of the lines
    , rotate: 0 // The rotation offset
    , direction: 1 // 1: clockwise, -1: counterclockwise
    , speed: 1 // Rounds per second
    , trail: 60 // Afterglow percentage
    , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
    , zIndex: 2e9 // The z-index (defaults to 2000000000)
    , className: 'spinner' // The CSS class to assign to the spinner
    , top: '50%' // Top position relative to parent
    , left: '50%' // Left position relative to parent
    , shadow: false // Whether to render a shadow
    , hwaccel: false // Whether to use hardware acceleration
    , position: 'absolute' // Element positioning
}
var spinner = new Spinner(opts);

function getData(url) {
    $.ajax({
        type: "get",
        async: true,
        url: url,
        dataType: "jsonp",
        beforeSend: function () {
            var target = $(".movie").get(0);
            spinner.spin(target)
        },
        success: function (data) {

            var result = data.subjects;
            console.log(result)
            for (var key in result){
                var obj = new Data();
                obj.rank = result[key].rank;
                obj.alt = result[key].subject.alt;
                obj.images=result[key].subject.images.small;
                obj.original_title =result[key].subject.original_title;
                obj.title = result[key].subject.title;
                obj.year = result[key].subject.year;
                obj.directors=result[key].subject.directors[0].name;
                obj.rating = result[key].subject.rating.average;
                obj.bindDom();
            }
            spinner.spin();
        }, error: function (e) {
            console.log("22!!" + e);
        }
    })
}


