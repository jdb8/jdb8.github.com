module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },
    uncss: {
      dist: {
        options: {
          ignoreSheets : [/fonts.googleapis/]
        },
        files: {
          'css/main.css': ['index.html']
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'css/main.css': ['css/main.css']
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['compass', 'uncss', 'cssmin']);

};