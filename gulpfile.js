var gulp    = require('gulp');
var sass    = require('gulp-sass');
var jade    = require('gulp-jade');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
      livereload: true
  });
});

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass( { errLogToConsole: true }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function() {
  gulp.src('./public/**/*')
    .pipe(connect.reload());
});

gulp.task('jade-views', function() {
  var views_to_html = {};

  gulp.src('./views/*.jade')
    .pipe(jade({
      locals : views_to_html
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
  // gulp.watch('./views/*.jade', ['jade-views']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('default', ['watch','sass']);