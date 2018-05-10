var _templateObject = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  bottom: ', ';\n  left: 0;\n  ', '\n  height: ', ';\n  border-radius: 6px;\n  background-color: ', ';  \n  transition: transform 0.4s ease, width 0.4s ease;\n'], ['\n  position: absolute;\n  bottom: ', ';\n  left: 0;\n  ', '\n  height: ', ';\n  border-radius: 6px;\n  background-color: ', ';  \n  transition: transform 0.4s ease, width 0.4s ease;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';
import PropTypes from 'prop-types';

import validateProperties from './utils/validateProperties';
import bubble from './utils/bubble';

var getAnimation = function getAnimation(animation, toWidth, fromWidth, toOffsetLeft, fromOffsetLeft) {
  if (animation === 'bubble') {
    var animationName = bubble(fromWidth, toWidth, fromOffsetLeft, toOffsetLeft);
    return '\n      animation: ' + animationName + ' 0.4s linear forwards;\n    ';
  }
  return '\n    width: ' + toWidth + 'px;\n    transform: translateX(' + toOffsetLeft + 'px);\n  ';
};

var Active = styled.div(_templateObject, function (props) {
  return validateProperties(props.bottom);
}, function (_ref) {
  var animation = _ref.animation,
      width = _ref.width,
      prevWidth = _ref.prevWidth,
      translate = _ref.translate,
      prevTranslate = _ref.prevTranslate;
  return getAnimation(animation, width, prevWidth, translate, prevTranslate);
}, function (props) {
  return validateProperties(props.height);
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
  width: PropTypes.number.isRequired,
  translate: PropTypes.number.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  animation: PropTypes.string
};

export default Active;