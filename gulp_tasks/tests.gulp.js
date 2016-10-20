var gulp = require('gulp');

// - tests
gulp.task('blank', function (done) {
  console.log('NOTHING TO DO HERE');
  return done();
});

gulp.task('test', ['blank']);
gulp.task('test:remote', ['blank']);
gulp.task('test:local', ['blank']);
