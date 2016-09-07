var style = $('.element').attr('style');
var styleObject = getStylesAsObject(style);

function getStylesAsObject(style) {            
    var parts = style.split(";")
    var obj = {}
    for (var i = 0; i < parts.length - 1; i++) {
        var subParts = parts[i].split(':');
        obj[subParts[0]] = subParts[1];
    }
    return obj;
};
