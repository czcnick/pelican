var gulp = require('gulp'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
	less = require('gulp-less');

var paths = {
	cssDir: './src/css',
	css: './src/css/*.css',
	less: './src/css/*.less'
};

gulp.task('minify-css', function() {
  return gulp.src(paths.css)
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('./build/css/'))
});

gulp.task('less', function () {
  return gulp.src(paths.less)
    .pipe(less({}))
	.pipe(gulp.dest(paths.cssDir));
});

gulp.task('watch', function() {
	gulp.watch(paths.less, ['less', 'minify-css']);
});

gulp.task('default', ['less', 'minify-css', 'watch']);

