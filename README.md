#Mr.Watson | Nova (v0.1.0)
Front-end framework & style guide for [www.mrwatson.com](http://www.mrwatson.com)  
*To do: link to live style guide*

## Dependencies

- [Node](https://nodejs.org/download/)
- [Bower](http://bower.io/)
```
$ npm install -g bower
```
- [Yeoman](http://yeoman.io/)
```
$ npm install -g yo
```
- [Sass](http://sass-lang.com/install/)

## Installing

```
$ git clone https://github.com/mrwatson-oss/nova.git
```

```
$ npm install
```

```
$ bower install
```

## Commands

```
$ grunt serve
```

```
$ grunt build
```


#### Create new components:

- Make sure `grunt serve` is running
- Open the project in your favorite editor and navigate to `app/components`
- Duplicate a component folder
- Change all file names
- Change component.js content names to new component name (*cmd ^ F => oldComponentName = newComponentName*)
- Add components Sass file to [styles/main.scss](../master/app/styles/main.scss)
- Add component to [ui-components.html](../master/app/ui-components.html) and document it.
- `$ grunt build`
- `$ git pull`
- `$ git add .`
- `$ git commit -m "your-commit-message"`
- `$ git push`

#### Add new bower packages
- Make sure `grunt serve` is running  
- Depending on the package:
```
$ bower install [package-name] 
```
```
$ bower install [package-name] --save
```
```
$ bower install [package-name] --save-dev
```
More info on bower commands [here](http://bower.io/docs/api/#install).  

Grunt should automatically wiredep the right files to the index.html file.  
If it doesn't, you can do it yourself via the `$ grunt wiredep` command.  
If that doesn't work the package is not installed properly (*check if it's there in the `bower_components` folder and the `bower.json` file.*)

*To do: Make wiredep work for ui-components.html too*


## License
The [MIT](http://opensource.org/licenses/MIT "MIT") License (MIT).
