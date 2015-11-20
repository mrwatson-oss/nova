var formData = {
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
            'buttonLoader': true,
            'content': 'Doe doe'
        }]
    }
}
