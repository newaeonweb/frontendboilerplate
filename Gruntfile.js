'use strict';

module.exports = function (grunt) {

  // Unified Watch Object asign variables
  var watchFiles = {
    clientJS: ['assets/js/*.js', 'assets/js/vendor/*.js'],
    clientCSS: ['assets/css/**/*.css'],
    mochaTests: ['assets/test/unit/*.js']
  };

  // Define the configuration for all the tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Project settings
    // Watches files for changes and runs tasks based on the changed files
    watch: {
      clientJS: {
        files: watchFiles.clientJS,
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      clientCSS: {
        files: watchFiles.clientCSS,
        tasks: ['csslint'],
        options: {
          livereload: true
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      all: {
        src: watchFiles.clientJS.concat(watchFiles.serverJS),
        options: {
          jshintrc: '.jshintrc',
          reporter: require('jshint-stylish')
        }
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      all: {
        src: watchFiles.clientCSS
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          nodeArgs: ['--debug'],
          ext: 'js,html',
          watch: watchFiles.serverViews.concat(watchFiles.serverJS)
        }
      }
    },
    'node-inspector': {
      custom: {
        options: {
          'web-port': 1337,
          'web-host': 'localhost',
          'debug-port': 5858,
          'save-live-edit': true,
          'no-preload': true,
          'stack-trace-limit': 50,
          'hidden': []
        }
      }
    },
    concurrent: {
      tasks: ['nodemon', 'watch'],
      debug: ['nodemon', 'watch', 'node-inspector'],
      options: {
        logConcurrentOutput: true
      }
    },
	karma: {
		unit: {
    	configFile: 'karma.conf.js'
  		}
	}
  });

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Making grunt default to force in order not to break the project.
  grunt.option('force', true);

  // Default task(s).
  grunt.registerTask('dev', ['concurrent']);

  // Build task(s).
  grunt.registerTask('build', ['lint']);

  // Lint task(s).
  grunt.registerTask('lint', ['jshint', 'csslint']);
	
  // Unit Testing with Karma
  grunt.registerTask('test', ['karma']);


};
