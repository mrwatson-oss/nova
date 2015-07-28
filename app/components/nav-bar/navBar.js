/**
 * ui.component.navBar
 *
 * @return returns the navBar handlebars compiled with data
 */
var ui = ui || {};

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
