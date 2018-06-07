import styled from 'styled-components';

import { COLORS, BREAKPOINTS } from '../styleguide';

const StyledTabTwo = styled.button`
  padding: 10px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: linear-gradient(90deg, ${COLORS.picton} 0%, ${COLORS.havelock} 100%);

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    font-size: 20px;
  }

  @media (min-width: ${BREAKPOINTS.desktop}px) {
    padding: 20px 30px;
    font-size: 25px;
  }
`;

export default StyledTabTwo;