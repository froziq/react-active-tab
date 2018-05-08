import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tab = styled.button`
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  background-color: transparent;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #000;
  cursor: pointer;
  transition: border-color 0.25s;

  &:focus {
    outline: none;
  }
`;

Tab.defaultProps = {
  active: false,
};

Tab.propTypes = {
  active: PropTypes.bool,
};

export default Tab;
