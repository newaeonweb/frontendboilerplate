'use strict';

module.exports = function (grunt) {

	// Unified Watch Object asign variables for easy editing
	var watchFiles = {
		clientJS:   ['assets/js/*.js', 'assets/js/vendor/*.js'],
		clientSrc:  ['src/libs/*.js'],
		clientCSS:  ['assets/css/**/*.css'],
		clientHTML: ['assets/*.html'],
		mochaTests: ['assets/test/unit/*.js'],
		concatBase: ['src/libs/*js', 'src/vendor/*js' ]
	};
	// Define the configuration for all the tasks
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
			'* <%= pkg.name %> - v<%= pkg.version %> - MIT LICENSE <%= grunt.template.today("dd") %> <%= grunt.template.today("mm") %> <%= grunt.template.today("yyyy") %>. \n' +
			'*/\n',
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
			},
			clientHTML: {
				files: watchFiles.clientHTML,
				//tasks: ['csslint'],
				options: {
					livereload: true
				}
			}
		},
		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			all: {
				src: watchFiles.clientJS.concat(watchFiles.clientSrc),
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
		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: false
			},
			base: {
				src: watchFiles.concatBase,
				dest: 'assets/js/<%= pkg.name %>-scripts.js'
			}
		},
		uglify: {
			options: {
				banner: '<%= banner %>',
				report: 'min'
			},
			base: {
				src: ['<%= concat.base.dest %>'],
				dest: 'assets/js/<%= pkg.name %>-scripts.min.js'
			}
		},
		connect: {
			server: {
				options: {
					keepalive: true,
					port: 8000,
					base: 'assets',
					hostname: 'localhost',
					debug: true,
					livereload: true,
					open: true
				}
			}
		},
		concurrent: {
			tasks: ['connect', 'watch'],
			options: {
				logConcurrentOutput: true
			}
		},
		karma: {
			unit: {
				configFile: 'test/karma.conf.js'
			}
		},
		mocha: {
  			test: {
    			src: ['test/**/*.html'],
				options: {
					timeout: 10000,
					 page: { 
						settings: { 
						  webSecurityEnabled: false,  // disable cors checks in phantomjs
						},  
      				},
					reporter: 'Spec',
					// Indicates whether 'mocha.run()' should be executed in
          			// 'bridge.js'
          			run: true,
				},
  			},
		}
	});
	
	// Time grunt to measure the tasks time
	require('time-grunt')(grunt);

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Making grunt default to force in order not to break the project if something fail.
	grunt.option('force', true);

	// Development task(s).
	grunt.registerTask('dev', ['concurrent']);

	// Lint task(s).
	grunt.registerTask('lint', ['jshint', 'csslint']);
	
	// Unit Testing with Karma
	grunt.registerTask('test', ['karma']);
	
	// Build task(s).
	grunt.registerTask('build', ['lint', 'concat', 'uglify']);
};
