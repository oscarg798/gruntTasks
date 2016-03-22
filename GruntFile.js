module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('dev', [
    'clean:dev',
    'less:dev'
  ]);

  grunt.registerTask('culo',['watch:dev'])

};
