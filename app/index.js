'use strict';
<<<<<<< HEAD
var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    init() {
        this.pkg = require('../package.json');

=======
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');

var P4Generator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');
>>>>>>> f9a65b9b8f1708b00a4ce217c9fbf71125a3c739
        this.config.save();

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
<<<<<<< HEAD
    }

    appFiles() {
        this.fs.copy(this.templatePath(), this.destinationPath());
        this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));
        this.fs.copy(this.templatePath('bowerrc'), this.destinationPath('.bowerrc'));
        this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
        
        this.fs.delete(this.destinationPath('jshintrc'));
        this.fs.delete(this.destinationPath('bowerrc'));
        this.fs.delete(this.destinationPath('gitignore'));
    }

    install() {
        this.installDependencies();
    }
};
=======
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
        mkdirp('app/scss/abstracts');
        this.copy('scss/abstracts/_functions.scss', 'app/scss/abstracts/_functions.scss');
        this.copy('scss/abstracts/_mixins.scss', 'app/scss/abstracts/_mixins.scss');
        this.copy('scss/abstracts/_variables.scss', 'app/scss/abstracts/_variables.scss');
        mkdirp('app/scss/base');
        this.copy('scss/base/_base.scss', 'app/scss/base/_base.scss');
        this.copy('scss/base/_fonts.scss', 'app/scss/base/_fonts.scss');
        this.copy('scss/base/_helpers.scss', 'app/scss/base/_helpers.scss');
        this.copy('scss/base/_typography.scss', 'app/scss/base/_typography.scss');
        mkdirp('app/scss/components');
        this.copy('scss/components/_button.scss', 'app/scss/components/_button.scss');
        mkdirp('app/scss/layout');
        this.copy('scss/layout/_footer.scss', 'app/scss/layout/_footer.scss');
        this.copy('scss/layout/_header.scss', 'app/scss/layout/_header.scss');
        mkdirp('app/scss/pages');
        this.copy('scss/pages/_home.scss', 'app/scss/pages/_home.scss');
        mkdirp('app/scss/themes');
        this.copy('scss/themes/_default.scss', 'app/scss/themes/_default.scss');
        mkdirp('app/scss/vendor');
        this.copy('scss/vendor/_magnific-popup.scss', 'app/scss/vendor/_magnific-popup.scss');

    },
    install: function () {
        this.installDependencies();
    }
});

module.exports = P4Generator;
>>>>>>> f9a65b9b8f1708b00a4ce217c9fbf71125a3c739
