import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
import Active from './Active';
import Wrapper from './Wrapper';

export class ActiveTab extends React.PureComponent {
  state = {
    offsetLeft: 0,
    activeWidth: 0,
  }

  componentDidMount() {
    this.changeActive(this.props.activeTab);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activeTab !== nextProps.activeTab) {
      this.changeActive(nextProps.activeTab);
    }
  }

  changeActive = (activeTab) => {
    const element = document.querySelector(`[data-value="${activeTab}"]`);
    if (!element) return;

    const activeWidth = element.offsetWidth * this.props.widthProcent;
    this.setState({
      offsetLeft: element.offsetLeft + (element.offsetWidth - activeWidth) / 2,
      activeWidth,
    });
  }

  renderTabs() {
    return this.props.tabs.map(tab => (
      <Tab
        type="button"
        key={tab.description}
        value={tab.value}
        data-value={tab.value}
        active={tab.value === this.props.activeTab}
        onClick={this.props.onTabClick}
      >
        {tab.description}
      </Tab>
    ));
  }

  render() {
    return (
      <Wrapper>
        {this.renderTabs()}

        <Active
          width={this.state.activeWidth}
          translate={this.state.offsetLeft}
        />
      </Wrapper>
    );
  }
}

ActiveTab.defaultProps = {
  color: 'black',
  height: '2px',
  widthProcent: 1,
};

ActiveTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  tabs: PropTypes.array.isRequired,
  widthProcent: PropTypes.number,
};

export default ActiveTab;
