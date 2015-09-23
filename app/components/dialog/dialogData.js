var dialogData = {
    'dialogData1': {
        'angry': 'true',
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
