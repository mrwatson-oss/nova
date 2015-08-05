/**
 * ui.component.appbar
 *
 * @return returns the appbar handlebars compiled with data
 */
var ui = ui || {};

ui.component.appbar = (function($, T) {

    /**
     * appbar
     * @type {Object}
     */
    var params = {
        'class': null
 

    };


    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} appbar object with all properties
     * @return compiled handlebars template
     */
    function render(context) {



        data = $.extend({}, params, context);


        return T.appbar(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
