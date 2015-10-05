var formData = {
    'formData1': {
        'id': 'style-guide__form',
        'method': 'get',
        inputs: [{
            'required': true,
            'inputId': 'userPassword',
            'label': 'Password',
            'type': 'password',
            'maxlength': '12',
            'minlength': '5'
        }, {
            'required': true,
            'inputId': 'firstName',
            'label': 'First name',
            'type': 'text',
            'minlength': '2'
        }],
        'selects': [{
            'required': true,
            'selectId': 'age',
            'options': [{
                'value': 'What\'s your age?',
                'title': true
            }, {
                'value': '11'
            }, {
                'value': '12'
            }, {
                'value': '15'
            }]
        }, {
            'selectId': 'sex',
            'required': true,
            'options': [{
                'value': 'What\'s your gender?',
                'title': true
            }, {
                'value': 'man'
            }, {
                'value': 'female'
            }, {
                'value': 'who cares'
            }]
        }],
        'textareas': [{
            'required': true,
            'textareaId': 'AboutMe',
            'label': 'What are you about?'
        }],
        'cancel': true,
        'buttons': [{
            'class': 'solid-button--happy',
            'content': 'Doe doe'
        }]
    }
}
