import React from 'react';
import PropTypes from 'prop-types';

import DefaultTab from './DefaultTab';
import Active from './Active';
import Wrapper from './Wrapper';

export class ActiveTab extends React.PureComponent {
  state = {
    offsetLeft: 0,
    prevOffsetLeft: 0,
    activeWidth: 0,
    activePrevWidth: 0,
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
    const element = document.querySelector(`[value="${activeTab}"]`);
    if (!element) return;

    const activeWidth = element.offsetWidth * this.props.widthPercent;
    const offsetLeft = element.offsetLeft + (element.offsetWidth - activeWidth) / 2;
    this.setState((prevState) => ({
      offsetLeft,
      prevOffsetLeft: prevState.offsetLeft === prevState.prevOffsetLeft ? prevState.prevOffsetLeft : prevState.offsetLeft,
      activeWidth,
      activePrevWidth: prevState.activeWidth === prevState.activePrevWidth ? prevState.activePrevWidth : prevState.activeWidth,
    }));
  }

  render() {
    return (
      <Wrapper>
        {this.props.tabs.map(tab => {
          const RenderTab = tab.styled ? tab.styled : this.props.styledTab ? this.props.styledTab : DefaultTab;
          return <RenderTab
            type="button"
            key={tab.description}
            value={tab.value}
            onClick={this.props.onTabClick}
          >
            {tab.description}
          </RenderTab>
        })}

        <Active
          bottom={this.props.bottom}
          width={this.state.activeWidth}
          prevWidth={this.state.activePrevWidth}
          translate={this.state.offsetLeft}
          prevTranslate={this.state.prevOffsetLeft}
          height={this.props.height}
          animation={this.props.animation}
          color={this.props.color}
        />
      </Wrapper>
    );
  }
}

ActiveTab.defaultProps = {
  widthPercent: 1,
};

ActiveTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  tabs: PropTypes.array.isRequired,
  color: PropTypes.string,
  widthPercent: PropTypes.number,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  bottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  animation: PropTypes.string,
};

export default ActiveTab;
