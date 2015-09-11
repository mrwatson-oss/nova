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
(jQuery, ui.component.template));;var ui = ui || {};

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
(jQuery, ui.component.template));;var ui = ui || {};
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