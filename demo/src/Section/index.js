import styled from 'styled-components';

import { BREAKPOINTS } from '../styleguide';

const Section = styled.section`
  width: 100%;
  margin-bottom: 20px;
  min-height: 200px;

  @media (min-width: ${BREAKPOINTS.tablet}px) {
  }

  @media (min-width: ${BREAKPOINTS.desktop}px) {
    min-height: 250px;
  }
`;

export default Section;