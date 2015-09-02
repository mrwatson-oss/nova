/**
 * ui.component.eventpostit
 *
 * @return returns the eventpostit handlebars compiled with data
 */
var ui = ui || {};

ui.component.eventpostit = (function($, T) {

    /**
     * eventpostit
     * @type {Object}
     */
    var eventpostit = {
        'class': null,
        'id': null,
        'content': null,
        'eventpostitContent': null
};

     
    // *
    //  * render
    //  *
    //  * @todo make this method extended or mixin
    //  * @param {} eventpostit object with all properties
    //  * @return compiled handlebars template
     
    function render(context) {
 
        data = $.extend({}, eventpostit, context);

        return T.eventpostit(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));