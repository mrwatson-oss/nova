/**
 * ui.component.textArea
 *
 * @return returns the textArea handlebars compiled with data
 */
var ui = ui || {};

ui.component.textArea = (function($, T) {

    /**
     * textArea
     * @type {Object}
     */
    var textArea = {
        'class': null,
        id: null,
        name: null,
        type: 'text',
        value: null,
        placeholder: 'placeholder',
        background: 'false'
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} textArea object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, textArea, context);

        return T.textArea(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));



