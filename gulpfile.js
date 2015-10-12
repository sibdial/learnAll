var gulp = require('gulp'),
		connect = require('gulp-connect'),
		opn = require('opn');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: '9999'
  });
  opn('http://localhost:9999')
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);