var o = { image: $('.image'), orgwidth: 1280, orgheight: 720 };
resizeFullscreen(o)

// js
function resizeFullscreen (o) {
    // resize and center element according to window dimensions
    var widthRatio = o.image.parent().width() / o.orgwidth;
    var heightRatio = o.image.parent().height() / o.orgheight; // parent must have height set
    var ratio = widthRatio;
    var marginTop = 0;
    var marginLeft = 0;

    if (widthRatio * o.orgheight < o.image.parent().height()) {
        ratio = heightRatio;
    }

    o.image.width(o.orgwidth * ratio).height(o.orgheight * ratio);

    if (widthRatio * o.orgheight < $(window).height()) {
        ratio = heightRatio;
        marginTop = 0;
        marginLeft = - 1 * (((o.orgwidth * ratio) - $(window).width()) / 2);
    } else {
        marginTop = -1 * (((o.orgheight * ratio) - $(window).height()) / 2);
        marginLeft = 0;
    }

    o.image.css({ margin: 'auto', position: 'absolute', 'margin-left': marginLeft + 'px', 'margin-top': marginTop + 'px' });
}
