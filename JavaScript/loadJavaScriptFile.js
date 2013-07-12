// dynamically loads a javascript file into header tag and throws an event on success
function loadJS(src, callback) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onreadystatechange = s.onload = function () {
        var state = s.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };
    document.getElementsByTagName('head')[0].appendChild(s);
}
loadJS('/Content/BeoVision12Campaign/JS/BeoVision12Campaign.js', function () {
    // on success handler
});
