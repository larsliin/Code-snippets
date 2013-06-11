// load image
$('img').one('load', function () {
    console.log('image loaded');
}).each(function () {
    if (this.complete) $(this).load();
});
