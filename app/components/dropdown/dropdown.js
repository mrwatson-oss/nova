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
        'script': 'comeDown()',
        'dropdownItem': null
    };

    comeDown = function() {
        $('li.dropdown').click(function(event) {
            event.stopPropagation();
            $(this).addClass('drop-nav-active');
        });
        $(document).click(function() {
            $('li.dropdown').removeClass('drop-nav-active');
        });
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} dropdown object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, dropdown, context);


        return T.dropdown(data);

    }




    return {
        render: render
    };

}(jQuery, ui.component.template));
