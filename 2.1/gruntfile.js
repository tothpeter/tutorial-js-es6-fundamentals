module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/es5.js': 'js/es6.js'
        }
      }
    },

    watch: {
      config: {
        files: ['js/*'],
        tasks: ['es6'],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('es6', ['babel']);
  grunt.registerTask('default', ['watch']);
};
