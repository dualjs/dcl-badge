/*
 * dcl-badge
 * https://github.com/dualjs/dcl-badge
 *
 * Copyright (c) 2013 Mark
 * Licensed under the MIT license.
 */

var D = require('dual');
var bsAttrs = require('dcl-bootstrap-attributes');
require('dcl-bootstrap');

module.exports = D.Widget
    .extend(bsAttrs.utils)
    .extend({
        ATTRS: {
            caption: {
                textAsset: 'root'
            }
        },

        initStructure: function() {
            this.$ = D.fromJSON([
                'span', {
                    'class': 'badge',
                    'ui:asset': 'root'
                }
            ]);
        }
    });