/**
 * ui.component.form
 *
 * @return returns the form handlebars compiled with data
 */
var ui = ui || {};

ui.component.form = (function($, T) {

    /**
     * form
     * @type {Object}
     */
    var form = {
        'class': null,
        'id': null,
        'name': null,
        'type': 'text',
        'value': null,
        'placeholder': 'placeholder',
        'hasLabel': null,
        'label': null,
        'background': null,
        'icon': null,
        'rows': '5'
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} form object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, form, context);

        return T.form(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
