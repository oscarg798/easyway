module.exports = function(grunt) {

  grunt.config.set('compass', {
    dev:{
      options: {
        sassDir: 'assets/sass',
        cssDir: 'assets/styles'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-compass');
};
