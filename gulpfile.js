var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './',
    port: 8080,
    livereload : true
  });
});

gulp.task('watch', function() {
  gulp.watch('./**/*',['livereload']);
});

gulp.task('livereload', function() {
  return gulp.src('./**/*')
    .pipe(connect.reload());
});

gulp.task('default', ['connect','watch', 'livereload']);