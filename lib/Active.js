'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  bottom: ', ';\n  left: 0;\n  ', '\n  height: ', ';\n  border-radius: 6px;\n  background-color: ', ';  \n  transition: transform 0.4s ease, width 0.4s ease;\n'], ['\n  position: absolute;\n  bottom: ', ';\n  left: 0;\n  ', '\n  height: ', ';\n  border-radius: 6px;\n  background-color: ', ';  \n  transition: transform 0.4s ease, width 0.4s ease;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validateProperties = require('./utils/validateProperties');

var _validateProperties2 = _interopRequireDefault(_validateProperties);

var _bubble = require('./utils/bubble');

var _bubble2 = _interopRequireDefault(_bubble);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var getAnimation = function getAnimation(animation, toWidth, fromWidth, toOffsetLeft, fromOffsetLeft) {
  if (animation === 'bubble') {
    var animationName = (0, _bubble2.default)(fromWidth, toWidth, fromOffsetLeft, toOffsetLeft);
    return '\n      animation: ' + animationName + ' 0.4s linear forwards;\n    ';
  }
  return '\n    width: ' + toWidth + 'px;\n    transform: translateX(' + toOffsetLeft + 'px);\n  ';
};

var Active = _styledComponents2.default.div(_templateObject, function (props) {
  return (0, _validateProperties2.default)(props.bottom);
}, function (_ref) {
  var animation = _ref.animation,
      width = _ref.width,
      prevWidth = _ref.prevWidth,
      translate = _ref.translate,
      prevTranslate = _ref.prevTranslate;
  return getAnimation(animation, width, prevWidth, translate, prevTranslate);
}, function (props) {
  return (0, _validateProperties2.default)(props.height);
}, function (props) {
  return props.color;
});

Active.defaultProps = {
  color: '#ad0000',
  height: '2px',
  bottom: 0,
  animation: ''
};

Active.propTypes = {
  width: _propTypes2.default.number.isRequired,
  translate: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  bottom: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  color: _propTypes2.default.string,
  animation: _propTypes2.default.string
};

exports.default = Active;
module.exports = exports['default'];