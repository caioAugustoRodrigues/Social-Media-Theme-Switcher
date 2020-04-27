let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', async function() {
    gulp.src('src/css/main.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'))
});