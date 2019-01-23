let gulp = require("gulp");
let sass = require("gulp-sass");

gulp.task(
  "sass",
  gulp.series(function() {
    return gulp
      .src(["node_modules/bootstrap/scss/*.scss", "src/scss/*.scss"])
      .pipe(sass()) //converte .scss em .css
      .pipe(gulp.dest("src/css"));
  })
);

gulp.task(
  "js",
  gulp.series(function() {
    return gulp
      .src([
        "node_modules/bootstrap/dist/js/bootstrap.min.js",
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/popper.js/dist/umd/popper.min.js"
      ])
      .pipe(gulp.dest("src/js"));
  })
);

gulp.task(
  "watch",
  gulp.series(function() {
    gulp.watch(
      ["node_modules/bootstrap/scss/*.scss", "src/scss/*.scss"],
      gulp.parallel(["sass", "js"])
    );
  })
);
gulp.task("default", gulp.series(["sass", "js", "watch"]));
