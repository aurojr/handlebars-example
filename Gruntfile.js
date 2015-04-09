module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                banner: '/*! ### <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/**/*.js',
                dest: 'target/classes/target.min.js'
            }
        }
    });

    //grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
    //grunt.registerTask('default', ['handlebars', 'uglify']);
};