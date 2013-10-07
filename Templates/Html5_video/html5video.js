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
                var video = document.getElementById('BeoLab19DesignInspiration');
                var videoInitReadyInterval = setInterval(function () { videoInitReadyHandler(video, videoInitReadyInterval); }, 500);
                videoInitReadyHandler(video, videoInitReadyInterval);
            }
        }

        /*********************************************************
        HANDLERS
        *********************************************************/
        function videoInitReadyHandler(video, interval) {
            if (ideo.video) {
                switch (readyState) {
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        videoInit(video, interval);
                        break;
                    case 4:
                        videoInit(video, interval);
                        break;
                }            
            }
        }
        
        function videoInit(video, interval){
            clearMyInterval(interval);
            
            $video.on('timeupdate', videoTimeUpdateHandler);
            $video.on('play', videoPlayHandler);
            $video.on('ended', videoCompleteHandler);

            // autoplay video to force preload
            $video.get(0).play();
            
        }
        
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
        
        function clearMyInterval(i) {
           if (i) {
                clearInterval(i);
                i = null;
            }
        }

        init();
    }

    $(document).ready(html5video);

})(jQuery);
