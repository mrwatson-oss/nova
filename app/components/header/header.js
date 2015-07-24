/**
 * ui.component.header
 *
 * @return returns the header handlebars compiled with data
 */
var ui = ui || {};

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
