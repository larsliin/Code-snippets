// load image
$('<img class="preload"/>')[0].src = 'myimage.jpg';

$('img.preload').one('load', function () {
    console.log('image loaded');
}).each(function () {
    if (this.complete) $(this).load();
});
