// load image
$('<img class="preload"/>')[0].src = 'myimage.jpg';

$('img.preload').one('load', function () {
    console.log('image loaded');
}).each(function () {
    if (this.complete) $(this).load();
});
// load event not triggered in IE; forced by reassigning src
//if (isIE) $(this).attr("src", $(this).attr("src"));
