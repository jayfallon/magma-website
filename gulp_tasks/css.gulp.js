// task required to build the CSS to display the Magma website

var gulp        				= require('gulp'),
		// gulp plugins
		changed             = require('gulp-changed'),
		sourcemaps         	= require('gulp-sourcemaps'),
		gutil              	= require('gulp-util'),
    // postcss library plugins
    lost 								= require('lost'),
    cssNano             = require('cssnano'),
    autoprefixer        = require('autoprefixer'),
    rucksack           	= require('rucksack-css'),
    // postcss plugins
    postcss             = require('gulp-postcss'),
    imageSet           	= require('postcss-image-set'),
    cssFocus            = require('postcss-focus'),
    precss              = require('precss'),
    pxtorem             = require('postcss-pxtorem'),
    cssShort            = require('postcss-short'),
    flexbox             = require('postcss-flexbox'),
    flexbugs            = require('postcss-flexbugs-fixes'),
    subpixels           = require('postcss-round-subpixels'),
    vars                = require('postcss-simple-vars'),
    config              = require('../config');

// load external variables for Magma CSS library
var cssVariables = require('../src/css/magma-library/variables.js');

// - build css for website
gulp.task('build:css', function() {
  return gulp.src(config.cssSource + 'main.css')
    .pipe(changed(config.cssDestination + '**/*.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss([
      precss(),
      vars({
        variables: cssVariables
       }),
      cssShort(),
      cssFocus(),
      pxtorem(),
      lost(),
      imageSet(),
      subpixels,
      rucksack({
      	colors: true
      }),
      flexbox(),
      autoprefixer(),
      cssNano()
    ]))
    .pipe(sourcemaps.write())
    .on("error", gutil.log)
    .pipe(gulp.dest(config.cssDestination));
});
