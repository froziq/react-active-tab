import React from 'react';
import 'sanitize.css';

import '../global-styles';
import DefaultTabs from '../DefaultTabs';
import StyledTabs from '../StyledTabs';
import SeveralStyledTabs from '../SeveralStyledTabs';

import Wrapper from './Wrapper';
import Container from './Container';

class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Container>
          <DefaultTabs />

          <StyledTabs />

          <SeveralStyledTabs />
        </Container>
      </Wrapper>
    );
  }
}

export default App;