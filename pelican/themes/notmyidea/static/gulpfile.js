var gulp = require('gulp'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css');

gulp.task('default', ['minify-css']);

gulp.task('minify-css', function() {
  return gulp.src('./src/css/*.css')
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('./build/css/'))
});
