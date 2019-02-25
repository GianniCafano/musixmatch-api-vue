'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src(['./src/scss/**/*.scss', './node_modules/bootstrap/scss/bootstrap.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(['./src/scss/**/*.scss', './node_modules/bootstrap/scss/bootstrap.scss'], gulp.series('sass'));
});

gulp.task('default', gulp.parallel('sass', 'sass:watch'));