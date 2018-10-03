module.exports = function(grunt) {

    // Configuration 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		
		/* Plugin Configuration */

		less: {
			dist: {
				options: {
					//style: 'compressed'
					style: 'expanded'
				},
				files: {
					'css/style.css': 'less/style.less'
				}
			}                                 
		},
		postcss: {
            options: {
                processors: [
                        require('autoprefixer')({
                            browsers: ['Explorer >= 10', 'Edge >= 13', 'Firefox >= 38', 'Chrome >= 28', 'Safari >= 8'],
                            remove: false
                        })
                    ]
            },
            dist: {
                src: [
                    'css/style.css'
                    ]
            }
        },
		watch: {
			css: {
				files: '**/*.less',
				/*tasks: ['lesslint', 'less'],*/
				tasks: ['less', 'postcss'],
				options: {
					livereload: true,
				}
			}
		},
		
	  	lesslint: {
	  		allFiles: [
	  			'less/*.less'
	  		],
	  		options: {
      			reporterOutput: 'css/less-lint-report.xml',
				colorizeOutput: true
	  		}
	  	},
        jshint: {
            files: {
                src: ['js/*.js'],
            },
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
                reporterOutput: 'js/jshint.xml',
            },
        }
    });

    // Load Plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-lesslint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-postcss');

    //Register Tasks 
    grunt.registerTask('default', ['lesslint', 'less']);
    grunt.registerTask('check-lss', ['lesslint', 'less']);
    grunt.registerTask('js', ['jshint']);
};
