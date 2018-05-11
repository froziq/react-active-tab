import React from 'react';
import ActiveTab from 'react-active-tab';
import { COLORS } from 'styleguide';

import StyledTab from './StyledTab';
import TabsWrapper from './TabsWrapper';
import Wrapper from './Wrapper';

const TABS = [
  { description: 'Styled tab 1', value: 'styledTab1' },
  { description: 'Styled tab 2', value: 'styledTab2' },
  { description: 'Styled tab 3', value: 'styledTab3' },
  { description: 'Styled tab 4', value: 'styledTab4' },
];

class StyledTabs extends React.PureComponent {
  state = {
    activeTab: 'styledTab1',
  }

  handleTabClick = ({ target }) => {
    this.setState({ activeTab: target.value });
  }

  render() {
    return (
      <Wrapper>
        <h1>react-active-tab Demo</h1>
        <TabsWrapper>
          <ActiveTab
            tabs={TABS} 
            activeTab={this.state.activeTab}
            onTabClick={this.handleTabClick}
            color={COLORS.indigo}
            styledTab={StyledTab}
          />
        </TabsWrapper>
      </Wrapper>
    );
  }
}

export default StyledTabs;