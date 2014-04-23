/*
 * grunt-import
 * https://github.com/hirokiosame/grunt-import
 *
 * Copyright (c) 2014 Hiroki Osame
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>',
			],
			options: {
				jshintrc: '.jshintrc',
			},
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp'],
		},

		// Configuration to be run (and then tested).
		import: {
			'tmp/forty-two.js': ['test/data/forty-two.js'],
			'tmp/import-empty-lines.js': ['test/data/import-empty-lines.js'],
			'tmp/imports-circular-bar.js': ['test/data/imports-circular-bar.js'],
			'tmp/imports-circular-foo.js': ['test/data/imports-circular-foo.js'],
			'tmp/imports-foo-bar-baz.js': ['test/data/imports-foo-bar-baz.js'],
			'tmp/imports-foo-foo-bar-foo.js': ['test/data/imports-foo-foo-bar-foo.js'],
			'tmp/imports-foo.js': ['test/data/imports-foo.js'],
			'tmp/imports-imports-foo.js': ['test/data/imports-imports-foo.js'],
			'tmp/imports-not-found.js': ['test/data/imports-not-found.js'],
			'tmp/imports-self.js': ['test/data/imports-self.js'],
			'tmp/invalid-import-syntax.js': ['test/data/invalid-import-syntax.js'],
			'tmp/trailing-comment-import.js': ['test/data/trailing-comment-import.js'],
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/import_test.js'],
		},

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'import', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
