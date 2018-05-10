import React from 'react';

import ActiveTab from 'ActiveTab';
import StyledTab from 'StyledTab';
import StyledTabOne from 'StyledTabOne';
import StyledTabTwo from 'StyledTabTwo';

const TABS = [
  { description: 'Tab first', value: 'tab1', styled: StyledTabOne, },
  { description: 'Tab second', value: 'tab2' },
  { description: 'Tab third', value: 'tab3', styled: StyledTabTwo, },
  { description: 'Tab fourth', value: 'tab4' },
];

class App extends React.PureComponent {
  state = {
    activeTab: 'tab1',
  }

  handleTabClick = ({ target }) => {
    this.setState({ activeTab: target.value });
  }

  render() {
    return (
      <ActiveTab 
        tabs={TABS} 
        activeTab={this.state.activeTab}
        onTabClick={this.handleTabClick}
        widthPercent={0.6}
        height={7}
        bottom={-5}
        styledTab={StyledTab}
        animation="bubble"
      />
    );
  }
}

export default App;
