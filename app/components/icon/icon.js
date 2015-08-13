/**
 * ui.component.icon
 *
 * @return returns the icon handlebars compiled with data
 */
var ui = ui || {};

ui.component.icon = (function($, T) {

    /**
     * icon
     * @type {Object}
     */
    var icon = {
        'icon': null,
        'color': null,
        'size': null,
        'styleguide': null
    };

     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} icon object with all properties
     * @return compiled handlebars template
     */
    function render(context) {
 
        data = $.extend({}, icon, context);

        return T.icon(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));