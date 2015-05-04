'use strict';

module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        app: 'src/main/webapp',
        dist: 'target/classes'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        config: config,

        jshint: {
            files: [
                'Gruntfile.js',
                'src/main/webapp/**/*.js',
                'test/**/*.js',
                '!src/main/webapp/lib/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
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

        wiredep: {
            app: {
                ignorePath: /^\/|\.\.\//,
                src: ['<%= config.app %>/index.html']
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

    grunt.registerTask('development', ['jshint', 'concat', 'wiredep']);
    grunt.registerTask('production', ['jshint', 'uglify']);
    grunt.registerTask('default', ['development']);
};