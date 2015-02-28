var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('watch-files', function (){
  gulp.watch('./*.html', ['html']);
  gulp.watch('./js/*.js', ['js']);

});

gulp.task('html', function (){
  return gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('js', function (){
  return gulp.src('./js/*.js')
    .pipe(connect.reload());
});


gulp.task('public-server', function (){
  connect.server({
    root: './',
    port: 8080,
    livereload: true
  });
});

gulp.task('livereload', function() {
  gulp.src('./public/**/*')
    .pipe(connect.reload());
});

gulp.task('default', ['public-server', 'watch-files', 'livereload']);