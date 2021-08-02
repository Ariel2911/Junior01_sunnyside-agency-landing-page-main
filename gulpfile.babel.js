//Javascript
import gulp from 'gulp'
import babel from 'gulp-babel'
import terser from 'gulp-terser'

//PUG
import pug from 'gulp-pug'

//SASS
var sass = require('gulp-sass')(require('sass'));

const production = true

gulp.task('babel', () => {
  return gulp
    .src('./src/js/*.js')
    .pipe(babel())
    .pipe(terser())
    .pipe(gulp.dest('./docs/js')) 
})

gulp.task('views', () => {
  return gulp
  .src('./src/views/pages/*.pug')
  .pipe(pug({
    pretty: production ? false : true
  }))
  .pipe(gulp.dest('./docs'))
})

gulp.task('sass', () => {
  return gulp.src('./src/scss/styles.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  // .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./docs/css'))
})

gulp.task('default', () => {
  gulp.watch('./src/views/**/*.pug', gulp.series('views'))
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
  gulp.watch('./src/js/*.js', gulp.series('babel'))
})