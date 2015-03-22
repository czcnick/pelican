var gulp = require('gulp'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css');

var paths = {
	css: './src/css/*.css'
};

gulp.task('minify-css', function() {
  return gulp.src(paths.css)
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('./build/css/'))
});

gulp.task('watch', function() {
	gulp.watch(paths.css, ['minify-css']);
});

gulp.task('default', ['minify-css', 'watch']);

