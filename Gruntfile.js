'use strict';

module.exports = function (grunt) {
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'src/main/webapp',
    test: 'src/main/test',
    dist: 'target/classes',
    bowerTest: grunt.file.readJSON('src/main/test/.bowerrc'),
    bowerProd: grunt.file.readJSON('.bowerrc'),
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: config,

    jshint: {
      files: [
        'Gruntfile.js',
        '<%= config.app %>/**/*.js',
        '<%= config.test %>/**/*.js',
        '!<%= config.app %>/lib/**/*.js',
        '!<%= config.test %>/<%= config.bowerTest.directory %>/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    bower: {
      all: {
        options: {
          install: false,
          targetDir: '<%= config.app %>/lib',
          layout: 'byComponent'
        }
      }
    },

    // Mocha testing framework configuration options
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://<%= connect.options.hostname %>:<%= connect.test.options.port %>/index.html']
        }
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      test: {
        options: {
          open: false,
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static(config.test),
              connect().use('/bower_components', connect.static('<%= config.test %>/bower_components'))
            ];
          }
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['<%= config.app %>/**/*.js'],
        dest: '<%= config.dist %>/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      prod: {
        src: ['<%= config.app %>/**/*.js'],
        dest: '<%= config.dist %>/<%= pkg.name %>.min.js'
      }
    },

    wiredep: {
      app: {
        ignorePath: '/^\/|\.\.\//',
        src: ['<%= config.app %>/index.html'],
        options: {
          directory: 'target-grunt/<%= config.bowerTest.directory %>',
          bowerJson: require('./target-grunt/bower.json')
        },
        fileTypes: {
          html: {
            replace: {
              js: function (filePath) {
                var removeBowerFolder = new RegExp('^.*' + config.bowerTest.directory + '\/', 'g');
                var removeIntermediateFolders = new RegExp('lib\/([A-Za-z0-9._%\\+-]+\/){1}([A-Za-z0-9._%\\+-]+\/){1,}', 'g');
                filePath = filePath.replace(removeBowerFolder, 'lib/').replace(removeIntermediateFolders, 'lib/$1/').replace('\/\/', '\/');

                return '<script src="' + filePath + '"></script>';
              }
            }
          }
        }
      },
      test: {
        ignorePath: /^\/|\.\.\//,
        src: ['<%= config.test %>/index.html'],
        options: {
          directory: '<%= config.test %>/<%= config.bowerTest.directory %>',
          bowerJson: require('./' + config.test + '/bower.json')
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.registerTask('development', ['jshint', 'bower:all', 'wiredep:app', 'test']);
  grunt.registerTask('test', ['wiredep:test', 'connect:test', 'mocha']);
  grunt.registerTask('production', ['jshint', 'concat', 'uglify']);
  grunt.registerTask('default', ['development']);
};