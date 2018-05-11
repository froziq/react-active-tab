import React from 'react';
//import ActiveTab from 'react-active-tab';
import ActiveTab from '../../../src';

import { COLORS } from '../styleguide';
import Title from '../Title';
import Section from '../Section';

import StyledTabOne from './StyledTabOne';
import StyledTabTwo from './StyledTabTwo';

const TABS = [
  { description: 'Summer', value: 'funny', styled: StyledTabOne, },
  { description: 'Autumn', value: 'ugly' },
  { description: 'Winter', value: 'frozen', styled: StyledTabTwo },
  { description: 'Spring', value: 'rainy' },
];

class SeveralStyledTabs extends React.PureComponent {
  state = {
    activeTab: 'ugly',
  }

  handleTabClick = ({ target }) => {
    this.setState({ activeTab: target.value });
  }

  render() {
    return (
      <Section>
        <Title>Styled tabs</Title>

        <ActiveTab
          tabs={TABS} 
          activeTab={this.state.activeTab}
          onTabClick={this.handleTabClick}
          color={COLORS.indigo}
          bottom={-2}
          widthPercent={0.7}
        />
      </Section>
    );
  }
}

export default SeveralStyledTabs;