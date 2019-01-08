var gulp = require('gulp');
var template = require('gulp-template-compile');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('default', gulp.series(function (done) {
    return gulp.src('src/templates/*.html')
        .pipe(template({
          name: function (file) {
            var name = file.relative;
            var key = name.substr(0, name.lastIndexOf("."));
            console.log(`compile: ${key}`);
            return key;
          }
        }))
        .pipe(concat('js_templates.js'))
        .pipe(sourcemaps.init())
        .pipe(minify({
          mangle: false,
          ext:{
            src:'-debug.js',
            min:'.js'
          },
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("src/js/"));
}));
