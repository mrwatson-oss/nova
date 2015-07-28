/**
 * ui.component.dropdown
 *
 * @return returns the dropdown handlebars compiled with data
 */
var ui = ui || {};

ui.component.dropdown = (function($, T) {

    /**
     * dropdown
     * @type {Object}
     */
    var dropdown = {
        'class': null,
        id: null,
        name: null,
        value: null,
        placeholder: 'placeholder'
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} dropdown object with all properties
     * @return compiled handlebars template
     */
    function render(context) {
    
        Handlebars.registerPartial({
            'pDropdownOptions': '<li><a id="{{class}}" href="{{href}}">{{option}}</a></li>'
        });
        data = $.extend({}, dropdown, context);

        return T.dropdown(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
