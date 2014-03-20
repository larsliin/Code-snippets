// is browser IE8
var isIE8 = ($.browser.msie  && parseInt($.browser.version, 10) === 8) ? true : false;

// is browser IE9 or higher
var isIE9OrHigher = ($.browser.msie  && parseInt($.browser.version, 10) >= 9) ? true : false;

// is browser IE
var isIE = ($.browser.msie) ? true : false;
// is browser IE (IE11 support)
var isIE = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./) || $.browser.msie;

// is browser mobile
var isDeviceMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) ? true : false;

// is browser mobile IOS
var isDeviceIOS= (/iPhone|iPad|iPod/i.test(navigator.userAgent)) ? true : false;
