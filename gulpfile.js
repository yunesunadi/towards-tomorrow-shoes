const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const { gifsicle, mozjpeg, optipng, svgo } = require("gulp-imagemin");
const replace = require("gulp-replace");
const { init, reload } = require("browser-sync").create();
const browserify = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");

const htmlPath = "./*.html",
    sassPath = "./src/sass/**/*.scss",
    jsTaskHomePath = "./src/js/pages/home.js",
    jsWatchPath = "./src/js/**/*.js",
    imgPath = "./src/assets/images/**/*.{png,jpg,gif,svg}";

function sassTask() {
    return src(sassPath, { sourcemaps: true })
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest("./dist/css", { sourcemaps: "." }));
}

function jsTaskHome() {
    return browserify(jsTaskHomePath)
        .transform(babelify, { presets: ["@babel/preset-env"] })
        .bundle()
        .pipe(source("home.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(dest("dist/js"));
}

function imgTask() {
    return src(imgPath)
        .pipe(
            imagemin(
                [
                    gifsicle({ interlaced: true }),
                    mozjpeg({ quality: 75, progressive: true }),
                    optipng({ optimizationLevel: 5 }),
                    svgo({
                        plugins: [
                            {
                                name: "removeViewBox",
                                active: true,
                            },
                            {
                                name: "cleanupIDs",
                                active: false,
                            },
                        ],
                    }),
                ],
                {
                    verbose: true,
                }
            )
        )
        .pipe(dest("./dist/assets/images"));
}

function cacheBustTask() {
    const str = new Date().getTime();
    return src(htmlPath)
        .pipe(replace(/cb=\d+/g, "cb=" + str))
        .pipe(dest("./"));
}

function browserSyncTask(cb) {
    init({
        server: {
            baseDir: "./",
        },
        port: 8080,
        tunnel: "my-private-site",
        online: true,
    });
    cb();
}

function browserSyncReload(cb) {
    reload();
    cb();
}

function watchTask() {
    watch(htmlPath, series(browserSyncReload));
    watch(sassPath, series(sassTask, cacheBustTask));
    watch(jsWatchPath, series(jsTaskHome, cacheBustTask));
    watch(imgPath, series(imgTask, browserSyncReload));
}

exports.default = series(
    sassTask,
    jsTaskHome,
    imgTask,
    cacheBustTask,
    browserSyncTask,
    watchTask
);

exports.build = series(sassTask, jsTaskHome, imgTask, cacheBustTask);
