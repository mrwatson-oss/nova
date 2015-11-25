## Scripts folder
### Contains:
##### - [main.js](../app/scripts/main.js)

Used for general functions. Try to keep as minimal as possible.  
Can be used for testing purposes.

##### - [ui-components.js](../app/scripts/ui-components.js)

An automaticly created js file of all .js component files.  
Do **not** edit in this file. It gets rewritten everytime you save a Nova file.

##### - [ui-templates.js](../app/scripts/ui-templates.js)

This file is created by the Grunt Handlebars task. It contains all the UI components which can be rendered by using the namespace given in the `.hbs` 
files in `app/components/`..  
Do **not** edit in this file. It gets rewritten everytime you save a Nova file.


If there's a bug or merge conflict in either `ui-components.js` or `ui-templates.js` it's to be fixed in the `app/components/` files.

