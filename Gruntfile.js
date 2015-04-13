module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['Gruntfile.js', 'src/main/webapp/**/*.js', 'test/**/*.js', '!src/main/webapp/lib/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/main/webapp/**/*.js'],
                dest: 'target/classes/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            prod: {
                src: ['src/main/webapp/**/*.js'],
                dest: 'target/classes/<%= pkg.name %>.min.js'
            }
        },

        qunit: {
            files: ['test/**/*.html']
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('development', ['jshint', 'concat']);
    grunt.registerTask('production', ['jshint', 'uglify']);
};