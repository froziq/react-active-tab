import styled from 'styled-components';

const StyledTab = styled.button`
  padding: 20px 30px;
  font-size: 32px;
  cursor: pointer;
  border: none;
  transition: box-shadow 0.4s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0 ,0, 0, 0.1), 0 0 1px 1px rgba(0, 0, 0, 0.1);
  }
`;

export default StyledTab;