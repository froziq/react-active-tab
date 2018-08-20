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
];

class StyledTabs extends React.PureComponent {
  state = {
    activeTab: 'hero',
  }

  handleTabClick = ({ target }) => {
    this.setState({ activeTab: target.value });
  }

  render() {
    return (
      <Section>
        <Title>All styled tabs</Title>

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

        <pre>
          <code className="language-javascript">{`
// StyledTab.js
import styled from 'styled-components';

const StyledTab = styled.button'
  padding: 10px 5px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  transition: box-shadow 0.4s;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0 ,0, 0, 0.1), 0 0 1px 1px rgba(0, 0, 0, 0.1);
  }
';

export default StyledTab;

// imdex.js
import StyledTab from './StyledTab';
...

...
<ActiveTab
  tabs={TABS} 
  activeTab={this.state.activeTab}
  onTabClick={this.handleTabClick}
  color={COLORS.indigo}
  styledTab={StyledTab}
  bottom={-2}
  widthPercent={0.7}
/>`}
          </code>
        </pre>
      </Section>
    );
  }
}

export default StyledTabs;