'use strict';

let gulp     = require('gulp'),
    stylus   = require('gulp-stylus'),
    jeet     = require('jeet'),
    kouto    = require('kouto-swiss'),
    rupture  = require('rupture'),
    jshint   = require('gulp-jshint'),
    connect  = require('gulp-connect'),
    sequence = require('run-sequence'),
    spawn    = require('child_process').spawn;

const src = {
    css  : './src/assets/styl/style.styl',
    styl : './src/assets/styl/**/*.styl',
    js   : ['./src/*.js', './src/app/**/*.js'],
    html : './src/**/*.html'
};

/**
 * CSS/Stylus
 */
gulp.task('css', () => {

    return gulp
        .src(src.css)
        .pipe(stylus({
            use     : [jeet(),rupture(),kouto()],
            linenos : false,
            compress: false
        }))
        .pipe(gulp.dest('./src/assets/css'))
        .pipe(connect.reload());
});

/**
 * JS
 */
gulp.task('js', () => {

    return gulp
        .src(src.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

/**
 * HTML
 */
gulp.task('html', () => {

    return gulp
        .src(src.html)
        .pipe(connect.reload());
});

/**
 * Watchers
 */
gulp.task('watch', () => {
    // Stylus
    gulp.watch(src.styl, ['css']);
    // JS
    gulp.watch(src.js, ['js', 'html']);
    // Pug
    gulp.watch(src.html, ['html']);
});

/**
 * Dev server
 */
gulp.task('server', () => {
    connect.server({
        name: 'Dev server',
        root: './src',
        port: 3000,
        livereload: true,
        fallback: './src/index.html'
    });
});

/**
 * Dev command 
 */
gulp.task('default', () => {
    sequence('css', 'html', 'server', 'watch');
});