const { parallel, src, dest, watch } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");
const terser = require("gulp-terser");
const imagemin = require("gulp-imagemin");
const connect = require("gulp-connect");

function html() {
	return src("project/*.html")
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest("dist/"))
		.pipe(connect.reload());
}

function sassComp() {
	return src("project/css/*.scss")
		.pipe(sass({ outputStyle: "compressed" }))
		.pipe(autoprefixer("last 2 versions"))
		.pipe(dest("dist/css"))
		.pipe(connect.reload());
}

function css() {
	return src("project/css/plugins/*.*")
		.pipe(csso())
		.pipe(dest("dist/css/"))
		.pipe(connect.reload());
}

function js() {
	return src("project/js/*.js")
		.pipe(terser())
		.pipe(dest("dist/js"))
		.pipe(connect.reload());
}

function imgs() {
	return src("project/img/**/*.*")
		.pipe(
			imagemin({
				interlaced: true,
				progressive: true,
				optimizationLevel: 5,
				svgoPlugins: [{ removeViewBox: true }],
			})
		)
		.pipe(dest("dist/img"))
		.pipe(connect.reload());
}

function slickFonts() {
	return src("project/css/plugins/fonts//*.*")
		.pipe(dest("dist/css/fonts"))
		.pipe(connect.reload());
}

function fonts() {
	return src("project/webfonts/*.*")
		.pipe(dest("dist/webfonts"))
		.pipe(connect.reload());
}

function server() {
	connect.server({
		port: 8888,
		root: "dist",
		livereload: true,
	});
}

function watchFiles() {
	watch("project/*.html", { ignoreInitial: false }, html);
	watch("project/css/**/*.scss", { ignoreInitial: false }, sassComp);
	watch("project/css/plugins/*.css", { ignoreInitial: false }, css);
	watch("project/js/*.js", { ignoreInitial: false }, js);

	watch("project/img/**/*.*", { ignoreInitial: false }, imgs);
	watch("project/webfonts/*.*", { ignoreInitial: false }, fonts);
	watch("project/css/plugins/fonts/*.*", { ignoreInitial: false }, slickFonts);

	// watch("dist/**/*.*", server);
}

exports.default = parallel(server, watchFiles);
