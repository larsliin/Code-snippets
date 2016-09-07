// scroll direction
$(window).scroll(function () {
	console.log(getScrollDirection());
});


var previousScroll = 0;
function getScrollDirection() {
	var scrolltop = $(window).scrollTop();
	var scrolldirection = (scrolltop > previousScroll) ? 'down' : 'up';
	previousScroll = scrolltop;
	return scrolldirection;
}
