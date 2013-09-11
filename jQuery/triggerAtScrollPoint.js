// runs method when module is visible in viewport
var isFirstRun = true;

$(window).bind('scroll', scrollHandler).trigger('scroll');            

function scrollHandler() {
    if (isInViewport($('.module')) && isFirstRun) {
        isFirstRun = false;
        trigger();
    }
}

function trigger() {
    
}

// returns true if element is visible in viewport
function isInViewport($mod) {
    var scrollTriggerPoint = $mod.position().top - $mod.height();
    var bool = $(window).scrollTop() > scrollTriggerPoint ? true : false;
    return bool;
}
