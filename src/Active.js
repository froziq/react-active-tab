import styled from 'styled-components';
import PropTypes from 'prop-types';

import validateProperties from './utils/validateProperties';
import bubble from './utils/bubble';

const getAnimation = (animation, toWidth, fromWidth, toOffsetLeft, fromOffsetLeft) => {
  if (animation === 'bubble') {
    const animationName = bubble(fromWidth, toWidth, fromOffsetLeft, toOffsetLeft);
    return `
      animation: ${animationName} 0.4s linear forwards;
    `;
  }
  return `
    width: ${toWidth}px;
    transform: translateX(${toOffsetLeft}px);
  `;
};

const Active = styled.div`
  position: absolute;
  bottom: ${(props) => validateProperties(props.bottom)};
  left: 0;
  ${({ animation, width, prevWidth, translate, prevTranslate}) => 
    getAnimation(animation, width, prevWidth, translate, prevTranslate)
  }
  height: ${(props) => validateProperties(props.height)};
  border-radius: 6px;
  background-color: ${(props) => props.color};  
  transition: transform 0.4s ease, width 0.4s ease;
`;

Active.defaultProps = {
  color: '#ad0000',
  height: '2px',
  bottom: 0,
  animation: '',
};

Active.propTypes = {
  width: PropTypes.number.isRequired,
  translate: PropTypes.number.isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  bottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  color: PropTypes.string,
  animation: PropTypes.string,
};

export default Active;
