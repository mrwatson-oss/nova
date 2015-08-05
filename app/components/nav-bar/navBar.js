/**
 * ui.component.navBar
 *
 * @return returns the navBar handlebars compiled with data
 */
var ui = ui || {};

ui.component.navBar = (function($, T) {

    /**
     * navBar
     * @type {Object}
     */
    var params = {
        'properties': null,
        'class': 'nav-bar'
 

    };


    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} navBar object with all properties
     * @return compiled handlebars template
     */
    function render(context) {



        data = $.extend({}, params, context);


        return T.navBar(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
