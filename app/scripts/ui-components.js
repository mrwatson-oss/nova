var ui = ui || {};

ui.component.alert = (function($, T) {

    /**
     * alert
     * @type {Object}
     */
    var alert = {
        'class': null,
        'id': null,
        'icon': null,
        'title': null,
        'alert': null,
        'button': false
    };
     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} alert object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, alert, context);

        return T.alert(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));var ui = ui || {};

ui.component.appbar = (function($, T) {

    /**
     * appbar
     * @type {Object}
     */
    var params = {
        'class': null
 

    };


    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} appbar object with all properties
     * @return compiled handlebars template
     */
    function render(context) {



        data = $.extend({}, params, context);


        return T.appbar(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
;var ui = ui || {};

ui.component.appblock = (function($, T) {

    /**
     * appblock
     * @type {Object}
     */
    var appblock = {
        'class': null,
        'avatar':null

};

     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} appblock object with all properties
     * @return compiled handlebars template
     */
    function render(context) {
 
        data = $.extend({}, appblock, context);

        return T.appblock(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));;var ui = ui || {};

ui.component.avatar = (function($, T) {

    /**
     * avatar
     * @type {Object}
     */
    var avatar = {
        'src': null,
        'round': null,
        'small': null
    };

     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} avatar object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

 
        data = $.extend({}, avatar, context);

        return T.avatar(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));;var ui = ui || {};

ui.component.button = (function($, T) {

    /**
     * button
     * @type {Object}
     */
    var button = {
        'class': 'btn',
        'id': null,
        'name': 'hap',
        'type': 'button',
        'value': null,
        'content': false,
        'action': 'clickButton()',
        'icon': null,
        'disabled': false,
        'borderLeft': false
    };

clickButton = function() {
        alert('No action defined. Try calling button with "action":"yourFunction()"');
    };
     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} button object with all properties
     * @return compiled handlebars template
     */
    function render(context) {


 
        data = $.extend({}, button, context);

        return T.button(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));;// /**
//  * ui.component.card
//  *
//  * @return returns the card handlebars compiled with data
//  */
// var ui = ui || {};

// ui.component.card = (function($, T) {

//     /**
//      * card
//      * @type {Object}
//      */
//     var card = {
//         'properties': null,
//         'class': 'card',
//         'id': null,
//         'title': false,
//         'copy': false,
//         'thumbnail': false

// };

     
//     *
//      * render
//      *
//      * @todo make this method extended or mixin
//      * @param {} card object with all properties
//      * @return compiled handlebars template
     
//     function render(context) {

// // Handlebars.registerPartial('theTitle', '{{title}}');
// // Handlebars.registerPartial('theCopy', '{{copy}}');
// // Handlebars.registerPartial('theThumbnail', '{{thumbnail}}');
 
//         data = $.extend({}, card, context);

//         return T.card(data);
//     }

//     return {
//         render: render
//     };


// }
// (jQuery, ui.component.template));;var ui = ui || {};

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


        data = $.extend({}, params, context);


        return T.composer(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
;var ui = ui || {};

ui.component.dropdown = (function($, T) {

    /**
     * dropdown
     * @type {Object}
     */
    var dropdown = {
        'class': null, 
        'script': 'comeDown()',
        'dropdownItem': null
    };

    comeDown = function() {
        $('li.dropdown').click(function(event) {
            event.stopPropagation();
            $(this).addClass('drop-nav-active');
        });
        $(document).click(function() {
            $('li.dropdown').removeClass('drop-nav-active');
        });
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} dropdown object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, dropdown, context);


        return T.dropdown(data);

    }




    return {
        render: render
    };

}(jQuery, ui.component.template));
;var ui = ui || {};

ui.component.header = (function($, T) {

    /**
     * header
     * @type {Object}
     */
    var params = {
        'properties': null,
        'class': null,
        // logo: 'images/logo.png',
        'input': false,
        'nav': true

    };


    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} header object with all properties
     * @return compiled handlebars template
     */
    function render(context) {



        data = $.extend({}, params, context);


        return T.header(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
;var ui = ui || {};

ui.component.icon = (function($, T) {

    /**
     * icon
     * @type {Object}
     */
    var icon = {
        'icon': null,
        'color': null,
        'size': null,
        'styleguide': null
    };

     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} icon object with all properties
     * @return compiled handlebars template
     */
    function render(context) {
 
        data = $.extend({}, icon, context);

        return T.icon(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));;var ui = ui || {};

ui.component.image = (function($, T) {

    /**
     * image
     * @type {Object}
     */
    var image = {
        'src': null,
        'round': null,
        'small': null
    };

     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} image object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, image, context);

        return T.image(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));;var ui = ui || {};

ui.component.nav = (function($, T) {

    /**
     * nav
     * @type {Object}
     */
    var nav = {
        'properties': null,
        'class': null,
        'title': false,
        'navTitle': null,
        'communitySwitch': null,
        'button': null,
        'icon': null,
        'navActionBar': null,
        'dropdown': 'false'

};

     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} nav object with all properties
     * @return compiled handlebars template
     */
    function render(context) {
 
        data = $.extend({}, nav, context);

        return T.nav(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));;var ui = ui || {};
ui.component.partials = (function($, T) {
        var partials = {};

        function render(context) {

            Handlebars.registerPartial({
                'PartialButton': '<button {{#if disabled}}disabled{{/if}} class="{{class}}" id="{{id}}" name="{{name}}" type="{{type}}" value="{{value}}" onclick="{{action}}">{{#if iconOnly}}{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}{{else}}{{#if icon}}<i class="icon {{icon}}"></i> {{/if}}{{#if content}}{{content}}{{/if}}{{/if}}</button>',
                'PartialAvatar': ui.component.avatar.render({
                    'class': '{{class}}',
                    'src': '{{src}}'
                }),
                'PartialDropdown': '<li class="dropdown {{class}}" id="dropdown">{{{dropdownItem}}}<ul class="nav drop-nav">{{#each dropdownOptions}}<li><a id="{{class}}" href="{{href}}">{{option}}</a></li>{{/each}}</ul></li>',
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
;var ui = ui || {};

ui.component.textArea = (function($, T) {

    /**
     * textArea
     * @type {Object}
     */
    var textArea = {
        'class': null,
        id: null,
        name: null,
        type: 'text',
        value: null,
        placeholder: 'placeholder',
        background: 'false'
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} textArea object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, textArea, context);

        return T.textArea(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));



;var ui = ui || {};

ui.component.textInput = (function($, T) {

    /**
     * textInput
     * @type {Object}
     */
    var textInput = {
        'class': null,
        'id': null,
        'name': null,
        'type': 'text',
        'value': null,
        'placeholder': 'placeholder',
        'hasLabel': null,
        'label': null,
        'background': null,
        'icon': null
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} textInput object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, textInput, context);

        return T.textInput(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));



