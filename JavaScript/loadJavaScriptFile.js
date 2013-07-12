// dynamically loads a javascript file into header tag and throws an event on success
function loadJsCssFile(filename, filetype, callback) {
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script')
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype == "css") { //if filename is an external CSS file
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }

    fileref.onreadystatechange = fileref.onload = function () {
        var state = fileref.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };
}

loadJsCssFile('/BeoVision12Campaign.js', 'js', function () {
    // callback
    console.log('Javascript loaded');
});
loadJsCssFile('/BeoVision12Campaign.css', 'css', function () {
    // callback
    console.log('Stylesheet loaded');
});
