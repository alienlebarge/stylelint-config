var gulp = require("gulp");
var postcss = require("gulp-postcss");
var reporter = require("postcss-reporter");
var stylelint = require("stylelint");
var jsonlint = require("gulp-jsonlint");

/**
 * Lint JSON
 */
function lintjson() {
    return gulp.src("./.stylelintrc")
        .pipe(jsonlint())
        .pipe(jsonlint.reporter());
}

/**
 * Lint CSS
 */
function lintstyles() {
    return gulp.src("test/**/*.css")
        .pipe(postcss([
          stylelint({
            /* configFile: 'node_modules/alb-stylelintrc/.stylelintrc' */
          }),
          reporter({ clearMessages: true }),
        ]))
}

gulp.task('dev', gulp.series(lintjson, lintstyles));
