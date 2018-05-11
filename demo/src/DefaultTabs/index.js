import React from 'react';
import ActiveTab from 'react-active-tab';

import Section from '../Section';
import Title from '../Title';

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
  }

  render() {
    return (
      <Section>
        <Title>Default tabs</Title>

        <ActiveTab
          tabs={TABS} 
          activeTab={this.state.activeTab}
          onTabClick={this.handleTabClick}
        />
      </Section>
    );
  }
}

export default DefaultTabs;