var ui = ui || {};

ui.component.button = (function($, T) {

    /**
     * button
     * @type {Object}
     */
    var button = {
        'class': 'btn',
        id: null,
        name: 'hap',
        type: null,
        value: null,
        content: null,
        action: 'clickButton()',
        icon: null
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

ui.component.header = (function($, T) {

    /**
     * header
     * @type {Object}
     */
    var params = {
        'properties': null,
        'class': 'row header',
        // logo: 'images/logo.png',
        'input': true,
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

Handlebars.registerPartial('partialNav', '<a href="{{url}}" class="{{class}}">{{item}}</a>');

        Handlebars.registerPartial({
'partialInput': ui.component.input.render({
                'id': '{{id}}',
                'class': '{{class}}'
            }),
            // myNav: ui.component.nav.render({
            //     properties: [
            //                   {"url": "#anchor-button", "item": 'Button'},
            //                   {"url": "#anchor-header", "item": 'Header'},
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
            //     // 'id': 'input__header',
            //     // 'class': 'col-md-8',
            //     // placeholder: 'Search for components or watever'
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

ui.component.input = (function($, T) {

    /**
     * input
     * @type {Object}
     */
    var input = {
        'class': null,
        id: null,
        name: null,
        type: 'text',
        value: null,
        placeholder: 'placeholder'
    };

    /**
     * render
     *
     * @todo make this method extended or mixin
     * @param {} input object with all properties
     * @return compiled handlebars template
     */
    function render(context) {

        data = $.extend({}, input, context);

        return T.input(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));



;var ui = ui || {};

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

Handlebars.registerPartial('link2', '<a href="{{url}}" class="{{class}}">{{item}}</a>');

        Handlebars.registerPartial({
            'barButton': ui.component.button.render({
                'class': '{{class}}',
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

Handlebars.registerPartial('link', '<a href="{{url}}">{{item}}</a>');
 
        data = $.extend({}, nav, context);

        return T.nav(data);
    }

    return {
        render: render
    };


}
(jQuery, ui.component.template));;var ui = ui || {};

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
