/**
 * ui.component.dialog
 *
 * @return returns the dialog handlebars compiled with data
 */
var ui = ui || {};

ui.component.dialog = (function($, T) {

    /**
     * dialog
     * @type {Object}
     */
    var dialog = {
        'class': null,
        'id': null,
        'icon': null,
        'title': null,
        'dialog': null,
        'button': false
    };
     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} dialog object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, dialog, context);

        return T.dialog(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template))