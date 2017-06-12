/*!
 * Created by He on 2017/5/5.
 * E-mail:408348116@qq.com
 */
var gulp = require('gulp')
var plugins = require('gulp-load-plugins')()
var browserSync = require('browser-sync').create()
var reload = browserSync.reload


gulp.task('html', function () {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./'))
        .pipe(reload({stream: true}))
})

gulp.task('js-dev', function () {
    return gulp.src('./*.js')
        .pipe(gulp.dest('./'))
        .pipe(reload({stream: true}))
})

gulp.task('css-dev', function () {
    return gulp.src('./*.css')
        .pipe(gulp.dest('./'))
        .pipe(reload({stream: true}))
})

gulp.task('img', function () {
    return gulp.src('src/images/*')
        .pipe(plugins.cache(plugins.imagemin({//使用cache来保正只有某个图片发送改变后才进行压缩
            progressive: true,
            use: [plugins.pngquant()] //使用pngquant来压缩png图片
        })))
        .pipe(gulp.dest('dist/images'))
})

gulp.task('dev', function () {
    gulp.start('js-dev', 'css-dev', 'html')
    browserSync.init({
        server: {
            baseDir: './'
        },
        notify: false
    })
    gulp.watch('./*.js', ['js-dev'])
    gulp.watch('./*.html', ['html'])
    gulp.watch('./*.css', ['css-dev'])
})