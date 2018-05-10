import styled from 'styled-components';

const StyledTab = styled.button`
  height: 100%;
  padding-left: 25px;
  padding-right: 35px;
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

export default StyledTab;
