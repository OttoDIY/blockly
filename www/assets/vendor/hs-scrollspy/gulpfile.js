var gulp = require('gulp'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),

	uglify = require('gulp-uglify'),
	webpack = require('webpack'),
	webpackStream = require('webpack-stream');

gulp.task('js-build', function () {
	return gulp.src('./src/js/hs-scrollspy.js')
		.pipe(webpackStream({
			mode: 'development',
			output: {
				library: 'HSScrollspy',
				libraryTarget: 'umd',
				libraryExport: 'default',
				filename: 'hs-scrollspy.js',
			},
			module: {
				rules: [
					{
						test: /\.(js)$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader',
						query: {
							presets: ["@babel/preset-env"]
						}
					}
				]
			}
		}))
		.pipe(gulp.dest('./dist/'))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./dist/'))
});

gulp.task('main-watch', function () {
	gulp.watch('./src/js/**/*.js', gulp.series('js-build'));
});

// Default Task
gulp.task('default', gulp.series('main-watch'));
