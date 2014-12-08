// Grunt tasks
module.exports = function (grunt) {
	
	'use strict';

	// Unified Watch Object asign variables for easy editing
	var watchFiles = {
		clientJS:   ['assets/js/*.js', 'assets/js/vendor/*.js'],
		clientSrc:  ['src/scripts/*.js'],
		clientCSS:  ['assets/css/**/*.css'],
		clientPreprocessor: ['src/preprocessor/*.less', 'src/preprocessor/*.scss'],
		clientHTML: ['assets/*.html'],
		mochaTests: ['assets/test/unit/*.js'],
		concatBase: ['src/scripts/*js', 'src/vendor/*js' ]
	};
	// Define the configuration for all the tasks
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
			'* <%= pkg.name %> - v<%= pkg.version %> - MIT LICENSE <%= grunt.template.today("dd") %> <%= grunt.template.today("mm") %> <%= grunt.template.today("yyyy") %>. \n' +
			'* @author <%= pkg.author %>\n' +	
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
			clientPreprocessor: {
				files: watchFiles.clientPreprocessor,
				tasks: ['less', 'sass'],
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
					reporter: require('jshint-stylish'),
					ignores: ['assets/js/*.min.js']
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
		recess: {
			options: {
				compile: true,
				banner: '<%= banner %>'
			},
			style: {
				options: {
					compress: false
				},
				src: ['src/preprocessor/*.less'],
				dest: 'assets/css/<%= pkg.name %>-style.css'
			}
		},
		sass: {
			dist: {
				files: [{
					'assets/css/<%= pkg.name %>-style.css': 'src/preprocessor/*.scss'
				}]
			}
		},		
		connect: {
			server: {
				options: {
					keepalive: true,
					port: 8000,
					base: '.',
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
		bower: {
			install: {
				options: {
					layout: 'byComponent',
					install: true,
					verbose: false,
					cleanTargetDir: true,
					cleanBowerDir: false,
					bowerOptions: {
						forceLatest: true,
    					//production: true
					}
				}
			}
		},
		injector: {
			options: {
				min: false,
				addRootSlash: false,
				relative: true
			},
// Uncomment to use with others files.
//			local_dependencies: {
//      			files: {
//        			'index.html': ['js/*.js', 'css/*.css'],
//      			}
//    		},
			bower_dependencies: {
				files: {
        			'index.html': ['bower.json'],
      			}
    		}
		},
		mocha: {
			test: {
				src: ['test/**/*.html'],
				options: {
					timeout: 10000,
					page: {
						settings: {
							// disable cors checks in phantomjs
							webSecurityEnabled: false  
						}
					},
					reporter: 'Spec',
					// Indicates whether 'mocha.run()' should be executed in'bridge.js'
					run: true
				}
			}
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
	
	// Css task(s).
	grunt.registerTask('less', ['recess']);
	grunt.registerTask('sass', ['sass']);

	// Lint task(s).
	grunt.registerTask('lint', ['jshint', 'csslint']);
	
	// Unit Testing with Karma
	grunt.registerTask('test', ['mocha']);
	
	// Build task(s).
	grunt.registerTask('build', ['lint', 'concat', 'uglify', 'test']);
};
