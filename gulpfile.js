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
    mix.sass(['./resources/assets/sass/**/*.scss'], 'public/css/app.css')
       .scripts(['./resources/assets/js/**/*.js'], 'public/js/app.js');

    // Vendor CSS
    mix.styles([
        // Semantic UI
        './node_modules/semantic-ui/dist/semantic.min.css',
        './node_modules/semantic-ui-daterangepicker/daterangepicker.min.css'
    ], 'public/css/vendor.css');

    // Vendor fonts
    mix.copy('./node_modules/semantic-ui/dist/themes/default', 'public/css/themes/default');

    // Vendor JS
    mix.scripts([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/angular/angular.js',
        './node_modules/restangular/dist/restangular.min.js',
        './node_modules/angular-animate/angular-animate.min.js',
        './node_modules/angular-messages/angular-messages.min.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js',
        './node_modules/angular-fcsa-number/src/fcsaNumber.min.js',
        './node_modules/angular-smart-table/dist/smart-table.min.js',
        './node_modules/moment/min/moment.min.js',
        './node_modules/lodash/lodash.min.js',
        // Semantic UI
        './node_modules/semantic-ui/dist/semantic.min.js',
        './node_modules/semantic-ui-daterangepicker/daterangepicker.min.js',
        // Highcharts
        './node_modules/highcharts/highcharts.js',
        './node_modules/highcharts-ng/dist/highcharts-ng.min.js'
    ], 'public/js/vendor.js');

    mix.task('templateCache');
});

gulp.task('templateCache', () => {
    "use strict";
    let path = './resources/assets/tpls/**/*.html';
    let cacheTemplates = () => {
        gulp.src(path)
            .pipe(templateCache('templates.js', {
                module: 'expensesApp'
            }))
            .pipe(gulp.dest('public/js'));
    };
    cacheTemplates();
    gulp.watch(path, cacheTemplates);
});