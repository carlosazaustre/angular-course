// -- Dependencies -------------------------------------------------------------
var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    inject    = require('gulp-inject'),
    gulpif    = require('gulp-if'),
    useref    = require('gulp-useref'),
    uglify    = require('gulp-uglify'),
    angularFilesort = require('gulp-angular-filesort'),
    templateCache = require('gulp-angular-templatecache'),
    historyApiFallback = require('connect-history-api-fallback');

// -- Tasks --------------------------------------------------------------------
gulp.task('server', function() {
  connect.server({
    root: './app',
    hostname: '0.0.0.0',
    port: 8080,
    livereload: true,
    middleware: function(connect, opt) {
      return [ historyApiFallback ];
    }
  });
});

gulp.task('server-dist', function() {
  connect.server({
    root: './dist',
    hostname: '0.0.0.0',
    port: 8080,
    livereload: true,
    middleware: function(connect, opt) {
      return [ historyApiFallback ];
    }
  });
});

gulp.task('html', function() {
  gulp.src("./app/views/*.html")
    .pipe(connect.reload());
  return;
});

gulp.task('inject', function() {
  return gulp.src('index.html', { cwd: './app' })
    .pipe(inject(
      gulp.src(['./app/js/**/*.js']).pipe(angularFilesort()), {
        read: false,
        ignorePath: '/app'
      }))
    .pipe(inject(
      gulp.src(["./app/css/**/*.css"]), {
        read: false,
        ignorePath: '/app'
      }))
    .pipe(gulp.dest('./app'));
});

gulp.task('templates', function() {
  gulp.src('./app/views/**/*.html')
    .pipe(templateCache({
      root: 'views/',
      module: 'directorio.templates',
      standalone: true
    }))
    .pipe(gulp.dest('./app/js'));
});

gulp.task('compress', function() {
  gulp.src('./app/index.html')
    .pipe(useref.assets())
    .pipe(gulpif('*.js', uglify({ mangle: false })))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function() {
  gulp.src('./app/index.html')
    .pipe(useref())
    .pipe(gulp.dest('./dist'));
  gulp.src('./app/img/*')
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('watch', function() {
  gulp.watch(['./app/views/**/*.html'], ['html', 'templates']);
  gulp.watch(['./app/css/**/*.css'], ['inject']);
  gulp.watch(['./app/js/**/*.js'], ['inject']);
});

gulp.task('build', ['templates', 'compress', 'copy']);
gulp.task('start', ['templates', 'inject']);
gulp.task('default', ['server', 'watch']);
