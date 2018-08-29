const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const publicPath = '../public/vendor/media';

mix.autoload({});
mix.sourceMaps();
mix.disableNotifications();
mix.setPublicPath(publicPath);

mix
    .sass('./resources/assets/sass/media.scss', 'css')
    .js('./resources/assets/js/media.js', 'js')
    .js('./resources/assets/js/jquery.addMedia.js', 'js')
    .js('./resources/assets/js/integrate.js', 'js');

mix
    .copy('./../public/vendor/media/mix-manifest.json', './public/assets/mix-manifest.json')
    .copyDirectory('./../public/vendor/media/css', './public/assets/css')
    .copyDirectory('./../public/vendor/media/js', './public/assets/js');
