/**
 * ui.component.composer
 *
 * @return returns the composer handlebars compiled with data
 */
var ui = ui || {};

ui.component.composer = (function($, T) {

    /**
     * composer
     * @type {Object}
     */
    var params = {
        'button': null,
        'input': true,
        'class': 'composer',
        'props': '{{props}}'

    };

    clickcomposer = function() {
        alert('ok verstuurd');
    };
    clickUploadPicture = function() {
        alert('ok doe maar uitzoeken');
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} composer object with all properties
     * @return compiled handlebars template
     */
    function render(context) {
 // ui.component.textInput.render({'background':'true'});
    //     Handlebars.registerPartial({
    //         'partialButton': ui.component.button.render({
    //             'class': '{{class}}',
    //             'id': '{{id}}',
    //             'content': '{{content}}',
    //             'action': '{{action}}',
    //             'name': '{{name}}'
    //         }),
           


    // });

        data = $.extend({}, params, context);


        return T.composer(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
