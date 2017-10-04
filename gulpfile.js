var gulp = require('gulp');

gulp.task('deploy', () => {
  return gulp.src('dist/**/*')
    .pipe($.ghPages());
});