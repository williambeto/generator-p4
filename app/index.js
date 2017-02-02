'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    init() {
        this.pkg = require('../package.json');

        this.config.save();

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
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