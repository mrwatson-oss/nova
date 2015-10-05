/**
 * ui.component.userpostit
 *
 * @return returns the userpostit handlebars compiled with data
 */
var ui = ui || {};

ui.component.userpostit = (function($, T) {

    /**
     * userpostit
     * @type {Object}
     */
    var userpostit = {
        'class': null,
        'id': null,
        'content': null,
        'userpostitContent': null

};


    // *
    //  * render
    //  *
    //  * @todo make this method extended or mixin
    //  * @param {} userpostit object with all properties
    //  * @return compiled handlebars template

    function render(context) {

// Handlebars.registerPartial('theTitle', '{{title}}');
// Handlebars.registerPartial('theCopy', '{{copy}}');
// Handlebars.registerPartial('theThumbnail', '{{thumbnail}}');

        data = $.extend({}, userpostit, context);

        return T.userpostit(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));
