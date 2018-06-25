import React from 'react';
import ActiveTab from 'react-active-tab';
import Prism from 'prismjs';

import 'prismjs/themes/prism.css'

import Section from '../Section';
import Title from '../Title';

const TABS = [
  { description: 'Tab first', value: 'tab1' },
  { description: 'Tab second', value: 'tab2' },
  { description: 'Tab third', value: 'tab3' },
];

class DefaultTabs extends React.PureComponent {
  state = {
    activeTab: 'tab1',
  }

  componentDidMount() {
    this.preRef.innerHTML = Prism.highlight(`
  import ActiveTab from 'react-active-tab';
  ...
  const TABS = [
    { description: 'Tab first', value: 'tab1' },
    { description: 'Tab second', value: 'tab2' },
    { description: 'Tab third', value: 'tab3' },
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
      )
    }
  }
    `, Prism.languages.javascript, 'javascript');
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

        <pre>
          <code className="language-javascript" ref={(ref) => {if (ref) this.preRef = ref;}}>{`
import ActiveTab from 'react-active-tab';
...
const TABS = [
  { description: 'Tab first', value: 'tab1' },
  { description: 'Tab second', value: 'tab2' },
  { description: 'Tab third', value: 'tab3' },
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
    )
  }
}`}
          </code>
        </pre>
      </Section>
    );
  }
}

export default DefaultTabs;