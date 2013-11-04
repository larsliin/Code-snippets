var mouse = {speed : 0, horizontal : 0, vertical : 0};
$(document).bind('mousemove', function (e) {
    // track mouse speed and direction
    var ms = trackMouseSpeed(e, function (v) {console.log('mousespeed', v);});
    var md = trackMouseDirection(e, function (v) {
      console.log('vertical direction', v.vertical);console.log('horizontal direction', v.horizontal);
    });

    $(document).on('mousemove', ms).one('mouseup', function () {
        $(document).off('mousemove', ms);
    });
    $(document).on('mousemove', md).one('mouseup', function () {
        $(document).off('mousemove', md);
    });
    
});

// return current mousespeed
var trackMouseSpeed = function (e_init, callback) {
    var x = e_init.clientX, y = e_init.clientY, t = Date.now();
    return function (e) {
        var new_x = e.clientX, new_y = e.clientY, new_t = Date.now()
        var x_dist = new_x - x, y_dist = new_y - y, interval = new_t - t;
        var velocity = Math.sqrt(x_dist * x_dist + y_dist * y_dist) / interval;
        callback(velocity);
        // update values:
        x = new_x;
        y = new_y;
        t = new_t;
    };
}
// return current mousedirection
var trackMouseDirection = function (e_init, callback) {
    var x = e_init.clientX, y = e_init.clientY, t = Date.now();
    return function (e) {
        var new_x = e.clientX, new_y = e.clientY, new_t = Date.now();
        //console.log(new_x + ' < ' + x)
        var horizontal = new_x < x ? 'left' : 'right';
        var vertical = new_y < y ? 'up' : 'down';
        callback({horizontal : horizontal, vertical : vertical});
        // update values:
        x = new_x;
        y = new_y;
        t = new_t;
    };
};
