import React from 'react';
import ActiveTab from 'react-active-tab';

import Wrapper from './Wrapper';

const TABS = [
  { description: 'Tab first', value: 'tab1' },
  { description: 'Tab second', value: 'tab2' },
  { description: 'Tab third', value: 'tab3' },
  { description: 'Tab fourth', value: 'tab4' },
];

class DefaultTabs extends React.PureComponent {
  state = {
    activeTab: 'tab1',
  }

  handleTabClick = ({ target }) => {
    this.setState({ activeTab: target.value });
    //background: linear-gradient(135deg, #8363a1 0%, #74a8c3 100%);
  }

  render() {
    return (
      <Wrapper>
        <h1>react-active-tab Demo</h1>
        <ActiveTab
          tabs={TABS} 
          activeTab={this.state.activeTab}
          onTabClick={this.handleTabClick}
        />
      </Wrapper>
    );
  }
}

export default DefaultTabs;