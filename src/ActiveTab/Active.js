import styled from 'styled-components';
import PropTypes from 'prop-types';

const validateProperties = (value) => {
  if (typeof value === 'number') return `${value}px`;
  return value;
};

const Active = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${(props) => validateProperties(props.width)};
  height: ${(props) => validateProperties(props.height)};
  border-radius: 6px;
  background-color: ${(props) => props.color};
  transform: translateX(${(props) => props.translate}px);
  transition: transform 0.4s ease, width 0.4s ease;
`;

Active.defaultProps = {
  color: 'black',
  height: '2px',
  translate: 0,
};

Active.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  color: PropTypes.string,
  translate: PropTypes.number,
};

export default Active;
