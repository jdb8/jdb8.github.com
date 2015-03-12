module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'sass/main.scss'
        }
      }
    },
    uncss: {
      dist: {
        files: {
          'css/main.css': ['index.html']
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'css/main.min.css': ['css/main.css'],
        }
      }
    },
    watch: {
      files: ['sass/*.scss'],
      tasks: ['sass', 'cssmin'],
    },
  });

  // Default task(s).
  grunt.registerTask('default', ['sass', 'uncss', 'cssmin']);

};
