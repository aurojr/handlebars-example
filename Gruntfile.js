'use strict';

module.exports = function (grunt) {
  var serveStatic = require('serve-static');
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'src/main/webapp',
    test: 'src/main/test',
    dist: 'target/classes',
    bower: grunt.file.readJSON('.bowerrc'),
    filePathFunction: function (filePath) {
      var removeBowerFolder = new RegExp('^.*' + config.bower.directory + '\/', 'g');
      var removeIntermediateFolders = new RegExp('lib\/([A-Za-z0-9._%\\+-]+\/){1}([A-Za-z0-9._%\\+-]+\/){1,}', 'g');
      filePath = filePath.replace(removeBowerFolder, 'lib/').replace(removeIntermediateFolders, 'lib/$1/').replace('\/\/', '\/');

      return '<script src="' + filePath + '"></script>';
    }
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: config,

    jshint: {
      files: [
        //'Gruntfile.js',
        '<%= config.app %>/**/*.js',
        '<%= config.test %>/**/*.js',
        '!<%= config.app %>/lib/**/*.js',
        '!<%= config.test %>/lib/**/*.js'
      ],
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
      },
      test: {
        options: {
          install: true,
          targetDir: '<%= config.test %>/lib',
          layout: 'byComponent'
        }
      }
    },

    // Mocha testing framework configuration options
    mocha_phantomjs: {
      all: {
        options: {
          reporter: 'progress',
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
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              serveStatic(config.app),
              connect().use('/lib', serveStatic('<%= config.app %>/lib'))
            ];
          }
        }
      },
      test: {
        options: {
          open: false,
          port: 9001,
          middleware: function (connect) {
            return [
              serveStatic(config.test),
              connect().use('/lib', serveStatic('<%= config.test %>/lib'))
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
          cwd: '<%= config.app %>/lib',
          directory: 'target-grunt/<%= config.bower.directory %>',
          bowerJson: require('./target-grunt/bower.json')
        },
        fileTypes: {
          html: {
            replace: {
              js: config.filePathFunction,
              css: config.filePathFunction
            }
          }
        }
      },
      test: {
        ignorePath: /^\/|\.\.\//,
        src: ['<%= config.test %>/index.html'],
        options: {
          devDependencies: true
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.registerTask('development', ['jshint', 'bower:all', 'wiredep:app', 'test']);
  grunt.registerTask('test', ['bower:test','wiredep:test', 'connect:test', 'mocha_phantomjs']);
  grunt.registerTask('production', ['jshint', 'concat', 'uglify']);
  grunt.registerTask('default', ['development']);
};