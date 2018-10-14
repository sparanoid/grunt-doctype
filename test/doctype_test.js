'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.doctype = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options.html');
    var expected = grunt.file.read('test/expected/default_options.html');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  custom_selector: function(test){
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_selector.html');
    var expected = grunt.file.read('test/expected/custom_selector.html');
    test.equal(actual, expected, 'test custom doctype selector');

    test.done();
  },
  custom_transform: function(test){
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_transform.html');
    var expected = grunt.file.read('test/expected/custom_transform.html');
    test.equal(actual, expected, 'test custom doctype transform function');

    test.done();
  }
};
