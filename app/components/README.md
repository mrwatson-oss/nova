## Components folder
### Contains:
##### - All components that make up the mr.Watson UI

All components exist out of 4 files.
- _component.scss
- component.hbs
- component.js
- componentData.js (for the style guide data)

Note that when creating a new component you have to add the .scss file als a Sass partial to
[styles/main.scss](../styles/main.scss) under the /* Components */ category

##### - Partials folder

The partial folder looks just like the other components but only uses the [partials.js file](../components/partials/partials.js) which contains all partials used by components.
The partials file then get's rendered first thing as a component so that other components can use the partials.  
*To do: Change this system up a bit so the partials get pre-rendered in a less "hackey" way*
