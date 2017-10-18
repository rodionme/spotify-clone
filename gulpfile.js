'use strict';

const gulp          = require('gulp'),                      // gulp
      del           = require('del'),                       // Files and folders remover
      plumber       = require('gulp-plumber'),              // Errors resolver
      notify        = require('gulp-notify'),               // Notifier
      sourcemaps    = require('gulp-sourcemaps'),           // Sourcemaps
      browserSync   = require('browser-sync').create(),     // Live reload
      stylus        = require('gulp-stylus'),               // Stylus
      postcss       = require('gulp-postcss'),              // PostCSS
      autoprefixer  = require('autoprefixer'),              // Autoprefixer
      pug           = require('gulp-pug');                  // Pug


require('./config.js');


// Clean resulting folder
gulp.task('clean', function () {
  return del('dist/**', function () {
    console.log('Files deleted');
  });
});


// Compile CSS
gulp.task('styles', function () {
  return gulp.src(config.build.src.css)
    .pipe(plumber({errorHandler: notify.onError("<%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(postcss([autoprefixer({
      browsers: config.browsers,        // https://github.com/ai/browserslist
      cascade: false
    })]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.build.dest.css));
});


// Compile HTML
gulp.task('views', function () {
  return gulp.src(config.build.src.html)
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(pug({
      doctype: 'html',
      pretty: true
    }))
    .pipe(gulp.dest(config.build.dest.html));
});


// Copy images
gulp.task('images', function () {
  return gulp.src(config.build.src.img, {since: gulp.lastRun('images')})
    .pipe(gulp.dest(config.build.dest.img));
});


// Copy fonts
gulp.task('fonts', function () {
  return gulp.src(config.build.src.fonts, {since: gulp.lastRun('fonts')})
    .pipe(gulp.dest(config.build.dest.fonts));
});


// Local development server
gulp.task('server', function (done) {
  browserSync.init({
    server: 'dist',
    port: 8888,
    notify: false,
    // browser: ["google chrome", "firefox", "safari"],
    open: false,
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: true
    }
  });
  done();
});

function reload(done) {
  browserSync.reload();
  done();
}


// Project assembly
gulp.task('build', gulp.parallel('views', 'styles', 'images', 'fonts'));


// Watching changes
gulp.task('watch', function () {
  gulp.watch(config.watch.html, gulp.series('views', reload));
  gulp.watch(config.watch.css, gulp.series('styles', reload));
  gulp.watch(config.watch.img, gulp.series('images', reload));
  gulp.watch(config.watch.fonts, gulp.series('fonts', reload));
});


gulp.task('default', gulp.series('clean', 'build', 'server', 'watch'));