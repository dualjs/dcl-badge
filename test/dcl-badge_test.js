'use strict';

var Badge = require('../lib/dcl-badge.js');

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

exports['dcl-badge'] = {
    setUp: function(done) {
        // setup here
        done();
    },

    'main': function(test) {
        test.expect(1);

        var b = new Badge();
        b.setCaption('42');
        test.equal(b.stringify(), '<span class="badge">42</span>');

        test.done();
    },

    'pull-right': function(test) {
        test.expect(1);

        var b = new Badge();
        b.setCaption('42');
        b.setPull('right');
        test.equal(b.stringify(), '<span class="badge pull-right">42</span>');

        test.done();
    }
};