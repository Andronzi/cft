import webpack from "webpack-stream";
import env from "dotenv";
env.config();

export const js = () => {
  return app.gulp
    .src(app.path.src.js)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          subtitle: "Fail JS COMPILATION",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      webpack({
        mode: process.env.mode,
        output: {
          filename: "app.min.js",
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};
