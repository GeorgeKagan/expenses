const gulp = require('gulp');
const elixir = require('laravel-elixir');
const templateCache = require('gulp-angular-templatecache');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
       .scripts('app.js');

    mix.scripts([
        './node_modules/angular/angular.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js'
    ], 'public/js/vendor.js');

    mix.task('templateCache');
});

gulp.task('templateCache', function () {
    return gulp.src('./resources/assets/tpls/**/*.html')
        .pipe(templateCache('templates.js', {
            root: 'js/',
            module: 'expensesApp'
        }))
        .pipe(gulp.dest('public/js'));
});