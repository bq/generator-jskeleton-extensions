/* global require, module,  */
'use strict';

var generator = require('yeoman-generator');
var chalk = require('chalk');
var path = require('path');
var yosay = require('yosay');
var _ = require('underscore.string');

var JskExtension = generator.Base.extend({

  init: function(){
    this.argument('appname', { type: String, required: true });
    this.appName = 'jskeleton-'+_.camelize(this.appname);
    this.fileName = this.appname;

    this.settings = {
      appName : this.fileName,
      name : this.appName
    };
  },
  install: function(){
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: true
    });
  },
  end: function(){
    this.log(yosay(chalk.green(this.appName) + ' has been built! :) ' + chalk.red('Bye!')));
  }
});


JskExtension.prototype.welcome = function welcome(){
  if (!this.options['skip-welcome-message']) {
    this.log(yosay('Create another ' + chalk.bgBlue('JSkeleton Extension')));
  }
};

JskExtension.prototype.scaffolding = function welcome() { 
  this.directory('src');
  this.directory('doc');
  this.directory('test');
};

JskExtension.prototype.setupEnv = function welcome(){
  this.copy('.jshintrc');
  this.copy('.jscsrc');
  this.copy('.editorconfig');
  this.copy('.npmrc');
  this.copy('gitignore', '.gitignore');
};

JskExtension.prototype.packageFiles = function packageFiles(){
  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.template('_bower.json', 'bower.json', this.settings);
  this.template('_package.json', 'package.json', this.settings);
  this.template('_extension.js','src/'+this.settings.appName+'.js',this.settings);
};

JskExtension.prototype._injectDependencies = function _injectDependencies() {
  if(this.options['skip-install']){
    this.log(
      'After running `npm install & bower install`, inject your front end dependencies' +
      '\ninto your source code by running:' +
      '\n' +
      '\n' + chalk.yellow.bold('grunt wiredep')
    );

  }else{
    this.spawnCommand('grunt', ['test']);
  }
};

module.exports = JskExtension;
