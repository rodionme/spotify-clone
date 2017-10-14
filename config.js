global.config = {
  build: {
    src: {
      html: [
        './src/views/**/*.pug',
        '!./src/views/**/_*.pug'
      ],
      css: './src/styles/main.styl',
      img: 'src/img/**/*.{png,jpg,gif,svg}',
      fonts: 'src/fonts/**/*.{eot,ttf,svg,otf,woff,woff2}'
    },
    dest: {
      css: 'dist/css',
      html: 'dist/',
      img: 'dist/img',
      fonts: 'dist/fonts',
      full: 'dist/**/*.*'
    }
  },
  watch: {
    css: 'src/{styles,vendor}/**/*.styl',
    html: 'src/views/**/*.pug',
    img: 'src/img/**/*.{png,jpg,gif,svg}',
    fonts: 'src/fonts/**/*.{eot,ttf,svg,otf,woff,woff2}'
  },
  browsers: ['last 2 versions']
};

exports.config = config;