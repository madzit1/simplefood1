const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const svgSprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');


function images() {
    return src(['app/images/src/*.*', '!app/images/src/*.svg'])
        .pipe(newer('app/images/dist'))
        .pipe(avif({ quality: 50 }))
        .pipe(src('app/images/src/*.*'))
        .pipe(newer('app/images/dist'))
        .pipe(webp())
        .pipe(src('app/images/src/*.*'))
        .pipe(newer('app/images/dist'))
        .pipe(imagemin())
        .pipe(dest('app/images/dist'))
}

function svgSprites() {
    return src("images/icon/*.svg")
        .pipe(
            svgSprite({
                mode: {
                    stack: {
                        sprite: "app/images/sprite.svg",
                    },
                },
            })
        )
        .pipe(dest("app/images/icon"));
}

function svgSprites() {
    return src("app/images/icon/*.svg")
        .pipe(
            svgSprite({
                mode: {
                    stack: {
                        sprite: "sprite.svg",
                    },
                },
            })
        )
        .pipe(dest("app/images"));
}


function svgSprites() {
    return src('app/images/icon/*.svg')
      .pipe(cheerio({
        run: ($) => {
          $("[fill]").removeAttr("fill");
          $("[stroke]").removeAttr("stroke");
          $("[style]").removeAttr("style");
        },
        parserOptions: { xmlMode: true },
      })
      )
      .pipe(
        svgSprite({
          mode: {
            stack: {
              sprite: 'sprite.svg',
            },
          },
        })
      )
      .pipe(dest('app/images'));
  }

  function svgSprites() {
    return src('app/images/icon/*.svg')
      .pipe(cheerio({
        run: ($) => {
          $("[fill]").removeAttr("fill");
          $("[stroke]").removeAttr("stroke");
          $("[style]").removeAttr("style");
        },
        parserOptions: { xmlMode: true },
      })
      )
      .pipe(replace('&gt;', '>'))
      .pipe(
        svgSprite({
          mode: {
            stack: {
              sprite: 'sprite.svg',
            },
          },
        })
      )
      .pipe(dest('app/images'));
  }
  

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/mixitup/dist/mixitup.min.js',
        'node_modules/slick-carousel/slick/slick.js',
        'app/js/main.js',
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function styles() {
    return src('app/scss/style.scss')
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 version'] }))
        .pipe(concat('style.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function watching() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/images/src'], images);
    watch(['app/js/main.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
}

function cleanDist() {
    return src('dist')
        .pipe(clean())
}

function building() {
    return src([
        'app/css/style.min.css',
        'app/images/dist/*.*',
        'app/js/main.min.js',
        'app/**/*.html'
    ], { base: 'app' })
        .pipe(dest('dist'))
}

exports.styles = styles;
exports.images = images;
exports.svgSprites = svgSprites;
exports.scripts = scripts;
exports.watching = watching;

exports.build = series(cleanDist, building);
exports.default = parallel(svgSprites, styles, images, scripts, watching);