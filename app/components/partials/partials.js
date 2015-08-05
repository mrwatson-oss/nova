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
                    'class': '{{class}}',
                    'src': '{{src}}'
                }),
                'PartialTextInput': ui.component.textInput.render({
                    'class': '{{class}}',
                    'id': '{{id}}',
                    'name': '{{name}}',
                    'value': '{{value}}',
                    'placeholder': '{{placeholder}}',
                    'hasLabel': false,
                    'label': '{{label}}'
                }),
                'PartialDropdown': ui.component.dropdown.render({
                    'class': '{{class}}'
                }),
                'PartialNavItem': '<a href="{{baseurl}}{{url}}">{{item}}</a>'
            });

            data = $.extend({}, partials, context);

            return T.partials(data);
        }

        return {
            render: render
        };


    }
    (jQuery, ui.component.template));


// ,
// 'src': 'http://i160.photobucket.com/albums/t164/mtms4/hobo.jpg',
// 'round': true,
// 'src': 'http://i160.photobucket.com/albums/t164/mtms4/hobo.jpg',
// 'small': true,
// 'src': 'http://i160.photobucket.com/albums/t164/mtms4/hobo.jpg',
// 'round': true,
// 'small': true
