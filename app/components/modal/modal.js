/**
 * ui.component.modal
 *
 * @return returns the modal handlebars compiled with data
 */
var ui = ui || {};

ui.component.modal = (function($, T) {

    /**
     * modal
     * @type {Object}
     */
    var modal = {
        'class': null,
        'id': null,
        'icon': null,
        'title': null,
        'modal': null,
        'button': false
    };
     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} modal object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, modal, context);

        return T.modal(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template))