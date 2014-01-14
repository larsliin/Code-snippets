// scale fullscreen image with image width/height overflow

var imgwidth = IMAGE_ORG_WIDTH,
           imgheight = IMAGE_ORG_HEIGHT,
           winwidth = $(window).width(),
           winheight = $(window).height(),
           widthratio = winwidth / imgwidth,
           heightratio = winheight / imgheight,
           widthdiff = heightratio * imgwidth,
           heightdiff = widthratio * imgheight;

if (heightdiff > winheight) {    
    $('img').css({ 'width': winwidth + 'px', 'height': heightdiff + 'px' });
} else {
    $('img').css({ 'width': widthdiff + 'px', 'height': winheight + 'px' });
}
