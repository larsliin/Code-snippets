// runs method when module is visible in viewport
var isFirstRun = true;

$(window).bind('scroll', scrollHandler).trigger('scroll');            

function scrollHandler() {
    if (isInViewport($('.module')) && isFirstRun) {
        isFirstRun = false;
        triggerWhenInViewport();
    }
}

function triggerWhenInViewport() {
    
}

// returns true if element is visible in viewport
function isInViewport($mod) {
    var scrollTriggerPoint = $mod.offset().top - $(window).height() + $mod.height();
    var bool = $(window).scrollTop() > scrollTriggerPoint ? true : false;
    return bool;
}
