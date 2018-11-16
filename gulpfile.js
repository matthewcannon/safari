const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const watchify = require("watchify");
const browserify = require("browserify");

const bundler = browserify({
    entries: ["./src/main.jsx"],
    extensions: [".jsx", ".js"],
    debug: true,
}).transform("babelify", {
    presets: ["@babel/preset-env", "@babel/preset-react"],
});

const bundle = () => {
    return bundler
        .on("error", function(err) {
            console.error(err);
            this.emit("end");
        })
        .bundle()
        .pipe(source("main.js"))
        .pipe(buffer())
        .pipe(
            sourcemaps.init({
                loadMaps: true,
            }),
        )
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./dist"));
};

const bundlefy = watchify(bundler);

gulp.task("build-styles", function() {
    const sass = require("gulp-sass"),
        cssmin = require("gulp-cssmin"),
        rename = require("gulp-rename");

    return gulp
        .src("./src/styles/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(cssmin())
        .pipe(
            rename({
                suffix: ".min",
            }),
        )
        .pipe(gulp.dest("./dist/css"));
});

gulp.task("build-images", function() {
    return gulp.src("./src/images/**").pipe(gulp.dest("./dist/img"));
});

gulp.task("build-fonts", function() {
    return gulp.src("./src/fonts/**").pipe(gulp.dest("./dist/fonts"));
});

gulp.task("build-sounds", function() {
    return gulp.src("./src/sounds/**").pipe(gulp.dest("./dist/snd"));
});

gulp.task("build-scripts", function() {
    return bundle();
});

gulp.task("build-html", function() {
    return gulp.src("./src/index.html").pipe(gulp.dest("./dist"));
});

gulp.task("build-watch", function() {
    return bundlefy
        .on("log", function() {
            console.log("-> Waiting.");
        })
        .on("update", function() {
            console.log("-> Bundling ...");
            bundle();
        })
        .on("error", function(err) {
            console.error(err);
            this.emit("end");
        })
        .bundle()
        .pipe(source("main.js"))
        .pipe(buffer())
        .pipe(
            sourcemaps.init({
                loadMaps: true,
            }),
        )
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./dist"));
});

gulp.task(
    "build",
    gulp.parallel("build-styles", "build-images", "build-fonts", "build-sounds", "build-html", "build-scripts"),
);
