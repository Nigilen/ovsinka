var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

gulp.task('sass', function(){
  return gulp.src('app/sass/*.sass') // берем все файлы источника
      .pipe(sass()) // посредством модуля, преобразуем из sass в css
      .pipe(concat('style.css'))
      
      .pipe(gulp.dest('app/css')) // выводим результат в папку итога
})

gulp.task('clean', function() {
	return gulp.src('dist', {allowEmpty: true}).pipe(clean()); // Удаляем папку dist перед сборкой
});

gulp.task('watch', function(){
  gulp.watch('app/sass/*.sass', gulp.parallel('sass')) // Наблюдение за sass файлами
})


gulp.task('prebuild',  async function() {
  var buildCss = gulp.src([
    'app/css/style.css'
  ])
  .pipe(cssnano()) // сжимаем
  .pipe(rename({suffix: '.min'}))   
  .pipe(gulp.dest('dist/css'))

  var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
	.pipe(gulp.dest('dist/fonts'))
 
	var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
	.pipe(gulp.dest('dist/js'))

  var buildImgs = gulp.src('app/img/**/*') // Переносим скрипты в продакшен
	.pipe(gulp.dest('dist/img'))
 
	var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
	.pipe(gulp.dest('dist'));
})

gulp.task('clear', function (callback) {
	return cache.clearAll();
})


gulp.task('default', gulp.parallel('sass', 'watch'));
gulp.task('build', gulp.series('clean', 'prebuild', 'sass'));