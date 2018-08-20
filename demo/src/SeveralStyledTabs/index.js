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
        <Title>Several styled tabs</Title>

        <ActiveTab
          tabs={TABS} 
          activeTab={this.state.activeTab}
          onTabClick={this.handleTabClick}
          color={COLORS.indigo}
          bottom={-2}
          widthPercent={0.7}
        />        
        <pre>
          <code className="language-javascript">{`
  // StyledTabOne.js
  import styled from 'styled-components';
  
  const StyledTabOne = styled.button'
    display: none;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: linear-gradient(90deg, ${COLORS.persimmon} 0%, ${COLORS.casablanca} 100%);    
    
    @media (min-width: 700px) {
      display: inline-block;
      padding: 15px 30px;
      font-size: 20px;
    }
  ';
  
  export default StyledTabOne;

  // imdex.js
  import StyledTabOne from './StyledTabOne';
  import StyledTabTwo from './StyledTabTwo';
  ...

  const TABS = [
    { description: 'Summer', value: 'funny', styled: StyledTabOne, },
    { description: 'Autumn', value: 'ugly' },
    { description: 'Winter', value: 'frozen', styled: StyledTabTwo },
    { description: 'Spring', value: 'rainy' },
  ];
  ...

  <ActiveTab
    tabs={TABS} 
    activeTab={this.state.activeTab}
    onTabClick={this.handleTabClick}
    color={COLORS.indigo}
    bottom={-2}
    widthPercent={0.7}
  />`}
          </code>
        </pre>
      </Section>
    );
  }
}

export default SeveralStyledTabs;