import styled from 'styled-components';

import { COLORS } from '../styleguide';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, ${COLORS.shamrock} 0%, ${COLORS.scooter} 100%);
`;

export default Wrapper;