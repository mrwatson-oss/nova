/**
 * ui.component.button
 *
 * @return returns the button handlebars compiled with data
 */
var ui = ui || {};

ui.component.button = (function($, T) {

    /**
     * button
     * @type {Object}
     */
    var button = {
        'class': 'btn',
        id: null,
        name: 'hap',
        type: 'button',
        value: null,
        content: null,
        action: 'clickButton()',
        icon: null,
        disabled: false,
        borderLeft: false
    };

clickButton = function() {
        alert('No action defined. Try calling button with "action":"yourFunction()"');
    };
     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} button object with all properties
     * @return compiled handlebars template
     */
    function render(context) {


 
        data = $.extend({}, button, context);

        return T.button(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));