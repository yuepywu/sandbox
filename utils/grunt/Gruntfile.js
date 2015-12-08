module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('./package.json'),

		hub: {
			all: {
				src: ['../../assets/solutions/*/cfg/grunt/Gruntfile.js']
			},
		}

	});

	grunt.loadNpmTasks('grunt-hub');

	grunt.registerTask('default', ['hub']);

};
