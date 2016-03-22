module.exports = function(grunt) {

  grunt.config.set('clean',{
    dev:['<%= pkg.paths.cssPath %>']
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
};
