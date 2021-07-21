//Javascript
import gulp from 'gulp'
import babel from 'gulp-babel'
import terser from 'gulp-terser'

//PUG
import pug from 'gulp-pug'

//SASS
// import sass from 'gulp-sass'
var sass = require('gulp-sass')(require('sass'));

const production = false

gulp.task('babel', () => {
  return gulp
    .src('./src/js/*.js')
    .pipe(babel())
    .pipe(terser())
    .pipe(gulp.dest('./public/js')) 
})

gulp.task('views', () => {
  return gulp
  .src('./src/views/pages/*.pug')
  .pipe(pug({
    pretty: production ? false : true
  }))
  .pipe(gulp.dest('./public'))
})

gulp.task('sass', () => {
  return gulp.src('./src/scss/styles.scss')
  // .pipe(sass({
  //     outputStyle: 'compressed'
  // }))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/css'))
})

gulp.task('default', () => {
  gulp.watch('./src/views/**/*.pug', gulp.series('views'))
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
  gulp.watch('./src/js/*.js', gulp.series('babel'))

})