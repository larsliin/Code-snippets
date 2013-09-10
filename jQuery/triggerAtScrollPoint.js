// runs method when module is visible in viewport
var $this = $('.module');
var isFirstRun = true;

$(window).bind('scroll', scrollHandler).trigger('scroll');            

function scrollHandler() {
    var scrollTriggerPoint = $this.position().top - $this.height();
    if ($(window).scrollTop() > scrollTriggerPoint && isFirstRun) {
        isFirstRun = false;
        trigger();
    }
}

function trigger() {
    // run once when page scrolling point has reached
}
