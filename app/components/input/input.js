/**
 * ui.component.input
 *
 * @return returns the input handlebars compiled with data
 */
var ui = ui || {};

ui.component.input = (function($, T) {

    /**
     * input
     * @type {Object}
     */
    var input = {
        'class': null,
        id: null,
        name: null,
        type: 'text',
        value: null,
        placeholder: 'placeholder'
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} input object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, input, context);

        return T.input(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));



