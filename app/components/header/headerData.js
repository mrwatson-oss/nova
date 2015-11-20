var headerData = {
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
            'dropdownItem': 'Settings',
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
