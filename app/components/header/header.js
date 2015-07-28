/**
 * ui.component.header
 *
 * @return returns the header handlebars compiled with data
 */
var ui = ui || {};

ui.component.header = (function($, T) {

    /**
     * header
     * @type {Object}
     */
    var params = {
        'properties': null,
        'class': 'header',
        // logo: 'images/logo.png',
        'input': false,
        'nav': true

    };


    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} header object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        //rendering the nav component
        ui.component.nav.render();
        ui.component.dropdown.render();

        
        // ui.component.textInput.render();
        // ui.component.textInput.render();
        //registering the input component as a partial
        Handlebars.registerPartial({
            'partialTextInput': ui.component.textInput.render({
                // 'background':'true'
            }),
            // 'pDropdownHeader': ui.component.dropdown.render({
            //     // 'options':'{{aptions}}'
            // })
        });

        data = $.extend({}, params, context);


        return T.header(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
