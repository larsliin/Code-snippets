function loadJson(){
    console.log('LOADING');
    
    var url = "http://my_url.com/jsonfeed/";
    
    jQuery.getJSON(url, function(data) {
        onDataRecievedHandler(data);
    }).error(function() {
        $.fn.onDataErrorHandler();
    });
}
function onDataErrorHandler(d) {
    console.log('ERROR');
};
function onDataRecievedHandler(d) {
    $.fn.lmData = d;
    console.log('DONE');
};

loadJson();