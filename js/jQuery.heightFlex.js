// Plugin: jQuery.fontFlex
// Source: github.com/nathco/jQuery.fontFlex
// Author: Nathan Rutzky
// Update: 1.0

(function($) {

    $.fn.heightFlex = function(min, max, mid) {

        var $this = this;

        $(window).resize(function() {

            var size = window.innerWidth / mid;

            if (size < min) size = min;
            if (size > max) size = max;

            $this.css('height', size + 'vw');

        }).trigger('resize');
    };

})(jQuery);