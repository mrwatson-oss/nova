/**
 * ui.component.alert
 *
 * @return returns the alert handlebars compiled with data
 */
var ui = ui || {};

ui.component.alert = (function($, T) {

    /**
     * alert
     * @type {Object}
     */
    var alert = {
        'class': null,
        'id': null,
        'icon': null,
        'title': null,
        'alert': null,
        'button': false
    };
     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} alert object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, alert, context);

        return T.alert(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template))