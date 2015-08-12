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
                'PartialDropdown': ui.component.dropdown.render({
                    'class': '{{class}}',
                    'dropdownItem': '{{{dropdownItem}}}'
                }),
                'pDropdownOptions': '<li><a id="{{class}}" href="{{href}}">{{option}}</a></li>',
                'PartialTextInput': ui.component.textInput.render({
                    'class': '{{class}}',
                    'id': '{{id}}',
                    'name': '{{name}}',
                    'value': '{{value}}',
                    'placeholder': '{{placeholder}}',
                    'hasLabel': false,
                    'label': '{{label}}'
                }),
                'PartialIcon': '<i class="icon {{class}}"><svg class="{{icon}} {{color}}"><use xlink:href="#{{icon}}"></use></svg></i>{{#if label}}<pre class="language-markup"><code class="language-markup">{{icon}}</code></pre>{{/if}}',
                'PartialCoverImage': ui.component.image.render({
                    'cover': true,
                    'src': '{{{src}}}',
                    'alt': '{{alt}}'
                }),
                'PartialCommunitySwitch': '<div class="community-switch" style="background: no-repeat center url({{src}})"><span class="community-switch-name">{{name}} {{>PartialIcon icon="icon-system-down-open"}}</span></div>',
                'PartialNavItem': '<a class="{{class}} "href="{{baseurl}}{{url}}">{{#if icon}}<i class="icon {{icon}}"></i>{{/if}} {{item}}</a>'
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
