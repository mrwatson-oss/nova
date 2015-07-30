/**
 * ui.component.avatar
 *
 * @return returns the avatar handlebars compiled with data
 */
var ui = ui || {};

ui.component.avatar = (function($, T) {

    /**
     * avatar
     * @type {Object}
     */
    var avatar = {
        'src': null,
        'round': null,
        'small': null
    };

     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} avatar object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

 // Handlebars.registerPartial({
 //            'partButton': ui.component.avatar.render({})
            
 //            });
 
        data = $.extend({}, avatar, context);

        return T.avatar(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));