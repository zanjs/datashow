

import gulp         from 'gulp';
import uglify       from 'gulp-uglify';
import rename       from 'gulp-rename';
import notify       from 'gulp-notify';
import browserSync  from 'browser-sync';
import saveLicense  from 'uglify-save-license';
import header       from 'gulp-header';

import pkg          from './package.json';

const  reload  = browserSync.create().reload;


const banner = [
  '/*! ',
    '<%= pkg.name %> ',
    'v<%= pkg.version %> | ',
    `(c) ${new Date()} <%= pkg.author %> |`,
    ' <%= pkg.homepage %>',
  ' */',
  '\n'
].join('');



gulp.task('scripts', () => {
  gulp.src('./src/datashow.js')
    // .pipe(uglify({
    //   mangle: false,
    //   preserveComments: saveLicense
    // }))
    .pipe(uglify())
    .pipe(header(banner, { pkg }))
    .pipe(rename('datashow.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(reload({stream: true}))
    .pipe(notify("Found file: <%= file.relative %>!"));
});


gulp.task('watch', () => {

    browserSync.init({
        server: './'
    });
    
    // 看守所有.js档
    gulp.watch('./src/*.js', ['scripts']);
    gulp.watch('./*.html',['scripts']);
    
});


gulp.task('default', ['scripts','watch'], () => {});