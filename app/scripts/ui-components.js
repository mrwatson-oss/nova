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
(jQuery, ui.component.template));var alertData = {
    'alertData1': {
        'icon': 'icon-user-award',
        'title': 'YES!',
        'class': 'solid-alert--happy',
        'message': 'You did something right',
        'button': [{
            'icon': 'icon-system-close',
            'class': 'naked-button--icon-only--happy'
        }]
    },
    'alertData2': {
        'icon': 'icon-user-award',
        'title': 'YES!',
        'class': 'naked-alert--happy',
        'message': 'You did something right',
        'button': [{
            'icon': 'icon-system-close',
            'class': 'naked-button--icon-only--happy'
        }]
    },
    'alertData3': {
        'icon': 'icon-solid-flag',
        'title': 'Heads up!',
        'class': 'solid-alert--strict',
        'message': 'No employees yet.',
        'link': 'Add one now?',
        'href': '#',
        'button': [{
            'icon': 'icon-system-close',
            'class': 'naked-button--icon-only--strict'
        }]
    },
    'alertData4': {
        'icon': 'icon-solid-flag',
        'title': 'Heads up!',
        'class': 'naked-alert--strict',
        'message': 'No employees yet.',
        'link': 'Add one now?',
        'href': '#',
        'button': [{
            'icon': 'icon-system-close',
            'class': 'naked-button--icon-only--strict'
        }]
    },
    'alertData5': {
        'icon': 'icon-solid-fire',
        'title': 'Oops!',
        'class': 'solid-alert--angry',
        'message': 'That e-mail addrhat e-mail address already exists.ess already exhat e-mail address already exists.ists.',
        'link': 'Forgot your password?',
        'href': '#',
        'button': [{
            'icon': 'icon-system-close',
            'class': 'naked-button--icon-only--angry'
        }]
    },
    'alertData6': {
        'icon': 'icon-solid-fire',
        'title': 'Oops!',
        'class': 'naked-alert--angry',
        'message': 'That e-mail address already exists.',
        'link': 'Forgot your password?',
        'href': '#',
        'button': [{
            'icon': 'icon-system-close',
            'class': 'naked-button--icon-only--angry'
        }]
    }
}
;var ui = ui || {};

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
;var appbarData = {
    'appbarData1': {
        'navItems': [{
            'url': '#',
            'item': 'Past events',
            'class': 'nav--active divider'
        }, {
            'url': 'ui-components.html',
            'item': 'Upcoming events'
        }],
        'button': [{
            'class': 'solid-button--strict pull-right',
            'content': 'Add new event'
        }]
    }
}
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
(jQuery, ui.component.template));
;var avatarSrc;
var verticalImg;
function avatarDataImg(){
    var nr1 = Math.floor(Math.random() * 200);
    var nr2 = Math.floor(Math.random() * 200);
    var nr3 = Math.floor(Math.random() * 1000);
    var nr4 = Math.floor(Math.random() * 1000);
    var nr5 = Math.floor(Math.random() * 2000);
    var nr6 = Math.floor(Math.random() * 2000);
    var theNumbers = [nr1, nr2, nr3, nr4, nr5, nr6];
    var theHeightNumber = Math.floor(Math.random() * 5);
    var theWidthNumber = Math.floor(Math.random() * 5);
    var theHeight = theNumbers[theHeightNumber];
    var theWidth = theNumbers[theWidthNumber];
    if (theHeight>theWidth) {
      verticalImg = true;
    } else {
      verticalImg = false;
    }
    avatarSrc = 'http://lorempixel.com/' + theWidth + '/' + theHeight;
}
avatarDataImg();
function watwat () {
   avatarDataImg();
  //  console.log(verticalImg);
   if (verticalImg) {
     $('.avatar').children('img').width('100%').height('auto');
   } else {
     $('.avatar').children('img').height('100%').width('auto');
   }
   $('.avatar').children('img').attr('src', avatarSrc);

}
var avatarData = {
    'avatarData1': {
        'avatar': {
            'src': avatarSrc
        }
    },
    'avatarData2': {
        'avatar': {
            'src': avatarSrc,
            'round': true
        }
    },
    'avatarData3': {
        'avatar': {
            'src': avatarSrc,
            'small': true
        }
    },
    'avatarData4': {
        'avatar': {
            'src': avatarSrc,
            'round': true,
            'small': true
        }
    },
    'avatarDataRandom': {
      'icon': 'icon-system-refresh',
      'class': 'naked-button--neutral',
      'action': 'watwat()'
    }
}
;var ui = ui || {};

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

    //action to be executed on button click, scrolls the page back to the top.
    scrollToTop = function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
        console.log("why no scroll");
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
            'buttonLoader': true
        }, {
            'content': 'Like',
            'class': 'naked-button--happy',
            'buttonLoader': true
        }, {
            'content': 'Back',
            'class': 'naked-button--strict',
            'buttonLoader': true
        }, {
            'content': 'Destroy',
            'class': 'naked-button--angry',
            'buttonLoader': true
        }, {
            'content': 'Menu',
            'class': 'naked-button--neutral',
            'icon': 'icon-system-menu',
            'buttonLoader': true
        }, {
            'icon': 'icon-solid-camera',
            'class': 'naked-button--neutral',
            'buttonLoader': true
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
            'class': 'solid-button--neutral',
            'buttonLoader': true
        }, {
            'content': 'Sha',
            'class': 'solid-button--happy',
            'buttonLoader': true
        }, {
            'content': 'Check availability',
            'class': 'solid-button--strict',
            'buttonLoader': true
        }, {
            'content': 'Delete user',
            'class': 'solid-button--angry',
            'buttonLoader': true
        }, {
            'content': 'Settings',
            'icon': 'icon-solid-settings',
            'buttonLoader': true,
            'class': 'solid-button--neutral'
        }, {
            'icon': 'icon-user-arrow-right',
            'class': 'solid-button--strict',
            'buttonLoader': true
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
    },
    'scrollToTop': {
        'icon': 'icon-system-up-open',
        'class': 'solid-button--neutral button--scroll-to-top',
        'action': 'scrollToTop()'
    }
}
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
;var composerData = {
    'composerData1': {
        'avatar': {
            'src': 'http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NTU2MzE2MDcwNjQzMjEx.jpg',
            'small': true
        },
        'input': {
            'placeholder': 'Share your thoughts'
        },
        'buttons': [{
            'class': 'solid-button--happy pull-right',
            'content': 'Share post',
            'action': 'alert("it works")'
        }]
    }
};var ui = ui || {};

