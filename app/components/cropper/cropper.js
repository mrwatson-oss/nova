/**
 * ui.component.cropper
 *
 * @return returns the cropper handlebars compiled with data
 */
var ui = ui || {};

ui.component.cropper = (function($, T) {

    /**
     * cropper
     * @type {Object}
     */
    var params = {
        'buttons': null,
        'input': null
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} cropper object with all properties
     * @return compiled handlebars template
     */
    function render(context) {


        data = $.extend({}, params, context);


        return T.cropper(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
