// load image
$('<img class="preload"/>')[0].src = 'myimage.jpg';

$('img.preload').one('load', function () {
    console.log('image loaded');
}).each(function () {
    if (this.complete) $(this).load();
});
// load event not triggered in IE; forced by reassigning src
//if (isIE) $('img.preload').attr("src", $('img.preload').attr("src"));


// IE8 still misses the onload event even if src is set after listener
// setting af timeout will make IE8 catch the event though. Ugly but true
var myImage = new Image();
myImage.onload = doSomething;

var timer = setTimeout(function(){
    timer = null;
    myImage.src = "img/somePic.jpg";
},300);
