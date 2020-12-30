//=============создаем переменные проекта которые будут вызывать установленные пакеты=========================
let gulp = require ('gulp'),
	sass = require ('gulp-sass'),
	browserSync = require ('browser-sync'),
	uglify = require ('gulp-uglify'),
	concat = require ('gulp-concat'),
	rename = require ('gulp-rename'),
	kit = require ('gulp-kit'),
	del = require ('del'),
	autoprefixer = require ('gulp-autoprefixer'),
	groupMedia = require('gulp-group-css-media-queries');

//=================== конвертация scss в css=====================
gulp.task('scss', function(){
	return gulp.src ('app/scss/**/style.scss')
	.pipe(sass({outputStyle: 'expanded'}))
	//{outputStyle: 'compressed'} - сжатие css файла в одну строку.
	//{outputStyle: 'expanded'} - аккуратное сложение css файла.
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
		{cascade: true }))
	// .pipe(rename({suffix: '.min'})) // переименовывает сжатый css файл , добавляя суффикс-.min. Использовать при - outputStyle: 'compressed'
	.pipe(groupMedia())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});
//===================KIT===========================
// gulp.task('codekit', function(){
//     return gulp.src ('app/kit/index.kit')
//     .pipe(kit())
//     .pipe(gulp.dest('app/'))
//     .pipe(browserSync.reload({stream: true}))
// });

//====================сервер reload HTML========================
gulp.task('html', function () {
	return gulp.src ('app/*.html')
	.pipe(browserSync.reload({stream: true}))
});

// =====================сервер reload JS=========================
gulp.task('script', function () {
	return gulp.src ('app/js/*.js')
	.pipe(browserSync.reload({stream: true}))
});
// ===========css библиотеки плагинов==================
gulp.task('css', async function(){
	return gulp.src('app/js/script/swiper/swiper.css')
	.pipe(concat('_libs.scss'))
	.pipe (gulp.dest('app/scss/import/'))
	.pipe (browserSync.reload({stream: true}))
});
// ============конкатинация и сжатие js файлов================
//=============больше двух файлов применять кв. скобки []=======
gulp.task ('js', function (){
	return gulp.src(['app/js/script/swiper/swiper.js', 'app/js/script/ScrollMagic/ScrollMagic.js', 'app/js/script/ScrollMagic/plugins/debug.addIndicators.js'])
	.pipe(concat('libs.min.js'))
	.pipe (uglify())
	.pipe (gulp.dest('app/js'))
	.pipe (browserSync.reload({stream: true}))
});
//===========сборка проекта в DIST========================
gulp.task ('export', async function(){
	let buildHtml = gulp.src('app/index.html')
		.pipe(gulp.dest('dist'))

	let buildCss = gulp.src('app/css/**/*.css')
		.pipe(gulp.dest('dist/css'))

	let buildJs = gulp.src('app/js/*.js')
		.pipe(gulp.dest('dist/js'))

	let buildFonts = gulp.src('app/fonts/**/*.*')
		.pipe(gulp.dest('dist/fonts'))

	let buildImg = gulp.src('app/images/**/*.*')
		.pipe(gulp.dest('dist/images'))
});

//=========Clean удаление старой сборки DEST перед загрузкой новой сборки=====
gulp.task ('clean', async function(){
	del.sync ('dist')
})
//Экспорт файлов из app в DIST  при сборке gulp build папка dist сначала удаляется, а затем новая экспортируется.
gulp.task ('build', gulp.series('clean', 'export'));
//========================АВТООБНОВЛЕНИЕ============================
//автообновление CSS и HTML и JS после сохранения scss файла====
gulp.task ('watch', function(){
	gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
	// gulp.watch('app/kit/**/*.kit', gulp.parallel('codekit'));
	gulp.watch('app/*.html', gulp.parallel('html'));
	gulp.watch('app/js/*.js', gulp.parallel('script'));
});
//==========================сервер RELOAD========================
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'app/'
		}
	});
});
//===========порядок выполнения хода запуска проекта===========
gulp.task ('default', gulp.parallel('css', 'scss' ,'js', 'browser-sync', 'watch'));
// gulp.task ('default', gulp.parallel('css', 'scss' ,'js', 'codekit', 'browser-sync', 'watch'));
///////////////////////////////////////////////////////
