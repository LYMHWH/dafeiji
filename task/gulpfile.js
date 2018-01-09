




//htmlmin插件的参数对象
var obj = {
	removeComments: true, //清除HTML注释
	collapseWhitespace: true, //压缩HTML
	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
	minifyJS: true, //压缩页面JS
	minifyCSS: true //压缩页面CSS
}

//获取gulp对象
var gulp = require("gulp");

//导入插件
var htmlmin = require("gulp-htmlmin");  //html压缩和优化的插件
var uglify = require("gulp-uglify");  //js压缩插件
var babel = require("gulp-babel");  //es6转es5
var minifyCss = require('gulp-minify-css'); //css压缩插件

//定义任务



//压缩JS的插件
gulp.task("jsTask",function(){
	gulp.src("dafeiji/js/*.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5
		.pipe( uglify() ) //使用插件uglify
		.pipe(gulp.dest("dest1/js"));
})

//压缩CSS的插件
gulp.task("cssTask",function(){
	gulp.src("dafeiji/css/*.css")
		.pipe( minifyCss() ) //使用插件minifyCss
		.pipe(gulp.dest("dest1/css"));
})



//默认任务
//gulp.task("default",["htmlTask"]);
//gulp.task("default",["jsTask"]);
gulp.task("default",["cssTask"]);
//gulp.task("default",["jsTask2"]);
