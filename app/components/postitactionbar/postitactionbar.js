/**
 * ui.component.postitactionbar
 *
 * @return returns the postitactionbar handlebars compiled with data
 */
var ui = ui || {};

ui.component.postitactionbar = (function($, T) {

    /**
     * postitactionbar
     * @type {Object}
     */
    var postitactionbar = {
        'class': null,
        'id': null,
        'content': null,
        'postitactionbarContent': null
};


    // *
    //  * render
    //  *
    //  * @todo make this method extended or mixin
    //  * @param {} postitactionbar object with all properties
    //  * @return compiled handlebars template
     
    function render(context) {
 
        data = $.extend({}, postitactionbar, context);

        return T.postitactionbar(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));