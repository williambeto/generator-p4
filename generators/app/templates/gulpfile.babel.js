'use strict';

import plugins from 'gulp-load-plugins';
import yargs from 'yargs';
import browser from 'browser-sync';
import gulp from 'gulp';
import rimraf from 'rimraf';
import yaml from 'js-yaml';
import fs from 'fs';
import dateFormat from 'dateformat';
import webpackStream from 'webpack-stream';
import webpack2 from 'webpack';
import named from 'vinyl-named';
import log from 'fancy-log';
import colors from 'ansi-colors';

const rename = require("gulp-rename");
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

// Load all Gulp plugins into one variable
const $ = plugins();

// Check for --production flag
const PRODUCTION = !!(yargs.argv.production);

// Check for --development flag unminified with sourcemaps
const DEV = !!(yargs.argv.dev);

// Load settings from settings.yml
const {
  BROWSERSYNC,
  COMPATIBILITY,
  REVISIONING,
  PATHS
} = loadConfig();

// Check if file exists synchronously
function checkFileExists(filepath) {
  let flag = true;
  try {
    fs.accessSync(filepath, fs.F_OK);
  } catch (e) {
    flag = false;
  }
  return flag;
}

// Load default or custom YML config file
function loadConfig() {
  log('Loading config file...');

  if (checkFileExists('config.yml')) {
    // config.yml exists, load it
    log(colors.bold(colors.cyan('config.yml')), 'exists, loading', colors.bold(colors.cyan('config.yml')));
    let ymlFile = fs.readFileSync('config.yml', 'utf8');
    return yaml.load(ymlFile);

  } else if (checkFileExists('config-default.yml')) {
    // config-default.yml exists, load it
    log(colors.bold(colors.cyan('config.yml')), 'does not exist, loading', colors.bold(colors.cyan('config-default.yml')));
    let ymlFile = fs.readFileSync('config-default.yml', 'utf8');
    return yaml.load(ymlFile);

  } else {
    // Exit if config.yml & config-default.yml do not exist
    log('Exiting process, no config file exists.');
    log('Error Code:', err.code);
    process.exit(1);
  }
}

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
  rimraf(PATHS.dist, done);
}

// Copy files out of the assets folder
// This task skips over the "images", "js", and "scss" folders, which are parsed separately
function copy() {
  return gulp.src(PATHS.assets)
    .pipe(gulp.dest(PATHS.dist + '/assets'));
}

// Copy fontawesome files out of the assets folder
function fonts() {
  return gulp.src(['node_modules/@fortawesome/fontawesome-free/webfonts/*.*']).pipe(gulp.dest(PATHS.dist + '/assets/fonts/fontawesome'));
}

// Compile Sass into CSS
// In production, the CSS is compressed
function sass() {
  return gulp.src('src/assets/scss/app.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      overrideBrowserslist: COMPATIBILITY
    }))

    .pipe($.cleanCss({
      compatibility: 'ie9',
      level: {
        1: {
          specialComments: 0 // denotes a number of /*! ... */ comments preserved; defaults to `all`
        },
        2: {
          mergeMedia: false // controls `@media` merging; defaults to true
        }
      }
    }))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe($.if(REVISIONING && PRODUCTION || REVISIONING && DEV, $.rev()))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest(PATHS.dist + '/assets/css'))
    .pipe($.if(REVISIONING && PRODUCTION || REVISIONING && DEV, $.rev.manifest()))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest(PATHS.dist + '/assets/css'))
    .pipe(browser.reload({
      stream: true
    }));
}

