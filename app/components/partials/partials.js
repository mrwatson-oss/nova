var ui = ui || {};
ui.component.partials = (function($, T) {
        var partials = {};

        function render(context) {

            Handlebars.registerPartial({
                'PartialAvatar': '{{#if avatar}}{{#avatar}}<div class="avatar {{#if small}}avatar--small{{/if}} {{#if round}} round{{/if}}"><img {{#if src}}src="{{src}}" {{else}}src="https://www.filepicker.io/api/file/Xr1rtfRBRd6HVNVynfMu"{{/if}} alt="avatar"></div>{{/avatar}}{{else}}<div class="avatar {{#if small}}avatar--small{{/if}}"><img src="https://www.filepicker.io/api/file/Xr1rtfRBRd6HVNVynfMu" alt="avatar"/></div>{{/if}}',
                'PartialButton': '<button {{#if disabled}}disabled{{/if}} class="{{class}} {{#if icon}}icon-only{{/if}}" id="{{id}}" name="{{name}}" type="{{type}}" value="{{value}}" onclick="{{action}}">{{#if iconOnly}}{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}{{else}}{{#if icon}}<i class="icon {{icon}}"></i> {{/if}}{{#if content}}{{content}}{{/if}}{{/if}}</button>',
                'PartialDropdown': '<li class="dropdown" id="dropdown">{{#if icon}}<i class="{{icon}}"></i>{{/if}}{{{dropdownItem}}}<ul class="nav drop-nav">{{#each dropdownOptions}}<li><a id="{{id}}" class="{{class}}" href="{{href}}">{{option}}</a></li>{{/each}}</ul><script>{{script}}</script></li>',
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
                'PartialCommunitySwitch': '<div class="community-switch" style="background: no-repeat center url({{src}})"><span class="community-switch-name">{{name}}{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}</span></div>',
                'PartialNavItem': '<li><a class="{{class}} "href="{{baseurl}}{{url}}">{{#if icon}}<i class="icon {{icon}}"></i>{{/if}} {{{item}}}</a></li>'
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
