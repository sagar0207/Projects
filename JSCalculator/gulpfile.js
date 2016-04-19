var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus');
    // watch
    gulp.task('watch',function() {
      gulp.watch('./jade/*.jade',['jade-watch']);
      gulp.watch('./stylesheets/Stylus/style.styl',['stylus-watch']);
    });
    // jade

    gulp.task('jade-watch',['jade']);
    gulp.task('jade', function(){
      return gulp.src('./jade/*.jade')
      .pipe(jade({
        pretty:true
      }))
      .pipe(gulp.dest('./html'));
    });

    // stylus

    gulp.task('stylus-watch',['stylus']);
    gulp.task('stylus',function(){
      gulp.src('./stylesheets/Stylus/style.styl')
          .pipe(stylus())
          .pipe(gulp.dest('./stylesheets/css'));
    });
