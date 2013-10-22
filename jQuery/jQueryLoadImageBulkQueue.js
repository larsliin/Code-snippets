var $this = $(this);
var $images = $this.find($('img'));

$this.bind('images_loaded', allImagesLoadedHandler);

loadImages($images);

function loadImages($i) {
    var loaders = [];
    for (var i = 0; i < $i.length; i++) {
        var url = $i.eq(i).attr('src');
        console.log(url);
        loaders.push(loadSprite(url));
    }

    $.when.apply(null, loaders).done(function () {            
        $this.trigger('images_loaded');
    });

    function loadSprite(src) {
        var deferred = $.Deferred();
        var sprite = new Image();
        sprite.onload = function () {
            deferred.resolve();
        };
        sprite.src = src;
        return deferred.promise();
    }
}
    
function allImagesLoadedHandler(e) {
    // all images loaded
}
