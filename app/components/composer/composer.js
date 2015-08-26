/**
 * ui.component.composer
 *
 * @return returns the composer handlebars compiled with data
 */
var ui = ui || {};

ui.component.composer = (function($, T) {

    /**
     * composer
     * @type {Object}
     */
    var params = {
        'buttons': null,
        'input': null
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} composer object with all properties
     * @return compiled handlebars template
     */
    function render(context) {


        data = $.extend({}, params, context);


        return T.composer(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
