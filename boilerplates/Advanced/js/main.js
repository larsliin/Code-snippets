/*global $, console */
var APP = (function () {
    'use strict';

    //private methods
    function init() {
        // build form
        buildForm();

        // build tweenmax animation
        buildAnimation();
    }

    function buildForm() {
        // datepicker
        // docs: http://bootstrap-datepicker.readthedocs.org/en/latest/
        $('.datepicker').datepicker({
                autoclose: true,
                orientation: "top left",
                format: "dd/mm/yyyy",
                todayHighlight: true
            })
            .on('changeDate', onDatePickerChange);

        // chosen select element
        // docs: http://harvesthq.github.io/chosen/
        $('select').chosen({
            disable_search: true
        });
    }

    // datepicker on change callback
    function onDatePickerChange(e) {
        var $target = $(e.currentTarget),
            date = new Date($(e.currentTarget).datepicker('getDate')),
            selectedDate = date.getDate(),
            selectedMonth = date.getMonth(),
            selectedYear = date.getYear();
    }

    // tweenmax animation
    // docs: http://greensock.com/tweenmax
    function buildAnimation() {
        var tween = TweenMax.to($('#my_animate'), 5, {
            width: "100%",
            repeat: -1, // infinite
            yoyo: true,
            repeatDelay: 4,
            onRepeat: function () {
                onRepeat(this);
            },
            ease: Bounce.easeOut
        });
    }

    // tweenmax repeat callback
    function onRepeat(e) {
        var $target = $(e.target);
    }

    //public methods
    return {
        Init: function () {
            init();
        }
    };
}());

$(document).ready(function () {
    'use strict';
    APP.Init();
});