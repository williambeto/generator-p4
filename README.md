# generator-p4 [![NPM version][npm-image]][npm-url]
> Yeoman generator for Foundation 6 + Sass + Gulp + Webpack + Composer + PHP

## Installation

First, install [Yeoman](http://yeoman.io) ,  [Gulp](https://gulpjs.com/) and generator-p4 using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/) and a [PHP Server](https://www.apachefriends.org/)).

```bash
npm install -g yo
npm install gulp-cli -g
npm install -g generator-p4
```

Then generate your new project:
navigate to your PHP server folder and create a projetc folder
```bash
mkdir project
cd project
yo p4
```
### Get started
```bash
npm start
```
### Compile assets for production
When building for production, the CSS and JS will be minified. To minify the assets in your `/dist` folder, run
```bash
npm run build
```
#### To create a .zip file of your project, run:
```
npm run package
```
## Local Development
Choose one of the following setups for local development:
* [MAMP](https://www.mamp.info/en/) (macOS)
* [XAMPP](https://www.apachefriends.org) (Windows)
* [WAMP](http://www.wampserver.com/en/download-wampserver-64bits/) (Windows)
* [LAMP](https://www.linux.com/learn/easy-lamp-server-installation) (Linux)

## License

MIT © [José Willams](https://josewillams.com/)

[npm-image]: https://badge.fury.io/js/generator-p4.svg
[npm-url]: https://npmjs.org/package/generator-p4