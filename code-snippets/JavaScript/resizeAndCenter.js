// resize and center element according to window dimensions
// overflow is hidden
// http://stackoverflow.com/questions/8158012/how-to-scale-an-image-to-full-screen-using-javascript
function scale(obj) {
    var widthRatio = $(window).width() / obj.width;
    var heightRatio = $(window).height() / obj.height;
    var ratio = widthRatio; 

    if (widthRatio * obj.height < $(window).height()) {
        ratio = heightRatio;
    }

    obj.image.width(obj.width * ratio)
        .height(obj.height * ratio)
        .css({ margin: 'auto',position: 'absolute',top: 0,bottom: 0,left: 0,right: 0});
}
