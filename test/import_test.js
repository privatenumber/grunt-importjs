'use strict';

var grunt = require('grunt');

exports.import = {

	'forty-two': function(test) {

		test.equal(
			grunt.file.read('tmp/forty-two.js'),
			grunt.file.read('test/expected/forty-two.js'),
			'should describe what the default behavior is.'
		);

		test.done();
	},
	
	'import-empty-lines': function(test) {

		test.equal(
			grunt.file.read('tmp/import-empty-lines.js'),
			grunt.file.read('test/expected/import-empty-lines.js'),
			'should describe what the default behavior is.'
		);

		test.done();
	},
	
	'imports-circular-bar': function(test) {

		test.equal(
			grunt.file.read('tmp/imports-circular-bar.js'),
			grunt.file.read('test/expected/imports-circular-bar.js'),
			'should describe what the default behavior is.'
		);

		test.done();
	},
	
	'imports-circular-foo': function(test) {

		test.equal(
			grunt.file.read('tmp/imports-circular-foo.js'),
			grunt.file.read('test/expected/imports-circular-foo.js'),
			'should describe what the default behavior is.'
		);

		test.done();
	},
	
	'imports-foo-bar-baz': function(test) {

		test.equal(
			grunt.file.read('tmp/imports-foo-bar-baz.js'),
			grunt.file.read('test/expected/imports-foo-bar-baz.js'),
			'should describe what the default behavior is.'
		);

		test.done();
	},
	
	'imports-foo-foo-bar-foo': function(test) {

		test.equal(
			grunt.file.read('tmp/imports-foo-foo-bar-foo.js'),
			grunt.file.read('test/expected/imports-foo-foo-bar-foo.js'),
			'should describe what the default behavior is.'
		);

		test.done();
	},
	
	'imports-foo': function(test) {

		test.equal(
			grunt.file.read('tmp/imports-foo.js'),
			grunt.file.read('test/expected/imports-foo.js'),
			'should describe what the default behavior is.'
		);

		test.done();
	},
	
	'imports-imports-foo': function(test) {

		test.equal(
			grunt.file.read('tmp/imports-imports-foo.js'),
			grunt.file.read('test/expected/imports-imports-foo.js'),
			'should describe what the default behavior is.'
		);

		test.done();
	},
	
	'imports-not-found': function(test) {

		test.equal(
			grunt.file.read('tmp/imports-not-found.js'),
			grunt.file.read('test/expected/imports-not-found.js'),
			'should describe what the default behavior is.'
		);

		test.done();
	},
	
	'imports-self': function(test) {

		test.equal(
			grunt.file.read('tmp/imports-self.js'),
			grunt.file.read('test/expected/imports-self.js'),
			'should describe what the default behavior is.'
		);

		test.done();
	},
	
	'invalid-import-syntax': function(test) {

		test.equal(
			grunt.file.read('tmp/invalid-import-syntax.js'),
			grunt.file.read('test/expected/invalid-import-syntax.js'),
			'should describe what the default behavior is.'
		);

		test.done();
	},
	
	'trailing-comment-import': function(test) {

		test.equal(
			grunt.file.read('tmp/trailing-comment-import.js'),
			grunt.file.read('test/expected/trailing-comment-import.js'),
			'should describe what the default behavior is.'
		);

		test.done();
	}
};
