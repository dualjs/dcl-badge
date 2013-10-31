/*jshint browser:true*/
var D = require('dual');
var Badge = require('./');

var demo = D.fromJSON(
    ['div', {'style':'width:400px;'}, [
        ['badge', {
            caption: 'Right badge',
            pull: 'right'
        }],
        ['badge', {
            caption: 'Left badge',
            pull: 'left'
        }],
        ['badge', {
            caption: 'just 42'
        }]
    ]], {
        badge: Badge
    }
);

document.body.appendChild(demo.domify());