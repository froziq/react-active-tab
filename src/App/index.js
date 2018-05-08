import React from 'react';

import ActiveTab from 'ActiveTab';

const TABS = [
  { description: 'Tab first', value: 'tab1' },
  { description: 'Tab second', value: 'tab2' },
  { description: 'Tab third', value: 'tab3' },
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
        widthProcent={0.6}
      />
    );
  }
}

export default App;
