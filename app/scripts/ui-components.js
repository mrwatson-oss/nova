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
        'borderLeft': false,
        'label': false
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
(jQuery, ui.component.template));;var buttonData = {
    'buttonData1': {
        'styleguide': true,
        'buttons': [{
            'content': 'Meetings',
            'class': 'naked-button--neutral',
        }, {
            'content': 'Like',
            'class': 'naked-button--happy'
        }, {
            'content': 'Back',
            'class': 'naked-button--strict'
        }, {
            'content': 'Destroy',
            'class': 'naked-button--angry'
        }, {
            'content': 'Menu',
            'class': 'naked-button--neutral',
            'icon': 'icon-system-menu'
        }, {
            'icon': 'icon-solid-camera',
            'class': 'naked-button--neutral'
        }]
    },
    'buttonData2': {
        'styleguide': true,
        'buttons': [{
            'content': 'Meetings',
            'class': 'naked-button--neutral',
            'disabled': 'disabled'
        }, {
            'content': 'Like',
            'class': 'naked-button--happy',
            'disabled': 'disabled'
        }, {
            'content': 'Back',
            'class': 'naked-button--strict',
            'disabled': 'disabled'
        }, {
            'content': 'Destroy',
            'class': 'naked-button--angry',
            'disabled': 'disabled'
        }, {
            'content': 'Menu',
            'class': 'naked-button--neutral',
            'icon': 'icon-system-menu',
            'disabled': 'disabled'
        }, {
            'icon': 'icon-solid-camera',
            'class': 'naked-button--neutral',
            'disabled': 'disabled'
        }]
    },
    'buttonData3': {
        'styleguide': true,
        'buttons': [{
            'content': 'Cancel',
            'class': 'solid-button--neutral'
        }, {
            'content': 'Share post',
            'class': 'solid-button--happy'
        }, {
            'content': 'Check availability',
            'class': 'solid-button--strict'
        }, {
            'content': 'Delete user',
            'class': 'solid-button--angry'
        }, {
            'content': 'Settings',
            'icon': 'icon-solid-settings',
            'class': 'solid-button--neutral'
        }, {
            'icon': 'icon-user-arrow-right',
            'class': 'solid-button--strict'
        }]
    },
    'buttonData4': {
        'styleguide': true,
        'buttons': [{
            'content': 'Cancel',
            'class': 'solid-button--neutral',
            'disabled': 'disabled'
        }, {
            'content': 'Share post',
            'class': 'solid-button--happy',
            'disabled': 'disabled'
        }, {
            'content': 'Check availability',
            'class': 'solid-button--strict',
            'disabled': 'disabled'
        }, {
            'content': 'Delete user',
            'class': 'solid-button--angry',
            'disabled': 'disabled'
        }, {
            'content': 'Settings',
            'icon': 'icon-solid-settings',
            'class': 'solid-button--neutral',
            'disabled': 'disabled'
        }, {
            'icon': 'icon-user-arrow-right',
            'class': 'solid-button--strict',
            'disabled': 'disabled'
        }]
    }
};
;var ui = ui || {};

ui.component.composer = (function($, T) {

    /**
     * composer
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

ui.component.dialog = (function($, T) {

    /**
     * dialog
     * @type {Object}
     */
    var dialog = {
        'class': null,
        'id': null,
        'icon': null,
        'title': null,
        'dialog': null,
        'button': false
    };
     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} dialog object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, dialog, context);

        return T.dialog(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));var ui = ui || {};

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

