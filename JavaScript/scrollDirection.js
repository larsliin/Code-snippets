// scroll direction
$(window).scroll(function () {
	var currentScroll = $(this).scrollTop();
	if (currentScroll > previousScroll) {
		console.log('scroll down');
	} else {
		console.log('scroll up');
	}
	previousScroll = currentScroll;
});
