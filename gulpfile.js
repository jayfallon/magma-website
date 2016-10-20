// all gulp tasks are located at ./gulp_tasks.
// this file only pulls them in and executes
// the default gulp task

var gulp = require('gulp');

// load gulp tasks from directory
require('require-dir')('./gulp_tasks');

// default gulp task
gulp.task('default', ['watch']);
