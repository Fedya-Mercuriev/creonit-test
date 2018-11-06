const gulp = require("gulp");
const watch = require("gulp-watch");
const sass = require('gulp-sass');


sass.compiler = require('node-sass');

  gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

  gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', ['sass']);
  });
