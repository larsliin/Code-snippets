/********************************************
INIT:
<script type="text/javascript" src="j360Custom.js"></script>
// loop : bool (should 360 spin loop spin or stop at images total and 0)
$('.wrapper').j360custom({loop : false, startframe : 100});
var j360custom = $('.wrapper').data('j360custom');
j360custom.init();

// animate to frame
j360custom.gotoAndStop(1);
********************************************/
(function ($) {
    var J360Custom = function (element, settings) {
        var elem = $(element);
        var t = this;
        var defaults = { clicked: false, currImg: (settings.startframe == undefined ? 1 : settings.startframe) };
        var options = $.extend(defaults, options);
        var frameRate = 24;
        var playFramesInterval = null;
        var aImages = {};
        var imageTotal = 0;
        this.loop = settings.loop == undefined ? true : settings.loop;

        var playFrame = function (frame) {
            options.currImg = frame < options.currImg ? options.currImg - 1 : options.currImg + 1;
            elem.html('<img src="' + aImages[options.currImg] + '" />');

            if (options.currImg == frame) {
                clearBeoInterval(playFramesInterval);
            }            
        }

        this.gotoAndStop = function (frame) {
            var f = frame > imageTotal ? imageTotal : frame;
            f = frame < 1 ? 1 : f;

            playFrame(f);
            playFramesInterval = setInterval(function () { playFrame(f); }, frameRate);
        }

        this.init = function () {
            var $obj = elem;
            
            $obj.css({ 'margin-left': 'auto', 'margin-right': 'auto', 'text-align': 'center', 'overflow': 'hidden' });
            $overlay = $obj.clone(true);
            $overlay.attr('id', 'view_overlay');
            $overlay.css({ 'position': 'absolute', 'z-index': '10', 'background': '#fff' });
            $obj.after($overlay);

            imageTotal = 0;
            $('img', $obj).each(function () {
                aImages[++imageTotal] = $(this).attr('src');
                preload($(this).attr('src'));
            })
            var imageCount = 0;
            $('.preload_img').load(function () {
                if (++imageCount == imageTotal) {
                    $overlay.animate({ 'filter': 'alpha(Opacity=0)', 'opacity': 0 }, 500);
                    $obj.html('<img src="' + aImages[options.currImg] + '" />');
                    $overlay.bind('mousedown touchstart', function (e) {
                        if (e.type == "touchstart") {
                            options.currPos = window.event.touches[0].pageX;
                        } else {
                            options.currPos = e.pageX;
                        }
                        options.clicked = true;
                        return false;
                    });
                    $(document).bind('mouseup touchend', function () {
                        options.clicked = false;
                    });
                    $(document).bind('mousemove touchmove', function (e) {
                        if (options.clicked) {
                            var pageX;
                            if (e.type == "touchmove") {
                                pageX = window.event.targetTouches[0].pageX;
                            } else {
                                pageX = e.pageX;
                            }

                            var width_step = 1;
                            if (Math.abs(options.currPos - pageX) >= width_step) {
                                if (options.currPos - pageX >= width_step) {
                                    options.currImg++;
                                    if (options.currImg > imageTotal && t.loop) {
                                        options.currImg = 1;
                                    } else if (options.currImg > imageTotal && !t.loop) {
                                        options.currImg = imageTotal;
                                    }
                                } else {
                                    options.currImg--;
                                    if (options.currImg < 1 && t.loop) {
                                        options.currImg = imageTotal;
                                    } else if (options.currImg < 1 && !t.loop) {
                                        options.currImg = 1;
                                    }
                                }
                                options.currPos = pageX;

                                $obj.html('<img src="' + aImages[options.currImg] + '" />');
                            }
                        }
                    });
                }
            });

            if ($.browser.msie || $.browser.mozilla || $.browser.opera || $.browser.safari) {
                $(window).resize(function () {
                    onresizeFunc($obj, $overlay);
                });
            } else {
                var supportsOrientationChange = "onorientationchange" in window,
                orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
                window.addEventListener(orientationEvent, function () {
                    onresizeFunc($obj, $overlay);
                }, false);
            }
            onresizeFunc($obj, $overlay);
        };

        // Private method - can only be called from within this object
        var onresizeFunc = function ($obj, $overlay) {
            $overlay.css({ 'margin-top': 0 });
        };

        var preload = function (image) {            
            if (typeof document.body == "undefined") return;
            try {
                var div = document.createElement("div");
                var s = div.style;
                s.position = "absolute";
                s.top = s.left = 0;
                s.visibility = "hidden";
                document.body.appendChild(div);
                div.innerHTML = "<img class=\"preload_img\" src=\"" + image + "\" />";
            } catch (e) {
                // Error. Do nothing.
            }
        }

        var clearBeoInterval = function (i) {
            if (i) {
                clearInterval(i);
                i = null;
            }
        }
    };

    $.fn.j360custom = function (options) {
        return this.each(function () {
            var element = $(this);

            // Return early if this element already has a plugin instance
            if (element.data('j360custom')) return;

            // pass options to plugin constructor
            var j360custom = new J360Custom(this, options);

            // Store plugin object in this element's data
            element.data('j360custom', j360custom);
        });
    };
})(jQuery);
