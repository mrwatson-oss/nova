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
        'input': null,
        'bs-class': '',
        'class': 'share-post col-xs-12'
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

        Handlebars.registerPartial({
            'partialButton': ui.component.button.render({
                'class': '{{class}}',
                'id': '{{id}}',
                'content': '{{content}}',
                'action': '{{action}}',
                'name': '{{name}}'
            }),
            'partialInput': ui.component.input.render({
                'things': '{{things}}'
            })


    });

        data = $.extend({}, params, context);


        return T.sharePost(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
