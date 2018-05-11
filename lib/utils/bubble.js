'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n    0% {\n      transform: translateX(', 'px);\n      width: ', 'px;\n    }\n    35%{\n      width: ', 'px;\n    }\n    50% {\n      transform: translateX(', 'px);\n    }\n    100% {\n      transform: translateX(', 'px);\n      width: ', 'px;\n    }\n'], ['\n    0% {\n      transform: translateX(', 'px);\n      width: ', 'px;\n    }\n    35%{\n      width: ', 'px;\n    }\n    50% {\n      transform: translateX(', 'px);\n    }\n    100% {\n      transform: translateX(', 'px);\n      width: ', 'px;\n    }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var bubble = function bubble(fromWidth, toWidth, fromOffsetLeft, toOffsetLeft) {
  return (0, _styledComponents.keyframes)(_templateObject, fromOffsetLeft, fromWidth, Math.abs(fromWidth - toWidth) / 2, toOffsetLeft + toWidth / 2, toOffsetLeft, toWidth);
};

exports.default = bubble;
module.exports = exports['default'];