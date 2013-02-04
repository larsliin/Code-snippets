// is browser IE8
var isIE8 ($.browser.msie  && parseInt($.browser.version, 10) === 8) ? true : false;

// is browser IE9 or higher
var isIE9OrHigher ($.browser.msie  && parseInt($.browser.version, 10) >= 9) ? true : false;

// is browser IE
var isIE ($.browser.msie) ? true : false;