ui.component.cropper = (function($, T) {

    /**
     * cropper
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
     * @param {} cropper object with all properties
     * @return compiled handlebars template
     */
    function render(context) {


        data = $.extend({}, params, context);


        return T.cropper(data);
    }

    return {
        render: render
    };

}(jQuery, ui.component.template));
;var cropperData = {
    'cropperData1': {
        'imageSrc': '/images/frog.jpg',
        'cropperLabel': 'Profile picture',
        'uploadNewButtonText': 'Upload new',
        'CropImageButtonText': 'Crop image',
        'cancelCropButtonText': 'Cancel',
        'saveCropButtonText': 'Save',
        'fileName': 'image',
        'formId': 'userSettingsForm',
        'community': false
    },
    'cropperData2': {
        'imageSrc': '/images/logo_transp.png',
        'cropperLabel': 'Community image',
        'uploadNewButtonText': 'Upload new',
        'CropImageButtonText': 'Crop image',
        'cancelCropButtonText': 'Cancel',
        'saveCropButtonText': 'Save',
        'fileName': 'image',
        'formId': 'userSettingsForm',
        'community': true
    }
}
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
(jQuery, ui.component.template));var dialogData = {
    'dialogData1': {
        'angry': 'true',
        'styleguide': 'true',
        'title': 'Deleting this is permanent.',
        'message': 'Are you sure you want to delete your account?',
        'button': [{
            'content': 'Delete account',
            'action': 'alert("Alrighty deleted")'
        }, {
            'content': 'Cancel',
            'action': 'alert("Alrighty canceled")'
        }]
    },
    'dialogData2': {
        'title': 'Do you wish to create a new community?',
        'styleguide': 'true',
        'message': 'You should only create a new community if you are setting one up in a new coworking space.',
        'button': [{
            'content': 'Create community',
            'action': 'alert("Alrighty created")'
        }, {
            'content': 'Cancel',
            'action': 'alert("Alrighty canceled")'
        }]
    }
}
;var ui = ui || {};

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
                return true;
            }
        });
        $('li.dropdown').on('click', function(e) {


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
;var dropdownData = {
    'dropdownData1': {
      'dropdownItem': 'My settings',
        'icon': 'icon-naked-bell',
        'badge': 'true',
        'dropdownOptions': [{
            'optionCat': true,
            'option': 'Category'            
        }, {
            'option': 'Profile',
            'href': '#'
        }, {
            'option': 'Privacy',
            'href': '#'
        }, {
            'option': 'Settings',
            'href': '#',
            'class': 'divider'
        }, {
            'option': 'Log out',
            'href': '#'
        }]
    }
}
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
(jQuery, ui.component.template));;var eventpostitData = {
    'eventpostitData1': {
        'eventpostitMeta': {
            'avatar': {
                'small': true,
                'src': 'http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NTU2MzE2MDcwNjQzMjEx.jpg'
            },
            'author': 'Ringo Starr',
            'timestamp': '11 aug 2015'
        },
        'eventHeaderImage': {
            'src': 'http://thepinkpuck.com/wp-content/uploads/2015/05/Duck-Hunt.jpeg',
            'href': '#'
        },
        'eventpostitContent': {
            'eventTitle': 'Duckhunt party',
            'href': '#',
            'eventLocation': 'Industriegebouw 3e verdieping',
            'eventDate': '10 aug 2015 - 15:00'
        },
        'eventpostitActions': [{
            'class': 'naked-button--happy hover',
            'content': 'Like',
            'icon': 'icon-solid-like'
        }, {
            'class': 'naked-button--happy hover',
            'content': 'Comments',
            'icon': 'icon-naked-bubble',
            'action': '$(".post-it__comments").slideToggle("slow");'
        }],
        'eventpostitLikes': {
            'number': '2'
        },

        'commentInputField': {
            'avatar': {
                'src': 'http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NTU2MzE2MDcwNjQzMjEx.jpg',
                'small': true
            },
            'placeholder': 'Add a comment',
            'content': 'Comment'
        }
    }
}
;var ui = ui || {};

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
        'icon': null,
        'rows': '5'
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
;var formData = {
    'formData1': {
        'id': 'style-guide__form',
        'method': 'get',
        'formTitle': 'Form Title',
        inputs: [{
            'required': true,
            'inputId': 'firstPassword',
            'label': 'Password',
            'type': 'password',
            'maxlength': '12',
            'minlength': '5'
        }, {
            'required': true,
            'inputId': 'password',
            'label': 'Password',
            'type': 'password',
            'maxlength': '12',
            'minlength': '5'
        }, {
            'required': false,
            'inputId': 'firstName',
            'placeholder': 'wacgt',
            'label': 'First name',
            'type': 'text',
            'minlength': '2'
        }],
        'selects': [{
            'required': false,
            'selectId': 'age',
            'label': 'What\'s your age?',
            'options': [{
                'value': 'null',
                'option': ''
            }, {
                'option': '0-19',
                'value': '11'
            }, {
                'option': '20-49',
                'value': '12'
            }, {
                'option': '50+',
                'value': '15'
            }]
        }, {
            'selectId': 'sex',
            'label': 'What\'s your gender?',
            'required': true,
            'options': [{
                'value': 'null',
                'option': '',
                'title': true
            }, {
                'value': '1',
                'option': 'man'
            }, {
                'value': '0',
                'option': 'female'
            }, {
                'value': 'who cares',
                'option': 'who cares'
            }],
            'formButton': 'Or add another gender',
            'href': '#'
        }],
        'textareas': [{
            'required': true,
            'textareaId': 'AboutMe',
            'rows': '5',
            'label': 'What are you about?'
        }],
        'cancel': true,
        'buttons': [{
            'class': 'solid-button--happy',
            'content': 'Doe doe'
        }]
    }
}
;var ui = ui || {};

ui.component.header = (function($, T) {

    /**
     * header
     * @type {Object}
     */
    var params = {
        'navItems': null,
        'dropdown': null,
        'logo': null,
        'navIcons': null
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
;var headerData = {
    'headerData1': {
        'logo': {
            'src': '/images/logo_transp.png'
        },
        'input': {
            'placeholder': 'Seach for colors or whatever'
        },
        'navItems': [{
            'url': '#',
            'item': 'UI base',
            'class': 'nav--active divider'
        }, {
            'url': '/ui-components.html',
            'item': 'UI components'
        }]
    },
    'headerData2': {
        'logo': {
            'src': '/images/logo_transp.png'
        },
        'input': {
            'placeholder': 'Seach for components or whatever'
        },
        'navItems': [{
            'url': '/',
            'item': 'UI base',
            'class': 'divider'
        }, {

            'url': '#',
            'item': 'UI components',
            'class': 'nav--active'
        }]
    },
    'headerData3': {
        'settings': true,
        'styleguide': true,
        'dropdown': [{
            'dropdownItem': '1e',
            'icon': 'icon-system-down-open',
            'dropdownOptions': [{
                'option': 'Profile',
                'href': '#'
            }, {
                'option': 'Company',
                'href': '#',
                'class': 'divider'
            }, {
                'option': 'Log out',
                'href': '#'
            }]
        }]
    },
    'headerData4': {
        'settings': true,
        'styleguide': true,
        'headerMobile': true,
        'headerMobileNavTitle': 'Mobile user settings',
        'dropdown': [{
            'icon': 'icon-solid-menu',
            // 'dropdownItem': 'Settings',
            'dropdownOptions': [{
                'optionCat': true,
                'option': 'User settings'
            }, {
                'option': 'Profile',
                'href': '#'
            },{
                'option': 'Company',
                'href': '#',
                'class': 'divider'
            }, {
                'option': 'Log out',
                'href': '#'
            }]
        }]
    },
    'headerData5': {
        'styleguide': true,
        'logo': {
            'src': '/images/logo_transp.png'
        },
        'dropdown': [{
            'icon': 'icon-naked-settings',
            // 'dropdownItem': 'Settings',
            'dropdownOptions': [{
                'option': 'Profile',
                'href': '#'
            }, {
                'option': 'Company',
                'href': '#',
                'class': 'divider'
            }, {
                'option': 'Log out',
                'href': '#'
            }]
        }, {
            'icon': 'icon-naked-bell',
            'badge': true,
            // 'dropdownItem': 'Notifs',
            'dropdownOptions': [{
                'option': 'You rock',
                'href': '#',
                'class': 'divider'
            }, {
                'option': 'Freddie invited you to lunch party',
                'href': '#',
                'class': 'divider'
            }, {
                'option': 'Hans commented on your post-it',
                'href': '#',
                'class': 'divider'
            }]
        }]
      }
}
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
(jQuery, ui.component.template));;var imageData = {
    'imageData1': {
        'modal': true,
        'src': 'https://pbs.twimg.com/profile_images/2112311889/ostrich_head.jpg'
    },
    'imageData2': {
        'src': 'http://www.apnatimepass.com/dumb-and-dumber-to-movie/dumb-and-dumber-to-movie-still-10.jpg',
        'cover': true,
        'modal': true
    }
}
;var ui = ui || {};

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
(jQuery, ui.component.template));var modalData = {
    'modalData1': {
        'title': 'Invite your friend',
        'close': true,
        'body': 'Modal body.. Now find out the different possibilities',
        'button': [{
            'class': 'solid-button--happy',
            'content': 'Send Invitation',
            'action': 'alert("Alrighty sent")'
        }, {
            'class': 'solid-button--neutral',
            'content': 'Cancel',
            'action': 'alert("Alrighty canceled")'
        }]
    },
}
;var ui = ui || {};

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
(jQuery, ui.component.template));;var navData = {
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
            'url': '#anchor-cropper',
            'item': 'Cropper',
            'icon': 'icon-naked-crop blue'
        }, {
            'url': '#anchor-form',
            'item': 'Form',
            'icon': 'icon-app-naked-notebook blue'
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
            'icon': 'icon-app-naked-pen blue'
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
            'icon': 'icon-app-naked-filter blue'
        }]
    },
    'navData4': {
        'communitySwitch': true,
        'navCommunities': [{
            'src': 'http://erfgoedstem.nl/wp-content/uploads/2012/07/Industriegebouw-Goudsesingel_1.jpg',
            'name': 'Het Industriegeb..',
            'icon': 'icon-system-down-open'
        }],
        'navItems': [{
            'url': '#',
            'item': 'Dashboard'
        }, {
            'url': '#',
            'item': 'People'
        }, {
            'url': '#',
            'item': 'Companies'
        }, {
            'url': '#',
            'item': 'Messages'
        }, {
            'url': '#',
            'item': 'Meet-ups'
        }]
    },
    'navData5': {
        'title': true,
        'navTitleIcon': 'icon-solid-settings',
        'navTitle': 'Settings',
        'button': true,
        'class': 'solid-button--strict',
        'content': 'Dashboard',
        'subTitle': true,
        'category': 'Community',
        'name': 'Katshoek',
        'navItems': [{
            'url': '#',
            'item': 'Profile'
        }, {
            'url': '#2',
            'item': 'People'
        }]
    },
    'navData6': {
        'title': true,
        'button': true,
        'class': 'naked-button--strict hover',
        'content': 'Add Group',
        'navTitle': 'Groups',
        'navItems': [{
            'url': '#',
            'item': 'Developers',
            'icon': 'icon-app-solid-server grey'
        }, {
            'url': '#',
            'item': 'Horse whisperers',
            'icon': 'icon-app-solid-leaf green'
        }, {
            'url': '#',
            'item': 'Cool Cats',
            'icon': 'icon-app-solid-necktie blue'
        }, {
            'url': '#',
            'item': 'BBQ',
            'icon': 'icon-app-solid-burger red'
        }],
        'navActionBar': true,
        'navActionBarButtons': [{
            'url': '#',
            'class': 'naked-button--strict',
            'content': 'See all your groups'
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
                'PartialButton': '<button {{#if disabled}}disabled{{/if}} class="btn {{class}} {{#if icon}}icon-only{{/if}}" id="{{id}}" name="{{name}}" type="{{type}}" value="{{value}}" onclick="{{#if buttonLoader}}loadingButton(this);{{/if}} {{action}}" {{#if cancel}} formnovalidate {{/if}}>{{#if buttonLoader}} <div class="btn__loading-container"><span class="btn__loading-circle">&nbsp;</span><span class="btn__loading-circle">&nbsp;</span><span class="btn__loading-circle">&nbsp;</span><span class="btn__loading-circle">&nbsp;</span></div>{{/if}} {{#if iconOnly}}{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}{{else}}{{#if icon}}<i class="icon {{icon}}"></i> {{/if}}{{#if content}} {{content}} {{/if}} {{/if}}</button>',
                'PartialDropdown': '<li class="dropdown" id="dropdown"><span class="dropdown-item"><h4>{{{dropdownItem}}}</h4></span>{{#if icon}}<i class="{{icon}}"></i>{{/if}}{{#if badge}}<span class="dropdown-badge">{{dropdownOptions.length}}</span>{{/if}}<ul class="nav drop-nav">{{#each dropdownOptions}}<li>{{#if optionCat}}<div class="option-catagory">{{option}}</div>{{else}}<a id="{{id}}"class="{{class}}"href="{{href}}">{{option}}</a>{{/if}}</li>{{/each}}</ul><script>{{script}}</script></li>',
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
                'PartialIcon': '<i class="{{icon}} {{class}}"></i>{{#if label}}<pre class="language-markup"><code class="language-markup">{{icon}}</code></pre>{{/if}}',
                'PartialCoverImage': ui.component.image.render({
                    'cover': true,
                    'src': '{{{src}}}',
                    'alt': '{{alt}}'
                }),
                'PartialLoading': '<div class="btn__loader"><div class="btn--loading"><div class="btn__loading-circle">&nbsp;</div><div class="btn__loading-circle">&nbsp;</div><div class="btn__loading-circle">&nbsp;</div><div class="btn__loading-circle">&nbsp;</div></div></div>',
                'PartialCommunitySwitch': '<div class="community-switch" style="background: no-repeat center url({{src}})"><span class="community-switch-name">{{name}}{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}</span></div>',
                'PartialNavItem': '<li><a class="{{class}} "href="{{baseurl}}{{url}}">{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}{{{item}}}</a></li>'
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
(jQuery, ui.component.template));;var postitactionbarData = {
    'postitactionbarData1': {
        'postitActions': [{
            'class': 'naked-button--happy',
            'content': 'Like',
            'icon': 'icon-naked-like'
        }, {
            'class': 'naked-button--happy',
            'content': '2 comments',
            'icon': 'icon-naked-bubble',
            'action': '$(".post-it__comments").slideToggle();'
        }],
        'postitLikes': {
            'number': '6'
        },
        'hiddenComments': true,
        'comments': [{
            'author': 'Dr. Strangelove',
            'timestamp': '14 aug 2015',
            'avatar': {
                'src': 'https://www.modernartoxford.org.uk/wp-content/uploads/2015/07/DrStrangelove060Pyxurz1.jpg',
                'small': true
            },
            'content': 'Wat the Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quis ea nisi, expedita aliquam quas mollitia! Eos repudiandae vitae dolor saepe et tempore. Voluptas ea, voluptatum ad aut, impedit laudantium.?'
        }, {
            'author': 'Dr. S',
            'timestamp': '12 aug 2015',
            'avatar': {
                'src': 'https://www.modernartoxford.org.uk/wp-content/uploads/2015/07/DrStrangelove060Pyxurz1.jpg',
                'small': true
            },
            'content': 'Wit the Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quis ea nisi, expedita aliquam quas mollitia! Eos repudiandae vitae dolor saepe et tempore. Voluptas ea, voluptatum ad aut, impedit laudantium.?'
        }],
        'commentInputField': {
            'avatar': {
                'src': 'http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NTU2MzE2MDcwNjQzMjEx.jpg',
                'small': true
            },
            'placeholder': 'Add a comment',
            'content': 'Comment'
        }
    }
}
;var ui = ui || {};

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



;var selectData = {
    'selectData1': {
        'options': [{
            'value': 'Select your gender',
            'title': true
        }, {
            'value': 'Male'
        }, {
            'value': 'Female'
        }, {
            'value': 'Other'
        }]
    }
}
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



;var textareaData = {
    'textareaData1': {
        'placeholder': 'Tell people what you\'re all about',
        'hasLabel': true
    }
}
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



;var textinputData = {
    'textinputData1': {
        'id': 'form1',
        'inputId': 'password',
        'hasLabel': true,
        'label': 'Password',
        'type': 'password',
        'maxlength': '12',
        'minlength': '5'
    },
    'textinputData2': {
        'id': "great",
        'hasLabel': true,
        'label': 'First name',
        'inputId': 'name',
        'minlength': '3'
    },
    'textinputData3': {
        'options': [{
            'value': 'Select your gender',
            'title': true
        }, {
            'value': 'Male'
        }, {
            'value': 'Female'
        }, {
            'value': 'Other'
        }]
    }
}
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
;var userpostitData = {
    'userpostitData1': {
        'userpostitMeta': {
            'avatar': {
                'src': 'http://i.ytimg.com/vi/N1KvgtEnABY/hqdefault.jpg'
            },
            'author': 'Sgt. Sanders',
            'timestamp': '10 aug 2015'
        },
        'userpostitContent': {
            'content': 'Om deze grijze maandagmiddag wat zonneschijn te geven, staat er op de 2e verdieping op de picknicktafels allerlei lekkers van Marqt wat anders weggegooid zou worden. Ik zou zeggen; sla je slag en geniet :-)'
        },
        'userpostitActionBlock': {
            'postitActions': [{
                'class': 'naked-button--happy hover',
                'content': 'Like',
                'icon': 'icon-solid-like'
            }, {
                'class': 'naked-button--happy hover',
                'content': 'Be the first to comment',
                'icon': 'icon-naked-bubble'
            }],
            'postitLikes': {
                'number': '17'
            },
            'commentInputField': {
                'avatar': {
                    'src': 'http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NTU2MzE2MDcwNjQzMjEx.jpg',
                    'small': true
                },
                'placeholder': 'Add a comment',
                'content': 'Comment'
            }
        }
    },
    'userpostitData2': {
        'userpostitMeta': {
            'avatar': {
                'src': 'https://www.modernartoxford.org.uk/wp-content/uploads/2015/07/DrStrangelove060Pyxurz1.jpg'
            },
            'author': 'Dr. Strangelove',
            'timestamp': '10 aug 2015'
        },
        'userpostitContent': {
            'content': 'Vanochtend kwam ik aan en was het luik niet naar beneden. Allemaal leuk en aardig, maar er staat te veel apparatuur op deze verdieping om hem open te laten. DUS LUIK DICHT!'
        },
        'userpostitActionBlock': {
            'postitActions': [{
                'class': 'naked-button--happy',
                'content': 'Like',
                'icon': 'icon-naked-like'
            }, {
                'class': 'naked-button--happy',
                'content': '2 comments',
                'icon': 'icon-naked-bubble',
                'action': '$(".post-it__comments").slideToggle("slow");'
            }],
            'postitLikes': {
                'number': '6'
            },
            'comments': [{
                'author': 'Dr. Strangelove',
                'timestamp': '14 aug 2015',
                'avatar': {
                    'src': 'https://www.modernartoxford.org.uk/wp-content/uploads/2015/07/DrStrangelove060Pyxurz1.jpg',
                    'small': true
                },
                'content': 'Wat the Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quis ea nisi, expedita aliquam quas mollitia! Eos repudiandae vitae dolor saepe et tempore. Voluptas ea, voluptatum ad aut, impedit laudantium.?'
            }, {
                'author': 'Dr. S',
                'timestamp': '12 aug 2015',
                'avatar': {
                    'src': 'https://www.modernartoxford.org.uk/wp-content/uploads/2015/07/DrStrangelove060Pyxurz1.jpg',
                    'small': true
                },
                'content': 'Wit the Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quis ea nisi, expedita aliquam quas mollitia! Eos repudiandae vitae dolor saepe et tempore. Voluptas ea, voluptatum ad aut, impedit laudantium.?'
            }],
            'commentInputField': {
                'avatar': {
                    'src': 'http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NTU2MzE2MDcwNjQzMjEx.jpg',
                    'small': true
                },
                'placeholder': 'Add a comment',
                'content': 'Comment'
            }
        }
    }
}
