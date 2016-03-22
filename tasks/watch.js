module.exports = function(grunt) {

  grunt.config.set('watch',{
    dev:{
      files: ['<%= pkg.paths.lessPath %>/**.less'],
      tasks: ['less:dev']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
};
