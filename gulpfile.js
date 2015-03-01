var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload : true
  });
});

gulp.task('livereload', function () {
  gulp.src('./**/*')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./**/*',['livereload']);
});

gulp.task('default', ['connect','watch']);