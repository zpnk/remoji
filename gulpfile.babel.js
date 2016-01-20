import gulp from 'gulp'
import babel from 'gulp-babel'
import plumber from 'gulp-plumber'
import lab from 'gulp-lab'

gulp.task('build', () => {
  gulp.src('lib/**/*.js')
  .pipe(plumber())
  .pipe(babel())
  .pipe(gulp.dest('dist'))
})

gulp.task('test', () => {
  gulp.src('test')
  .pipe(plumber())
  .pipe(lab('--verbose --coverage --sourcemaps --transform node_modules/lab-babel --ignore __core-js_shared__'))
})

gulp.task('watch', () => {
  gulp.watch(['lib/**/*.js', 'test/**/*.js'], ['test', 'build'])
})

gulp.task('default', ['watch'])
