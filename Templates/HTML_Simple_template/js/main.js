// tips on creating custom plugins
// http://acuriousanimal.com/blog/2013/02/25/things-i-learned-creating-a-jquery-plugin-part-ii/
(function($) {
    var MyPlugin = function(element, options) {
        var elem = $(element);
        var obj = this;
        var settings = $.extend({param : 'defaultValue'}, options || {});

        // public method: removes and kills plugin
        this.destroy = function () {
            $this.remove();
            $this.removeData();            
            $this = null;
        };
        
        // Private method - can only be called from within this object
        var init = function() {
            elem.text('Script file init');
        };
        
        init();
    };

    $.fn.myplugin = function(options) {
        return this.each(function() {
        var element = $(this);

        // Return early if this element already has a plugin instance
        if (element.data('myplugin'))
            return;

        // pass options to plugin constructor
        var myplugin = new MyPlugin(this, options);

        // Store plugin object in this element's data
        element.data('myplugin', myplugin);
        });
    };
})(jQuery); 
