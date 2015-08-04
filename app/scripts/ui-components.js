var ui = ui || {};

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
// ui.component.avatar.render({})

// Handlebars.registerPartial('theTitle', '{{title}}');
// Handlebars.registerPartial('theCopy', '{{copy}}');
// Handlebars.registerPartial('theThumbnail', '{{thumbnail}}');
 
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
        id: null,
        name: 'hap',
        type: 'button',
        value: null,
        content: null,
        action: 'clickButton()',
        icon: null,
        disabled: false
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

ui.component.card = (function($, T) {

    /**
     * card
     * @type {Object}
     */
    var card = {
        'properties': null,
        'class': 'card',
        'id': null,
        'title': false,
        'copy': false,
        'thumbnail': false

};

     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} card object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

Handlebars.registerPartial('theTitle', '{{title}}');
Handlebars.registerPartial('theCopy', '{{copy}}');
Handlebars.registerPartial('theThumbnail', '{{thumbnail}}');
 
        data = $.extend({}, card, context);

        return T.card(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));;var ui = ui || {};

ui.component.dropdown = (function($, T) {

    /**
     * dropdown
     * @type {Object}
     */
    var dropdown = {
        'class': null,
        id: null,
        name: null,
        value: null,
        placeholder: 'placeholder'
    };
 $('li.dropdown').click(function(event) {
                            event.stopPropagation();
                            $(this).toggleClass('drop-nav-active');
                        });

                        $(document).click(function() {
                            $('li.dropdown').removeClass('drop-nav-active');
                        });
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} dropdown object with all properties
     * @return compiled handlebars template
     */
    function render(context) {
    
        Handlebars.registerPartial({
            'pDropdownOptions': '<li><a id="{{class}}" href="{{href}}">{{option}}</a></li>'
        });
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
        'class': 'header',
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

        //rendering the nav component
        ui.component.nav.render();
        ui.component.dropdown.render();

        
        // ui.component.textInput.render();
        // ui.component.textInput.render();
        //registering the input component as a partial
        Handlebars.registerPartial({
            'partialTextInput': ui.component.textInput.render({
                // 'background':'true'
            }),
            // 'pDropdownHeader': ui.component.dropdown.render({
            //     // 'options':'{{aptions}}'
            // })
        });

        data = $.extend({}, params, context);


        return T.header(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
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

 // Handlebars.registerPartial({
 //            'partButton': ui.component.image.render({})
            
 //            });
 
        data = $.extend({}, image, context);

        return T.image(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));;var ui = ui || {};

ui.component.navBar = (function($, T) {

    /**
     * navBar
     * @type {Object}
     */
    var params = {
        'properties': null,
        'class': 'nav-bar'
 

    };


    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} navBar object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

// Handlebars.registerPartial('link2', '<a href="{{url}}" class="{{class}}">{{item}}</a>');

        Handlebars.registerPartial({
            'barButton': ui.component.button.render({
                'class': '{{class}} pull-right',
                'id': '{{id}}',
                'content': '{{content}}',
                'action': '{{action}}',
                'name': '{{name}}'
            })
// 'partialInput': ui.component.input.render({
//                 'id': '{{id}}',
//                 'class': '{{class}}'
            // }),
            // myNav: ui.component.nav.render({
            //     properties: [
            //                   {"url": "#anchor-button", "item": 'Button'},
            //                   {"url": "#anchor-navBar", "item": 'navBar'},
            //                   {"url": "#anchor-sharepost", "item": 'Share-Post'}
            //                   ]
            // }),
            // myNav: ui.component.verticalNav.render({
            //     'bs-class': 'col-md-4',
            //     'ul-class': 'nav',
            //     'horizontal': true,
            //     'nav-item': [
            //     {label: 'UI Base', url: 'bleh'},
            //     {label: 'UI Components', url: 'moethj'},
            //     {label: 'About', url: 'moethj'}
            //     ]
            // }),
            // myInput: ui.component.input.render({
            //     // 'id': 'input__navBar',
            //     // 'class': 'col-md-8',
            //     // placeholder: 'Search for components or watever'
            // })



        });

        data = $.extend({}, params, context);


        return T.navBar(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
;var ui = ui || {};

ui.component.nav = (function($, T) {

    /**
     * nav
     * @type {Object}
     */
    var nav = {
        'properties': null,
        'class': 'nav'

};

     
    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} nav object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

Handlebars.registerPartial('link', '<a href="{{baseurl}}{{url}}">{{item}}</a>');
 
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
                    'id': '{{id}}',
                    'name': '{{name}}',
                    'value': '{{value}}',
                    'placeholder': '{{placeholder}}',
                    // 'hasLabel': '{{hasLabel}}',
                    'label': '{{label}}'
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


// ,
// 'src': 'http://i160.photobucket.com/albums/t164/mtms4/hobo.jpg',
// 'round': true,
// 'src': 'http://i160.photobucket.com/albums/t164/mtms4/hobo.jpg',
// 'small': true,
// 'src': 'http://i160.photobucket.com/albums/t164/mtms4/hobo.jpg',
// 'round': true,
// 'small': true
;var ui = ui || {};

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


        return T.sharePost(data);
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
        'class': 'text-input',
        'id': null,
        'name': null,
        'type': 'text',
        'value': null,
        'placeholder': 'placeholder',
        'hasLabel': false,
        'label': null,
        'background': null
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



