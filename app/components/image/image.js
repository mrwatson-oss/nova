/**
 * ui.component.image
 *
 * @return returns the image handlebars compiled with data
 */
var ui = ui || {};

ui.component.image = (function($, T) {

    /**
     * image
     * @type {Object}
     */
    var image = {
        'src': null,
        'round': null,
        'small': null
    };

     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} image object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

 // Handlebars.registerPartial({
 //            'partButton': ui.component.image.render({})
            
 //            });
 
        data = $.extend({}, image, context);

        return T.image(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));