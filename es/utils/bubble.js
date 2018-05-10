var _templateObject = _taggedTemplateLiteralLoose(['\n    0% {\n      transform: translateX(', 'px);\n      width: ', 'px;\n    }\n    35%{\n      width: ', 'px;\n    }\n    50% {\n      transform: translateX(', 'px);\n    }\n    100% {\n      transform: translateX(', 'px);\n      width: ', 'px;\n    }\n'], ['\n    0% {\n      transform: translateX(', 'px);\n      width: ', 'px;\n    }\n    35%{\n      width: ', 'px;\n    }\n    50% {\n      transform: translateX(', 'px);\n    }\n    100% {\n      transform: translateX(', 'px);\n      width: ', 'px;\n    }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import { keyframes } from 'styled-components';

var bubble = function bubble(fromWidth, toWidth, fromOffsetLeft, toOffsetLeft) {
  return keyframes(_templateObject, fromOffsetLeft, fromWidth, Math.abs(fromWidth - toWidth) / 2, toOffsetLeft + toWidth / 2, toOffsetLeft, toWidth);
};

export default bubble;