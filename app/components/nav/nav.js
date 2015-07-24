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
        'class': 'nav'

};

     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} nav object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

Handlebars.registerPartial('link', '<a href="{{url}}">{{item}}</a>');
 
        data = $.extend({}, nav, context);

        return T.nav(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));