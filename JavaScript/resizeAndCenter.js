// resize and center element according to window dimensions
// overflow is hidden
// http://stackoverflow.com/questions/8158012/how-to-scale-an-image-to-full-screen-using-javascript
function scale(obj) {
	var widthRatio = $(window).width() / obj.orgwidth;
	var heightRatio = $(window).height() / obj.orgheight;
	var ratio = widthRatio;
	var top;
	var left;

	if (widthRatio * obj.orgwidth < $(window).height()) {
		ratio = heightRatio;
		top = 0;
		left = -1 * (((obj.orgwidth * ratio) - $(window).width()) / 2);
	} else {
		top = -1 * (((obj.orgheight * ratio) - $(window).height()) / 2);
		left = 0;
	}
	obj.elem.css({ 'top': top + 'px', 'left': left + 'px' }).width(obj.orgwidth * ratio).height(obj.orgheight * ratio);
}
