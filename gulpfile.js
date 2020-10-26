const gulp        = require('gulp');
const browserSync = require('browser-sync');

/** Все для преобразования SASS в CSS */
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task("sass", function(){
    return gulp.src('src/sass/*.+(sass|scss)')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});


gulp.task('watch', function(){
    gulp.watch("src/sass/*.+(sass|scss)", gulp.parallel("sass"));
    gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', "browser-sync", 'sass'));