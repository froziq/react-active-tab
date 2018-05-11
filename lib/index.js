'use strict';

exports.__esModule = true;
exports.ActiveTab = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DefaultTab = require('./DefaultTab');

var _DefaultTab2 = _interopRequireDefault(_DefaultTab);

var _Active = require('./Active');

var _Active2 = _interopRequireDefault(_Active);

var _Wrapper = require('./Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveTab = exports.ActiveTab = function (_React$PureComponent) {
  _inherits(ActiveTab, _React$PureComponent);

  function ActiveTab() {
    var _temp, _this, _ret;

    _classCallCheck(this, ActiveTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.state = {
      offsetLeft: 0,
      prevOffsetLeft: 0,
      activeWidth: 0,
      activePrevWidth: 0
    }, _this.changeActive = function (activeTab) {
      var element = document.querySelector('[value="' + activeTab + '"]');
      if (!element) return;

      var activeWidth = element.offsetWidth * _this.props.widthPercent;
      var offsetLeft = element.offsetLeft + (element.offsetWidth - activeWidth) / 2;
      _this.setState(function (prevState) {
        return {
          offsetLeft: offsetLeft,
          prevOffsetLeft: prevState.offsetLeft === prevState.prevOffsetLeft ? prevState.prevOffsetLeft : prevState.offsetLeft,
          activeWidth: activeWidth,
          activePrevWidth: prevState.activeWidth === prevState.activePrevWidth ? prevState.activePrevWidth : prevState.activeWidth
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ActiveTab.prototype.componentDidMount = function componentDidMount() {
    this.changeActive(this.props.activeTab);
  };

  ActiveTab.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.activeTab !== nextProps.activeTab) {
      this.changeActive(nextProps.activeTab);
    }
  };

  ActiveTab.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      _Wrapper2.default,
      null,
      this.props.tabs.map(function (tab) {
        var RenderTab = tab.styled ? tab.styled : _this2.props.styledTab ? _this2.props.styledTab : _DefaultTab2.default;
        return _react2.default.createElement(
          RenderTab,
          {
            type: 'button',
            key: tab.description,
            value: tab.value,
            onClick: _this2.props.onTabClick
          },
          tab.description
        );
      }),
      _react2.default.createElement(_Active2.default, {
        bottom: this.props.bottom,
        width: this.state.activeWidth,
        prevWidth: this.state.activePrevWidth,
        translate: this.state.offsetLeft,
        prevTranslate: this.state.prevOffsetLeft,
        height: this.props.height,
        animation: this.props.animation,
        color: this.props.color
      })
    );
  };

  return ActiveTab;
}(_react2.default.PureComponent);

ActiveTab.defaultProps = {
  widthPercent: 1
};

ActiveTab.propTypes = process.env.NODE_ENV !== "production" ? {
  activeTab: _propTypes2.default.string.isRequired,
  onTabClick: _propTypes2.default.func.isRequired,
  tabs: _propTypes2.default.array.isRequired,
  color: _propTypes2.default.string,
  widthPercent: _propTypes2.default.number,
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  bottom: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  animation: _propTypes2.default.string
} : {};

exports.default = ActiveTab;