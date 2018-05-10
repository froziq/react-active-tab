'use strict';

exports.__esModule = true;
var validateProperties = function validateProperties(value) {
  return typeof value === 'number' ? value + 'px' : value;
};

exports.default = validateProperties;
module.exports = exports['default'];