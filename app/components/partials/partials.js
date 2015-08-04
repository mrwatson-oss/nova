var ui = ui || {};
ui.component.partials = (function($, T) {
        var partials = {};

        function render(context) {

            Handlebars.registerPartial({
                'PartialButton': ui.component.button.render({
                    'class': '{{class}}',
                    'id': '{{id}}',
                    'content': '{{content}}',
                    'action': '{{action}}',
                    'name': '{{name}}'
                }),
                'PartialAvatar': ui.component.avatar.render({
                    'class':'{{class}}',
                    'src':'{{src}}'
                })
            });

            data = $.extend({}, partials, context);

            return T.partials(data);
        }

        return {
            render: render
        };


    }
    (jQuery, ui.component.template));
