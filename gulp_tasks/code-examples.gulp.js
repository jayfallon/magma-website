// task required to generate the HTML for code examples included in the Magma website
// this task is not included in the default gulp.watch task

var gulp        		= require('gulp'),
	// gulp plugins
    changed             = require("gulp-changed"),
    prettify            = require('gulp-prettify'),
    gulpSnippet         = require('gulp-snippet-highlight'),
    config              = require('../config');

//- convert code examples into html entities with separate build command
//- website will not compile unless you run code-examples:build first
gulp.task('build:code-examples', function () {
  return gulp.src(config.codeExamplesSource + '**/*.html')
    .pipe(changed(config.codeExamplesDestination + '**/*.html'))
    .pipe(prettify({unformatted: ['pre', 'code']}))
    .pipe(gulpSnippet({
       language: "html"
    }))
    .pipe(gulp.dest(config.codeExamplesDestination));
});
