## App folder
### Contains:

The development area of the mr.Watson UI.  
This is where components are build and styling is done.

When working in this folder always turn on `$ grunt serve` in the terminal. That way you get live-reload and dev errors (linting & rendering).
When done working always do `$ grunt build` in the terminal. This will update the `/dist/` folder with a new Nova build. (minified, tested, stripped of unnecessary code etc.)

The [index.html](../master/app/index.html) and [ui-components.html](../master/app/ui-components.html) files are the style guide's pages.
Use these to build, test and document new components.

*To do: Create a code block component to automatically display the code used to create the component next to it.*
