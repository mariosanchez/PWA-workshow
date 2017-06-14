const gulp = require('gulp')
const browserSync = require('browser-sync').create()

const folderPath = './exercise'

gulp.task('default', ['browser'])

// Static server + watching files
gulp.task('browser', () => {
  browserSync.init({
    server: { baseDir: folderPath },
  })
  gulp.watch(`${folderPath}/**/*`).on('change', browserSync.reload)
})
