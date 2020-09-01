let gulp = require('gulp');

gulp.task('css', function(){
  const postcss = require('gulp-postcss');
  const cleancss = require('gulp-clean-css');
  return gulp.src('./src/styles.css')
    .pipe(postcss([
      require('tailwindcss'),
      require('autoprefixer'),
    ]))
    .pipe(cleancss({
      compatibility: 'ie9',
      format: 'keep-breaks',
    }))
    .pipe(gulp.dest('./dist/'));
});