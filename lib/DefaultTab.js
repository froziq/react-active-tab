'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  background-color: transparent;\n  border: none;\n  font-family: \'Roboto\', sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  color: #000;\n  cursor: pointer;\n  transition: border-color 0.25s;\n\n  &:focus {\n    outline: none;\n  }\n'], ['\n  height: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  background-color: transparent;\n  border: none;\n  font-family: \'Roboto\', sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  color: #000;\n  cursor: pointer;\n  transition: border-color 0.25s;\n\n  &:focus {\n    outline: none;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var DefaultTab = _styledComponents2.default.button(_templateObject);

exports.default = DefaultTab;
module.exports = exports['default'];