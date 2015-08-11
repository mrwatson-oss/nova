/**
 * ui.component.nav
 *
 * @return returns the nav handlebars compiled with data
 */
var ui = ui || {};

ui.component.nav = (function($, T) {

    /**
     * nav
     * @type {Object}
     */
    var nav = {
        'properties': null,
        'class': null,
        'title': false,
        'navTitle': null,
        'communitySwitch': null

};

     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} nav object with all properties
     * @return compiled handlebars template
     */
    function render(context) {
 
        data = $.extend({}, nav, context);

        return T.nav(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));