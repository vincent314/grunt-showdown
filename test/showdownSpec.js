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

exports.showdown = {
    'Grunt showdown spec': function (test) {
        grunt.file.recurse('tmp/', function (abspath, rootdir, subdir, filename) {
            var actual = grunt.file.read(abspath);
            var expected = grunt.file.read('test/expected/' + ((subdir) ? subdir + '/' : '') + filename);
            test.equal(actual, expected,'Checking file ' + filename + ' failed');
        });

        test.done();
    }
};
