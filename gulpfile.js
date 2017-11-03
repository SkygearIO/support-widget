const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

const paths = {
  scripts: ['./lib/*.js'],
  styles: ['./lib/*.css'],
  images: ['./lib/assets/*.svg']
};

gulp.task('clean', () =>
  del(['build'])
);

gulp.task('scripts', ['clean'], () =>
  gulp.src(paths.scripts)
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('build'))
  );

gulp.task('styles', ['clean'], () =>
  gulp.src(paths.styles)
    .pipe(cleanCSS())
    .pipe(gulp.dest('build'))
  );

gulp.task('images', ['clean'], () =>
  gulp.src(paths.images)
    .pipe(gulp.dest('build/assets'))
);

gulp.task('default', ['scripts', 'styles', 'images']);
