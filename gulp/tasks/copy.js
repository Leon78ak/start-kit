'use strict';

module.exports = function () {
  $.gulp.task('copy', function() {
    return $.gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**/*.{png,jpg}'
    ], {
      base: 'source'
    })
    .pipe($.gulp.dest('build'));
  });
};
