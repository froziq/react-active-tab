import React from 'react';
import 'sanitize.css';
import 'prismjs/themes/prism.css';

import '../global-styles';
import DefaultTabs from '../DefaultTabs';
import StyledTabs from '../StyledTabs';
import SeveralStyledTabs from '../SeveralStyledTabs';

import Wrapper from './Wrapper';

class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <DefaultTabs />

        <StyledTabs />

        <SeveralStyledTabs />
      </Wrapper>
    );
  }
}

export default App;