/**
 * ui.component.sharePost
 *
 * @return returns the sharePost handlebars compiled with data
 */
var ui = ui || {};

ui.component.sharePost = (function($, T) {

    /**
     * sharePost
     * @type {Object}
     */
    var params = {
        'button': null,
        'input': true,
        'class': 'share-post'
    };

    clickSharePost = function() {
        alert('ok verstuurd');
    };
    clickUploadPicture = function() {
        alert('ok doe maar uitzoeken');
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} sharePost object with all properties
     * @return compiled handlebars template
     */
    function render(context) {
 // ui.component.textInput.render({'background':'true'});
        Handlebars.registerPartial({
            'partialButton': ui.component.button.render({
                'class': '{{class}}',
                'id': '{{id}}',
                'content': '{{content}}',
                'action': '{{action}}',
                'name': '{{name}}'
            }),
           


    });

        data = $.extend({}, params, context);


        return T.sharePost(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
