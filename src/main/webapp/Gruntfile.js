module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            core: {
                files: [{
                    expand: false,
                    cwd: 'src/main/webapp',
                    src: '**/*.js',
                    dest: "target/classes",
                    ext: '.min.js'
        }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};