// Combine JavaScript into one file
// In production, the file is minified
const webpack = {
  config: {
    module: {
      rules: [{
        test: /\.modernizrrc.js$/,
        use: ['modernizr-loader']
      },
      {
        test: /\.modernizrrc(\.json)?$/,
        use: ['modernizr-loader', 'json-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules(?![\\\/]foundation-sites)/,
        use: {
          loader: 'babel-loader'
        }
      }
      ]
    },
    output: {
      filename: '[name].min.js'
    },
    resolve: {
      alias: {
        modernizr$: path.resolve(__dirname, ".modernizrrc")
      },
      modules: ["bower_components", "node_modules"]
    },
    performance: {
      hints: false
    },
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          cache: false,
          parallel: true,
          terserOptions: {
            warnings: false,
            mangle: true,
            module: false,
            output: {
              comments: false
            },
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_classnames: undefined,
            keep_fnames: false,
            safari10: false
          }
        })
      ],
      runtimeChunk: false,
      occurrenceOrder: true,
      splitChunks: {
        name: false,
        minSize: 0, // enforce all
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          }
        }
      }
    },
    plugins: [
      new webpack2.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ].filter(plugin => (plugin))
  },

  changeHandler(err, stats) {
    log('[webpack]', stats.toString({
      colors: true
    }));

    browser.reload();
  },

  build() {
    return gulp.src(PATHS.entries)
      .pipe(named())
      .pipe(webpackStream(webpack.config, webpack2))
      .pipe($.if(REVISIONING && PRODUCTION || REVISIONING && DEV, $.rev()))
      .pipe(gulp.dest(PATHS.dist + '/assets/js'))
      .pipe($.if(REVISIONING && PRODUCTION || REVISIONING && DEV, $.rev.manifest()))
      .pipe(gulp.dest(PATHS.dist + '/assets/js'));
  },

  watch() {
    const watchConfig = Object.assign(webpack.config, {
      watch: true,
      devtool: 'inline-source-map'
    });

    return gulp.src(PATHS.entries)
      .pipe(named())
      .pipe(webpackStream(watchConfig, webpack2, webpack.changeHandler)
        .on('error', (err) => {
          log('[webpack:error]', err.toString({
            colors: true
          }));
        })
      )
      .pipe(gulp.dest(PATHS.dist + '/assets/js'));
  }
};

gulp.task('webpack:build', webpack.build);
gulp.task('webpack:watch', webpack.watch);

// Copy images to the "dist" folder
// In production, the images are compressed
function images() {
  return gulp
    .src("src/assets/images/**/*")
    .pipe(
      $.if(
        PRODUCTION,
        $.imagemin([
          $.imagemin.mozjpeg({
            quality: 80,
            progressive: true
          }),
          $.imagemin.optipng({
            optimizationLevel: 5
          }),
          $.imagemin.gifsicle({
            interlaced: true
          }),
          $.imagemin.svgo({
            plugins: [
              { cleanupAttrs: true },
              { removeComments: true },
              { removeViewBox: true },
              { cleanupIDs: false }
            ]
          })
        ])
      )
    )
    .pipe(gulp.dest(PATHS.dist + "/assets/images"));
}

// Create a .zip archive of the theme
function archive() {
  var time = dateFormat(new Date(), "yyyy-mm-dd_HH-MM");
  var pkg = JSON.parse(fs.readFileSync('./package.json'));
  var title = pkg.name + '_' + time + '.zip';

  return gulp.src(PATHS.package)
    .pipe($.zip(title))
    .pipe(gulp.dest('packaged'));
}


// Start BrowserSync to preview the site in
function server(done) {
  browser.init({
    proxy: BROWSERSYNC.url,
    ui: {
      port: 8080
    }

  });
  done();
}

// Reload the browser with BrowserSync
function reload(done) {
  browser.reload();
  done();
}

// Watch for changes to static assets, pages, Sass, and JavaScript
function watch() {
  //gulp.watch(PATHS.assets, copy);
  gulp.watch(PATHS.assets, gulp.series(copy, fonts));
  gulp.watch('src/assets/scss/**/*.scss', sass)
    .on('change', path => log('File ' + colors.bold(colors.magenta(path)) + ' changed.'))
    .on('unlink', path => log('File ' + colors.bold(colors.magenta(path)) + ' was removed.'));
  gulp.watch(['**/*.html', '**/*.php'], reload)
    .on('change', path => log('File ' + colors.bold(colors.magenta(path)) + ' changed.'))
    .on('unlink', path => log('File ' + colors.bold(colors.magenta(path)) + ' was removed.'));
  gulp.watch('src/assets/images/**/*', gulp.series(images, browser.reload));
}

// Build the "dist" folder by running all of the below tasks
gulp.task('build', gulp.series(clean, gulp.parallel(sass, 'webpack:build', images, copy, fonts)));

// Build the site, run the server, and watch for file changes
gulp.task('default', gulp.series('build', server, gulp.parallel('webpack:watch', watch)));

// Package task
gulp.task('package', gulp.series('build', archive));