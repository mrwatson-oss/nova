/**
 * ui.component.textInput
 *
 * @return returns the text-input handlebars compiled with data
 */
var ui = ui || {};

ui.component.textInput = (function($, T) {

    /**
     * textInput
     * @type {Object}
     */
    var textInput = {
        'class': null,
        'id': null,
        'name': null,
        'type': 'text',
        'value': null,
        'placeholder': 'placeholder',
        'hasLabel': null,
        'label': null,
        'background': null,
        'icon': null
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} textInput object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, textInput, context);

        return T.textInput(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));



