'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  clean = require('gulp-clean'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync'),
  sequence = require('gulp-sequence'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
 return gulp.src('./resources/assets/sass/**/*.scss')
 .pipe(sass())
 .pipe(gulp.dest('./build/assets/css'))
 .pipe(browserSync.reload({stream: true}))
});

gulp.task('copy', function () {
  var buildFonts = gulp.src('./resources/assets/fonts/*.*')
  .pipe(gulp.dest('./build/assets/fonts'))
  
  var buildImg = gulp.src('./resources/assets/img/**/*.*')
  .pipe(gulp.dest('./build/assets/img'))
});

gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: 'build'
    },
    notify: false
  });
});

gulp.task('watch', ['server', 'sass', 'copy'], function () {
 gulp.watch('./resources/assets/**/*.scss', ['sass']);
 gulp.watch('./build/*.html', browserSync.reload);
 gulp.watch('./resources/assets/**/*.js', browserSync.reload);
});


gulp.task('clean', function () {
  return gulp.src('./build/assets/css', {read: false})
  .pipe(clean());
});


gulp.task('dev', sequence('clean', ['watch']));

gulp.task('build', sequence('clean', ['sass', 'copy']));

gulp.task('default', ['dev']);

