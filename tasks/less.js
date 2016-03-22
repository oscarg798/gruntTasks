module.exports = function(grunt) {

  grunt.config.set('less',{
    dev:{
        options: {
          paths: ['<%=pkg.paths.cssPath%>'],
          expand: true
        },
        files: {
          '<%= pkg.paths.cssPath %>/styles.css': '<%= pkg.paths.lessPath %>/**.less'
        }
      }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
};
