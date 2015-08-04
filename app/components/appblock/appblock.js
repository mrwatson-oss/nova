/**
 * ui.component.appblock
 *
 * @return returns the appblock handlebars compiled with data
 */
var ui = ui || {};

ui.component.appblock = (function($, T) {

    /**
     * appblock
     * @type {Object}
     */
    var appblock = {
        'class': null,
        'avatar':null

};

     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} appblock object with all properties
     * @return compiled handlebars template
     */
    function render(context) {
// ui.component.avatar.render({})

// Handlebars.registerPartial('theTitle', '{{title}}');
// Handlebars.registerPartial('theCopy', '{{copy}}');
// Handlebars.registerPartial('theThumbnail', '{{thumbnail}}');
 
        data = $.extend({}, appblock, context);

        return T.appblock(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));