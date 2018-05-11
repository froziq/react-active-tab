import styled from 'styled-components';

import { COLORS, BREAKPOINTS } from '../styleguide';

const StyledTabOne = styled.button`
  display: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: linear-gradient(90deg, ${COLORS.persimmon} 0%, ${COLORS.casablanca} 100%);

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    display: inline-block;
    padding: 15px 30px;
    font-size: 20px;
  }

  @media (min-width: ${BREAKPOINTS.desktop}px) {
    padding: 20px 30px;
    font-size: 32px;
  }
`;

export default StyledTabOne;