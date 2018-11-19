const gulp = require("gulp");
const watch = require("gulp-watch");
const sass = require('gulp-sass');
const concat = require('gulp-concat');


sass.compiler = require('node-sass');

  gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('concat', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('common.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

  gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
  });
