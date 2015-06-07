// -- Dependencies -------------------------------------------------------------

var gulp               = require('gulp');
var webserver          = require('gulp-webserver');
var inject             = require('gulp-inject');
var gulpif             = require('gulp-if');
var useref             = require('gulp-useref');
var uglify             = require('gulp-uglify');
var angularFilesort    = require('gulp-angular-filesort');
var ngAnnotate         = require('gulp-ng-annotate');
var templateCache      = require('gulp-angular-templatecache');

var path = {
  root    : './app/',
  scripts : './app/js/',
  styles  : './app/css/',
  views   : './app/views/',
  dist    : './dist/'
};

// -- Tasks --------------------------------------------------------------------

// Development server
gulp.task('server', function() {
  gulp.src(path.root)
    .pipe(webserver({
      livereload: true,
      host: '0.0.0.0',
      port: 8080,
      fallback: 'index.html'
    }));
});

// Inject scripts links into HTML
gulp.task('inject', function() {
  return gulp.src('index.html', { cwd: './app' })
    .pipe(inject(
      gulp.src([ path.scripts + '**/*.js' ]).pipe(angularFilesort()), {
        read: false,
        ignorePath: '/app'
      }))
    .pipe(gulp.dest(path.root));
});

// Compress Angular views from HTML to JS script to cache it
gulp.task('templates', function() {
  gulp.src('./app/views/**/*.html')
    .pipe(templateCache({
      root: path.views,
      module: 'directorio.templates',
      standalone: true
    }))
    .pipe(gulp.dest('./app/js'));
});

// Concat and compress JS files HTML linked to production
gulp.task('compress', function() {
  var assets = useref.assets();

  return gulp.src(path.root + 'index.html')
    .pipe(assets)
    .pipe(gulpif('*.js', ngAnnotate()))
    .pipe(gulpif('*.js', uglify({ mangle: false })))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest(path.dist));
});

// Copy files from development env to production ready
gulp.task('copy', function() {
  gulp.src(path.root + 'index.html')
    .pipe(useref())
    .pipe(gulp.dest(path.dist));
  gulp.src('./app/img/*')
    .pipe(gulp.dest(path.dist + 'img'));
});

// Watch changes and run tasks
gulp.task('watch', function() {
  gulp.watch([ path.views + '**/*.html' ], [ 'templates' ]);
  gulp.watch([ path.styles + '**/*.css' ], [ 'inject' ]);
  gulp.watch([ path.scripts + '**/*.js' ], [ 'inject' ]);
});

// -- Run Tasks ----------------------------------------------------------------

gulp.task('build', [ 'templates', 'compress', 'copy' ]);
gulp.task('start', [ 'templates', 'inject' ]);
gulp.task('default', [ 'server', 'watch' ]);
