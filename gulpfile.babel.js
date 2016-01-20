import gulp from 'gulp'
import babel from 'gulp-babel'
import plumber from 'gulp-plumber'

gulp.task('build', () => {
  gulp.src('lib/**/*.js')
  .pipe(plumber())
  .pipe(babel())
  .pipe(gulp.dest('dist'))
})

gulp.task('default', ['build'])
