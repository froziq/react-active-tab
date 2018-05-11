import React from 'react';
import 'sanitize.css';
import 'global-styles';

import DefaultTabs from 'DefaultTabs';
import StyledTabs from 'StyledTabs';

import Wrapper from './Wrapper';

class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <DefaultTabs />

        <StyledTabs />
      </Wrapper>
    );
  }
}

export default App;
