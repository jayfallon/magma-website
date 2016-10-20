//tasks for organizing, piping, linting website assets

var gulp        				= require('gulp'),
		// gulp plugins
    requireDir          = require('require-dir'),
    changed             = require("gulp-changed"),
    jshint              = require('gulp-jshint'),
    config              = require('../config');

// - pipe images for website
gulp.task('images', function(){
  return gulp.src(config.imgSource + '**/*.{jpg,png,svg}')
    .pipe(changed(config.imgDestination + '**/*.{jpg,png,svg}'))
    .pipe(gulp.dest(config.imgDestination));
});

// - pipe fonts for website
gulp.task('fonts', function(){
  return gulp.src(config.fontsSource + '**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(changed(config.fontsDestination + '**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe(gulp.dest(config.fontsDestination));
});

// - insert javascript quality checks
gulp.task('jshint', function() {
  return gulp.src(config.jsSource + '**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(config.jsDestination));
});
