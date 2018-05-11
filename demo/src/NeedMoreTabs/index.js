import React from 'react';
import ActiveTab from 'react-active-tab';

import { COLORS } from '../styleguide';
import Title from '../Title';
import Section from '../Section';

import StyledTab from './StyledTab';
import TabsWrapper from './TabsWrapper';

const TABS = [
  { description: 'Super hero', value: 'hero' },
  { description: 'Harry Potter', value: 'hogwarts' },
  { description: 'Tor', value: 'avengers' },
  { description: 'Secret agent', value: '007' },
  { description: 'Secret agent', value: '002' },
  { description: 'Secret agent', value: '003' },
  { description: 'Secret agent', value: '004' },
  { description: 'Secret agent', value: '005' },
];

class NeedMoreTabs extends React.PureComponent {
  state = {
    activeTab: 'hero',
  }

  handleTabClick = ({ target }) => {
    this.setState({ activeTab: target.value });
  }

  render() {
    return (
      <Section>
        <Title>Styled tabs</Title>

        <TabsWrapper>
          <ActiveTab
            tabs={TABS} 
            activeTab={this.state.activeTab}
            onTabClick={this.handleTabClick}
            color={COLORS.indigo}
            styledTab={StyledTab}
            bottom={-2}
            widthPercent={0.7}
          />
        </TabsWrapper>
      </Section>
    );
  }
}

export default NeedMoreTabs;