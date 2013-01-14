(function($) {
  var MyPlugin = function(element, options) {
    var elem = $(element);
    var obj = this;
    var settings = $.extend({param : 'defaultValue'}, options || {});

    // Public method - can be called from client code
    this.publicMethod = function() {
      init();
    };

    // Private method - can only be called from within this object
    var init = function() {
      elem.text('Script file init');
    };
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