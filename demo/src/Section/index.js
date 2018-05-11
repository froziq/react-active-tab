import styled from 'styled-components';

import { BREAKPOINTS } from '../styleguide';

const Section = styled.section`
  width: 100%;
  height: 150px;
  margin-bottom: 20px;

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    height: 200px;
  }

  @media (min-width: ${BREAKPOINTS.desktop}px) {
    height: 250px;
  }
`;

export default Section;