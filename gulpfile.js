var gulp = require("gulp");
var postcss = require("gulp-postcss");
var reporter = require("postcss-reporter");
var stylelint = require("stylelint");
var jsonlint = require("gulp-jsonlint");

gulp.task("lint:json", function () {
  gulp.src("./.stylelintrc")
      .pipe(jsonlint())
      .pipe(jsonlint.reporter());
})

gulp.task("lint:css", function () {
  return gulp.src("test/**/*.css")
    .pipe(postcss([
      stylelint({
        /* configFile: 'node_modules/alb-stylelintrc/.stylelintrc' */
      }),
      reporter({ clearMessages: true }),
    ]))
})
