module.exports = function(grunt) {

	/* JIT inclusion of plugins */
	require('jit-grunt')(grunt);

	/* Cool task timer */
	require('time-grunt')(grunt);

	grunt.initConfig({
			// link to package file
			pkg 	: grunt.file.readJSON('package.json'),

			// Sass
			sass: {
				test: {
					options: {
						style: 'expanded',
						loadPath: './node_modules/bootcamp/dist' // or './bower_components/bootcamp/dist'
					},
					files: [{
						expand: true,
						cwd: './',
						src: ['*.scss', '../knife.scss'],
						dest: './',
						ext: '.css'
					}]
				}
			},

			// Bootcamp
			bootcamp: {
				test: {
					files: {
						src: ['./tests.css']
					}
				}
			},

			watch: {
				dist: {
					files: ['./**/*.scss'],
					tasks: ['sass', 'bootcamp']
				},
				justBuild : {
					files: ['./**/*.scss'],
					tasks: ['sass']
				}
			}

	});

	/* Our Grunt Tasks */
	grunt.registerTask('default', 'build all the examples and run tests and then keep watching', ['sass','bootcamp','watch']);
	grunt.registerTask('test','running the bootcamp test suite', ['sass','bootcamp']);
	grunt.registerTask('build','Just building the example files', ['sass','watch:justBuild']);
};