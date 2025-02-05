const gulp = require('gulp');
const less = require('gulp-less');

const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

function compilise () {
    return gulp.src('./src/css/style.less')
        .pipe(less({}))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/css'));
}

function watchFile(){
    gulp.watch("./src/css/style.less", compile);
}

exports.default = compilise;
exports.watch = watchFile;