var gulp = require("gulp")
var postcss = require("gulp-postcss")
var reporter = require("postcss-reporter")
var stylelint = require("stylelint")

gulp.task("lint:css", function () {
  return gulp.src("test/**/*.css")
    .pipe(postcss([
      stylelint({
        /* configFile: 'node_modules/alb-stylelintrc/.stylelintrc' */
      }),
      reporter({ clearMessages: true }),
    ]))
})
