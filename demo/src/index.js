import React, {Component} from 'react';
import {render} from 'react-dom';

import ActiveTab from '../../src'

const TABS = [
  { description: 'Tab first', value: 'tab1' },
  { description: 'Tab second', value: 'tab2' },
  { description: 'Tab third', value: 'tab3' },
  { description: 'Tab fourth', value: 'tab4' },
];

class Demo extends Component {
  state = {
    activeTab: 'tab1',
  }

  handleTabClick = ({ target }) => {
    this.setState({ activeTab: target.value });
  }

  render() {
    return <div>
      <h1>react-active-tab Demo</h1>
      <ActiveTab
        tabs={TABS} 
        activeTab={this.state.activeTab}
        onTabClick={this.handleTabClick}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'));
