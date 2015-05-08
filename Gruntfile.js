module.exports = function(grunt) {

    // Auto load plugins
    require('load-grunt-tasks')(grunt);

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Javascript linter
        jshint: {
            all: ['Gruntfile.js', '*.js']
        },

        // Minify scripts
        uglify: {
            options: {
            	mangle: false
            },
            main: {
                files: {
                    '*.min.js': ['*.js']
                }
            }
        },

        // Compile SASS
        sass: {
            options: {
                includePaths: ['bower_components/foundation/scss']
            },
            // Production
            production: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: false
                },
                files: { 
                    'css/*.min.css': 'scss/*.scss' 
                }
            },
            // Development
            development: {
            	options: {
                    outputStyle: 'expanded',
                    sourceMap: true
            	},
            	files: {
                    'css/*.css': 'scss/*.scss' 
            	}
            }
        },

        // Watch and live reload
        watch: {
            sass: {
                files: ['*.scss'],
                tasks: ['sass:development']
            },
            other: {
                files: ['*.html', '*.htm', '*.js']
            },
            // Live reload on file changes
            options: { 
                livereload: true 
            }
        }
    });

    //Default task(s)
    grunt.registerTask('livereload', ['watch']);
    grunt.registerTask('checkjs', ['jshint']);
    grunt.registerTask('default', ['uglify', 'sass']);
};