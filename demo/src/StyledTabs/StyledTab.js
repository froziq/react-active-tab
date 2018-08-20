import styled from 'styled-components';

import { BREAKPOINTS } from '../styleguide';

const StyledTab = styled.button`
  padding: 10px 5px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  transition: box-shadow 0.4s;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0 ,0, 0, 0.1), 0 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: ${BREAKPOINTS.desktop}px) {
    padding: 20px 30px;
    font-size: 25px;
  }
`;

export default StyledTab;