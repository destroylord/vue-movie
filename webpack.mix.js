let mix = require('laravel-mix');

mix.js('vendor/js/app.js', 'vendor/dist')
    .sass('vendor/sass/main.scss', 'src/assets/css');