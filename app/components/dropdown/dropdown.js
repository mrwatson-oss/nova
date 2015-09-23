/**
 * ui.component.dropdown
 *
 * @return returns the dropdown handlebars compiled with data
 */
var ui = ui || {};

ui.component.dropdown = (function($, T) {

    /**
     * dropdown
     * @type {Object}
     */
    var dropdown = {
        'class': null,
        'script': 'dropDown()',
        'dropdownItem': null
    };

    dropDown = function() {
        $('html').on('click', function(e) {
            if (!$(e.target).closest(".dropdown").length) {
                $('.drop-nav').slideUp(50);
                $('li.dropdown').removeClass('dropdown--active');
            } else {
                return false;
            }
        });
        $('li.dropdown').on('click', function() {
           // console.log($('li.dropdown').children('span.dropdown-badge').length);
           //  $('li.dropdown').children('span.dropdown-badge').html($('li.dropdown').children('span.dropdown-badge').length);
            $(this).addClass('dropdown--active');
            if ($(this).children('.drop-nav').is(':visible')) {
                $(this).removeClass('dropdown--active');
                $('.drop-nav').slideUp(100);
            } else {
                $('.drop-nav').hide();
                $('li.dropdown').removeClass('dropdown--active');
                $(this).addClass('dropdown--active');
                $(this).children('.drop-nav').slideDown(100);
            }
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
