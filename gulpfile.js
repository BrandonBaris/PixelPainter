var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('watch-files', function (){
  gulp.watch('./**/*', ['html']);
});


gulp.task('html', function (){
  return gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('public-server', function (){
  connect.server({
    root: './',
    port: 8080,
    livereload: true
  });
});

gulp.task('default', ['public-server', 'watch-files']);