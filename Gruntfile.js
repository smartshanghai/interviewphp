module.exports = function(grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    outputStyle: "expanded"
                },
                files: {
                    'assignments/a/stylesheet.css': 'assignments/a/scss/main.scss'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);
    grunt.loadNpmTasks('grunt-sass');
};