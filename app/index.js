'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');

var P4Generator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');
        this.config.save();

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },
    appFiles: function () {
        mkdirp('dist');
        mkdirp('app');
        this.template('bower.json', 'bower.json');
        this.template('package.json', 'package.json');
        this.template('Gruntfile.js', 'Gruntfile.js');
        this.copy('.jshintrc', '.jshintrc');
        this.copy('.bowerrc', '.bowerrc');
        this.copy('gitignore', '.gitignore');
        this.copy('README.md', 'README.md');
        this.template('index.html', 'app/index.html');
        mkdirp('app/fonts');
        mkdirp('app/images');
        mkdirp('app/js');
        mkdirp('app/css');
        mkdirp('app/scss');
        this.copy('scss/app.scss', 'app/scss/app.scss');
        this.copy('scss/_settings.scss', 'app/scss/_settings.scss');
        this.template('scss/_appstyles.scss', 'app/scss/_appstyles.scss');
        this.copy('js/app.js', 'app/js/app.js');
    },
    install: function () {
        this.installDependencies();
    }
});

module.exports = P4Generator;