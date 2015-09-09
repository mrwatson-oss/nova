/**
 * ui.component.select
 *
 * @return returns the select handlebars compiled with data
 */
var ui = ui || {};

ui.component.select = (function($, T) {

    /**
     * select
     * @type {Object}
     */
    var select = {
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} select object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, select, context);

        return T.select(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));



