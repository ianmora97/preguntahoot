var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("web/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("web/css"))
        .pipe(browserSync.stream());
});
gulp.task('css', function() {
    return gulp.src('node_modules/animate.css/animate.css')
        .pipe(gulp.dest("web/css"))
        .pipe(browserSync.stream());
});

// move bootstrap JS and Jquery
gulp.task('js', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/popper.js/dist/umd/popper.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.js'
        ])
        .pipe(concat('jq-bs-bundle.js'))
        .pipe(gulp.dest('web/js'))
        .pipe(browserSync.stream());
});

// watching scss/html files
gulp.task('serve', gulp.series('sass','js','css', function() {
    gulp.watch("web/scss/*.scss", gulp.series('sass'));
    gulp.watch("web/scss/*.css", gulp.series('css'));
    gulp.watch("web/js/*.js", gulp.series('js'));
}));

gulp.task('default', gulp.series('serve'));