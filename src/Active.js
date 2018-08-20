import styled from 'styled-components';
import PropTypes from 'prop-types';

import validateProperties from './utils/validateProperties';

const Active = styled.div`
  position: absolute;
  left: 0;
  border-radius: 6px;
  transition: transform 0.4s ease, width 0.4s ease;
  ${(props) => `
    bottom: ${validateProperties(props.bottom)};
    width: ${props.width}px;
    height: ${validateProperties(props.height)};
    background-color: ${props.color};  
    transform: translateX(${props.translate}px);
  `}
`;

Active.defaultProps = {
  color: '#ad0000',
  height: '2px',
  bottom: 0,
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
};

export default Active;
