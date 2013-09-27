var loaders = [];
for (var i = 0; i < framesTotal; i++) {
    loaders.push(loadSprite('imageUrl-' + i + '.jpg'));
}

$.when.apply(null, loaders).done(function () {
    // callback when everything was loaded
    alert('ALL LOADED');
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