ui.component.eventpostit = (function($, T) {

    /**
     * eventpostit
     * @type {Object}
     */
    var eventpostit = {
        'class': null,
        'id': null,
        'content': null,
        'eventpostitContent': null
};

     
    // *
    //  * render
    //  *
    //  * @todo make this method extended or mixin
    //  * @param {} eventpostit object with all properties
    //  * @return compiled handlebars template
     
    function render(context) {
 
        data = $.extend({}, eventpostit, context);

        return T.eventpostit(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));;var ui = ui || {};

ui.component.form = (function($, T) {

    /**
     * form
     * @type {Object}
     */
    var form = {
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
     * @param {} form object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, form, context);

        return T.form(data);
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
(jQuery, ui.component.template));;var iconData = {
    'iconData1': {
        'styleguide': true,
        'icons': [{
            'icon': 'icon-solid-bell',
            'label': true
        }, {
            'icon': 'icon-naked-bell',
            'label': true
        }, {
            'icon': 'icon-solid-bubbles',
            'label': true
        }, {
            'icon': 'icon-naked-bubbles',
            'label': true
        }, {
            'icon': 'icon-solid-user',
            'label': true
        }, {
            'icon': 'icon-naked-user',
            'label': true
        }, {
            'icon': 'icon-solid-menu',
            'label': true
        }]
    },
    'iconData2': {
        'styleguide': true,
        'icons': [{
            'icon': 'icon-system-menu',
            'label': true
        }, {
            'icon': 'icon-system-refresh',
            'label': true
        }, {
            'icon': 'icon-system-down-open',
            'label': true
        }, {
            'icon': 'icon-system-up-open',
            'label': true
        }, {
            'icon': 'icon-system-close',
            'label': true
        }, {
            'icon': 'icon-solid-magnifier',
            'label': true
        }, {
            'icon': 'icon-naked-magnifier',
            'label': true
        }]
    },
    'iconData3': {
        'styleguide': true,
        'icons': [{
            'icon': 'icon-solid-bubble',
            'label': true
        }, {
            'icon': 'icon-naked-bubble',
            'label': true
        }, {
            'icon': 'icon-solid-like',
            'label': true
        }, {
            'icon': 'icon-naked-like',
            'label': true
        }, {
            'icon': 'icon-solid-add',
            'label': true
        }, {
            'icon': 'icon-naked-add',
            'label': true
        }, {
            'icon': 'icon-solid-settings',
            'label': true
        }, {
            'icon': 'icon-naked-settings',
            'label': true
        }, {
            'icon': 'icon-solid-flag',
            'label': true
        }, {
            'icon': 'icon-solid-fire',
            'label': true
        }, {
            'icon': 'icon-solid-cup',
            'label': true
        }, {
            'icon': 'icon-naked-cup',
            'label': true
        }, {
            'icon': 'icon-user-arrow-left',
            'label': true
        }, {
            'icon': 'icon-user-arrow-right',
            'label': true
        }, {
            'icon': 'icon-user-star-big',
            'label': true
        }, {
            'icon': 'icon-user-star-small',
            'label': true
        }, {
            'icon': 'icon-user-check',
            'label': true
        }, {
            'icon': 'icon-user-award',
            'label': true
        }, {
            'icon': 'icon-user-star-flag',
            'label': true
        }, {
            'icon': 'icon-user-megaphone',
            'label': true
        }, {
            'icon': 'icon-user-github',
            'label': true
        }, {
            'icon': 'icon-user-linkedin',
            'label': true
        }, {
            'icon': 'icon-user-googleplus',
            'label': true
        }, {
            'icon': 'icon-user-pinterest',
            'label': true
        }, {
            'icon': 'icon-user-twitter',
            'label': true
        }, {
            'icon': 'icon-user-facebook',
            'label': true
        }, {
            'icon': 'icon-user-instagram',
            'label': true
        }, {
            'icon': 'icon-user-skype',
            'label': true
        }, {
            'icon': 'icon-user-key',
            'label': true
        }, {
            'icon': 'icon-user-url',
            'label': true
        }, {
            'icon': 'icon-user-help',
            'label': true
        }, {
            'icon': 'icon-user-mail',
            'label': true
        }, {
            'icon': 'icon-user-phone',
            'label': true
        }, {
            'icon': 'icon-user-school',
            'label': true
        }, {
            'icon': 'icon-user-clock',
            'label': true
        }, {
            'icon': 'icon-user-location',
            'label': true
        }, {
            'icon': 'icon-user-compass',
            'label': true
        }, {
            'icon': 'icon-user-map',
            'label': true
        }, {
            'icon': 'icon-user-mobile',
            'label': true
        }, {
            'icon': 'icon-user-monitor',
            'label': true
        }, {
            'icon': 'icon-user-suitcase',
            'label': true
        }, {
            'icon': 'icon-user-calendar',
            'label': true
        }, {
            'icon': 'icon-user-location-2',
            'label': true
        }, {
            'icon': 'icon-user-user',
            'label': true
        }]
    }
};
;var ui = ui || {};

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

ui.component.modal = (function($, T) {

    /**
     * modal
     * @type {Object}
     */
    var modal = {
        'class': null,
        'id': null,
        'icon': null,
        'title': null,
        'modal': null,
        'button': false
    };
     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} modal object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, modal, context);

        return T.modal(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));var ui = ui || {};

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
        'dropdown': 'false',
        'fixed': false

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
(jQuery, ui.component.template));;// -----------------------------------------------------------------------------
// Base Button
// -----------------------------------------------------------------------------

var navData = {
    'navData1': {
        'title': true,
        'navTitle': 'Design',
        'navItems': [{
            'url': '#anchor-color',
            'item': 'Colors'
        }, {
            'url': '#anchor-icons',
            'item': 'Icons'
        }, {
            'url': '#anchor-layout',
            'item': 'Layout'
        }, {
            'url': '#anchor-typography',
            'item': 'Typography'
        }]
    },
    'navData2': {
        'title': true,
        'navTitle': 'Starting a project',
        'navItems': [{
            'url': '#',
            'item': 'Scaffolding'
        }, {
            'url': '#anchor-sampleapps',
            'item': 'Sample App&#39;s'
        }]
    },
    'navData3': {
        'title': true,
        'navTitle': 'Components',
        'navItems': [{
            'url': '#anchor-appbar',
            'item': 'App Bar',
            'icon': 'icon-app-naked-list blue'
        }, {
            'url': '#anchor-appblock',
            'item': 'App Block',
            'icon': 'icon-user-naked-thumbnails blue'
        }, {
            'url': '#anchor-button',
            'item': 'Buttons',
            'icon': 'icon-app-coins blue'
        }, {
            'url': '#anchor-composer',
            'item': 'Composer',
            'icon': 'icon-user-naked-pencil blue'
        }, {
            'url': '#anchor-header',
            'item': 'Header',
            'icon': 'icon-app-naked-school blue'
        }, {
            'url': '#anchor-image',
            'item': 'Images',
            'icon': 'icon-app-naked-flower blue'
        }, {
            'url': '#anchor-input',
            'item': 'Input Fields',
            'icon': 'icon-app-naked-notebook blue'
        }, {
            'url': '#anchor-messages',
            'item': 'Messages',
            'icon': 'icon-naked-bubbles blue'
        }, {
            'url': '#anchor-navigation',
            'item': 'Navigation',
            'icon': 'icon-app-naked-direction-sign blue'
        }, {
            'url': '#anchor-postits',
            'item': 'Post-it&#39;s',
            'icon': 'icon-app-naked-pen blue'
        }]
    }
};
;var ui = ui || {};
ui.component.partials = (function($, T) {
        var partials = {};

        function render(context) {
            Handlebars.registerHelper('freshComments', function(comments) {
                var userComments = JSON.parse(comments);
                if (userComments.length>2) {return userComments[0];} else{return userComments;};
                
            });
            Handlebars.registerHelper('oldComments', function(comments) {
                var userComments = JSON.parse(comments);
                 if (userComments.length>2) {return userComments[2];} else{return;};
            });
            Handlebars.registerPartial({
                'PartialAvatar': '{{#if avatar}}{{#avatar}}<div class="avatar {{#if small}}avatar--small{{/if}} {{#if round}} round{{/if}}"><img {{#if src}}src="{{src}}" {{else}}src="https://www.filepicker.io/api/file/Xr1rtfRBRd6HVNVynfMu"{{/if}} alt="avatar"></div>{{/avatar}}{{else}}<div class="avatar {{#if small}}avatar--small{{/if}}"><img src="https://www.filepicker.io/api/file/Xr1rtfRBRd6HVNVynfMu" alt="avatar"/></div>{{/if}}',
                'PartialButton': '<button {{#if disabled}}disabled{{/if}} class="btn {{class}} {{#if icon}}icon-only{{/if}}" id="{{id}}" name="{{name}}" type="{{type}}" value="{{value}}" onclick="{{action}}">{{#if iconOnly}}{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}{{else}}{{#if icon}}<i class="icon {{icon}}"></i> {{/if}}{{#if content}}{{content}}{{/if}}{{/if}}</button>',
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
                'PartialTextarea': '<div class="text-area {{class}}"><textarea class="autoExpand" rows="0" data-min-rows="1" {{#if background}}class="text-input__grey"{{/if}} {{#if required}}required{{/if}} name="{{name}}" id="{{id}}" type="text" placeholder="{{placeholder}}" value="{{value}}"></textarea></div>',
                'PartialPostItActionBar': '<div class="post-it__action-bar"><div class="row"><div class="col-xs-12"><div class="post-it__actions">{{#each postitActions}}{{>PartialButton}}{{/each}}{{#if postitLikes}}{{#postitLikes}}<a class="naked-button--strict pull-right">{{number}} people like this</a>{{/postitLikes}}{{/if}}</div></div><div class="col-xs-12"><div class="app-block--no-bg"><div class="post-it__comments" class="post-it__comments">{{#if comments}}<div class="row"><div class="col-xs-12">{{#each comments}}<div class="comment-author-avatar">{{>PartialAvatar}}</div><div class="comment--meta"><span class="comment-author">{{author}} </span> <span class="comment-timestamp"> {{timestamp}}</span></div><div class="comment-content"><p>{{{content}}}</p></div>{{/each}}</div></div>{{/if}}</div>{{#if commentInputField}}<div class="post-it__input-field">{{#commentInputField}}<div class="row"><div class="col-xs-12"><div class="comment-author-avatar">{{>PartialAvatar}}</div><div class="comment__text-input">{{>PartialTextInput}}</div><div class="comment__text-input-button">{{>PartialButton class="solid-button--happy pull-right"}}</div></div></div>{{/commentInputField}}</div>{{/if}}</div></div></div></div>',
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

ui.component.postitactionbar = (function($, T) {

    /**
     * postitactionbar
     * @type {Object}
     */
    var postitactionbar = {
        'class': null,
        'id': null,
        'content': null,
        'postitactionbarContent': null
};


    // *
    //  * render
    //  *
    //  * @todo make this method extended or mixin
    //  * @param {} postitactionbar object with all properties
    //  * @return compiled handlebars template
     
    function render(context) {
 
        data = $.extend({}, postitactionbar, context);

        return T.postitactionbar(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));;var ui = ui || {};

ui.component.select = (function($, T) {

    /**
     * select
     * @type {Object}
     */
    var select = {
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} select object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, select, context);

        return T.select(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));



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



;var ui = ui || {};

ui.component.userpostit = (function($, T) {

    /**
     * userpostit
     * @type {Object}
     */
    var userpostit = {
        'class': null,
        'id': null,
        'content': null,
        'userpostitContent': null

};

     
    // *
    //  * render
    //  *
    //  * @todo make this method extended or mixin
    //  * @param {} userpostit object with all properties
    //  * @return compiled handlebars template
     
    function render(context) {

// Handlebars.registerPartial('theTitle', '{{title}}');
// Handlebars.registerPartial('theCopy', '{{copy}}');
// Handlebars.registerPartial('theThumbnail', '{{thumbnail}}');
 
        data = $.extend({}, userpostit, context);

        return T.userpostit(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));