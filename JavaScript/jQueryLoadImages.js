var $images = $('img');
var imgTotal = $images.length;
var loadImageCount = 0;

function loadImage(j){
    var $img = $images.eq(j)
    var src = $img.attr('src');
    
    $img.one('load', function () {
        loadImageComplete();
    }).each(function () {
        if (this.complete) $(this).load();
    });
    // ie needs the source reapplied
    $img.attr('src', src);
}

function loadImageComplete(){
    loadImageCount++;
    if (loadImageCount < imgTotal) {
        loadImage(loadImageCount);
    } else {
        // all images loaded
    }
}

loadImage(loadImageCount);
