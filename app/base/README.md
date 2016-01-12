## Base folder
### Contains:
##### - [_color-palette.scss](../base/_color-palette.scss)

Used to visualize the Mr.Watson color palettes and UI colors.  
*To do: Automate this proces.*

##### - [_mixins.scss](../base/_mixins.scss)

Sass mixins used by components.  
When adding new mixins do so at the right (alphabetical) order for categories.
More info about creating [Sass mixins](http://sass-lang.com/guide)

##### - [_typography.scss](../base/_typography.scss)

Used to declare the font families/colors/sizes and whatnot. Don't declare variables here. Only do that in _variables.scss.

##### - [_variables.scss](../base/_variables.scss)

**Very** important file.  
Only edit this file with grunt serve running ($ grunt serve). This way you'll get errors so you will know where the variable are used.
Use the BEM naming technique.   
Only declare variables in *this* file, not in any others.

hi how are you?
