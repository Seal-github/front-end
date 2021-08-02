const gulp = require('gulp');
const htmlmin =require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');


// 1.第一个任务
gulp.task('first',()=>{
    console.log('第一个gulp文件');
    gulp.src('./src/css/style.css')
        .pipe(gulp.dest('./dist/css'));
});
// 2.html任务
gulp.task('htmlmin',()=>{
    gulp.src('./src/*.html')
    // 压缩html文件中的代码，是否压缩空格
    // 提取 html 公共代码
        .pipe(fileinclude())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
});


// 3.css任务
gulp.task('cssmin',()=>{
    gulp.src(['./src/css/*.less','./src/css/*.css'])
    // css代码压缩
    // less 语法转 css 语法
        .pipe(less())
        .pipe(csso())
        .pipe(gulp.dest('./dist/css'));
});

// 4.js任务
gulp.task('jsmin',()=>{
    gulp.src('./src/js/*.js')
        // ES6 转 ES5
        // js代码压缩
        .pipe(babel({
            // 判断当前代码的运行环境，将代码转换为当前环境所支持的代码
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});


// 复制文件夹
gulp.task('copy',()=>{
    gulp.src('./src/images/*')
        .pipe(gulp.dest('./dist/images'))
    gulp.src('./src/lib/*')
        .pipe(gulp.dest('./dist/lib'))
})


// 构建任务
gulp.task('default',  ['first', 'htmlmin', 'cssmin', 'jsmin','copy']);





