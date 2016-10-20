// task for watching directories and executing required tasks for the Magma website

var gulp        				= require('gulp'),
    // browser control
    browserSync         = require('browser-sync'),
    config              = require('../config');

// - sync watches and reload
gulp.task('sync-watch', ['build:css', 'build:html', 'images', 'fonts', 'jshint'], browserSync.reload)

// - watch directories
gulp.task('watch', function() {
	browserSync({
		server: {
			baseDir: "./dist/"
		}
	});
  gulp.watch(config.cssSource + '**/*.css', ['sync-watch']);
  gulp.watch(config.htmlSource + '**/*.html', ['sync-watch']);
  gulp.watch(config.imgSource + '**/*.{jpg,png,svg}', ['sync-watch']);
  gulp.watch(config.fontsSource + '**/*.{eot,svg,ttf,woff,woff2}', ['sync-watch']);
  gulp.watch(config.jsSource + '**/*.js', ['sync-watch']);
});
