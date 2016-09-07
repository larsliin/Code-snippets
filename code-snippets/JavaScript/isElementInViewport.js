// returns object with positions
function isElementInViewport($elem) {
	var docScrollPos = $(document).scrollTop();
	var winHeight = $(window).height();
	var elemOffsetTop = $elem.offset().top;
	var elemHeight= $elem.height();
	var object = {isInViewport : false, isUnder : true, isOver : false};

	if ((docScrollPos + winHeight) < elemOffsetTop) {
	    // element beneath viewport
	    object.isInViewport = false;
	    object.isUnder = true;
	    object.isOver = false;
	} else if (docScrollPos > elemOffsetTop + elemHeight) {
	    // element above viewport
	    object.isInViewport = false;
	    object.isUnder = false;
	    object.isOver = true;
	} else {	        
	    // element in viewport
	    object.isInViewport = true;
	    object.isUnder = false;
	    object.isOver = false;
	}
	return object;
}
