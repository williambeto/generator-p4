'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the delightful ${chalk.red('generator-p4')} generator!`));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name:',
        store: true,
        default: this.appname // Default to current folder name
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.answers = props;
    });
  }

  writing() {
    //
    this.fs.copy(this.templatePath(), this.destinationPath());
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('babelrc'), this.destinationPath('.babelrc'));
    this.fs.copy(this.templatePath('modernizrrc'), this.destinationPath('.modernizrrc'));

    this.fs.copyTpl(
      this.templatePath('_config.yml'),
      this.destinationPath('config.yml'),
      { name: this.appname }
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      { name: this.answers.name }
    );

    this.fs.delete(this.destinationPath('gitignore'));
    this.fs.delete(this.destinationPath('babelrc'));
    this.fs.delete(this.destinationPath('modernizrrc'));
    this.fs.delete(this.destinationPath('_config.yml'));
    this.fs.delete(this.destinationPath('_package.json'));
  }

  install() {
    this.npmInstall();
  }
};
