(function ($) {
    function html5video() {

        var $video = $('video');
        var $fallbackImage = $('img');
        var videostatus = {isplaying : false, currenttime : 0};
        var isIE8 = (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) === 8) ? true : false;
        var isIE = ($.browser.msie) ? true : false;
        
        function init() {
            
            // If IE8 show fallback image or show HTML5 video
            if (isIE8) {                
                $fallbackImage.show();
                $video.remove();
            } else {
                $video.on('timeupdate', videoTimeUpdateHandler);
                $video.on('play', videoPlayHandler);
                $video.on('ended', videoCompleteHandler);

                // autoplay video to force preload
                $video.get(0).play();
            }
        }

        /*********************************************************
        HANDLERS
        *********************************************************/
        function videoTimeUpdateHandler(e) {
            videostatus.currenttime = e.currentTarget.currentTime;
        }

        function videoPlayHandler(e) {
            videostatus.isplaying = true;
        }

        function videoCompleteHandler(e) {
            videostatus.isplaying = false;
        }

        /*********************************************************
        HELPERS
        *********************************************************/
        function getStringAsNumber(num) {
            return Number((num.split('px'))[0]);
        }

        init();
    }

    $(document).ready(html5video);

})(jQuery);