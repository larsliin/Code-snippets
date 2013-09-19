/********************************************
INIT:
<script type="text/javascript" src="j360Custom.js"></script>
$('.wrapper').j360custom();
var j360custom = $('.wrapper').data('j360custom');
j360custom.init();
********************************************/
(function ($) {
    var J360Custom = function (element, options) {
        var elem = $(element);
        var t = this;
        var defaults = { clicked: false, currImg: 1 };
        var options = $.extend(defaults, options);

        this.init = function () {
            elem.each(function () {
                var $obj = $(this);
                var aImages = {};
                $obj.css({ 'margin-left': 'auto', 'margin-right': 'auto', 'text-align': 'center', 'overflow': 'hidden' });
                $overlay = $obj.clone(true);
                $overlay.attr('id', 'view_overlay');
                $overlay.css({ 'position': 'absolute', 'z-index': '10', 'background': '#fff' });
                $obj.after($overlay);

                var imageTotal = 0;
                $('img', $obj).each(function () {
                    aImages[++imageTotal] = $(this).attr('src');
                    preload($(this).attr('src'));
                })
                var imageCount = 0;
                $('.preload_img').load(function () {
                    if (++imageCount == imageTotal) {
                        $overlay.animate({ 'filter': 'alpha(Opacity=0)', 'opacity': 0 }, 500);
                        $obj.html('<img src="' + aImages[1] + '" />');
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

                                var width_step = 4;
                                if (Math.abs(options.currPos - pageX) >= width_step) {
                                    if (options.currPos - pageX >= width_step) {
                                        options.currImg++;
                                        if (options.currImg > imageTotal) {
                                            options.currImg = 1;
                                        }
                                    } else {
                                        options.currImg--;
                                        if (options.currImg < 1) {
                                            options.currImg = imageTotal;
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

            });
        
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