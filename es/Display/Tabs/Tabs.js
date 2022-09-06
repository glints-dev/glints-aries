import * as React from 'react';
import classNames from 'classnames';
import TabPane from './TabPane';
import { TabsContainer, TabsHeader, TabsBody } from './TabsStyle';
export var Tabs = function Tabs(_ref) {
  var activeTab = _ref.activeTab,
      onTabClick = _ref.onTabClick,
      children = _ref.children,
      className = _ref.className,
      _ref$alignment = _ref.alignment,
      alignment = _ref$alignment === void 0 ? 'horizontal' : _ref$alignment,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'black' : _ref$theme;

  var _React$useState = React.useState(0),
      currentIndex = _React$useState[0],
      setCurrentIndex = _React$useState[1];

  var activeTabOrIndex = activeTab || currentIndex;
  var childrenArray = React.Children.toArray(children);
  var currentChild = childrenArray[currentIndex];

  var handleTabClick = function handleTabClick(index, tab) {
    var listener = function listener() {
      setCurrentIndex(index);

      if (onTabClick) {
        onTabClick(tab);
      }
    };

    return listener;
  };

  return /*#__PURE__*/React.createElement(TabsContainer, {
    className: classNames(alignment + "-aries-tabs", 'aries-tabs', className)
  }, /*#__PURE__*/React.createElement(TabsHeader, {
    className: classNames(alignment + "-tabs-header", 'tabs-header'),
    theme: theme,
    alignment: alignment
  }, /*#__PURE__*/React.createElement("ul", {
    className: classNames(alignment + "-tabs-list", 'tabs-list'),
    role: "tablist"
  }, React.Children.map(children, function (data, index) {
    var tabLabel = data.props.label || index;
    var tabClassName = data.props.tabClassName || '';
    return /*#__PURE__*/React.createElement("li", {
      className: classNames("tab-" + tabLabel, {
        active: activeTabOrIndex === tabLabel
      }, alignment + "-tab", "" + tabClassName),
      key: index,
      role: "tab",
      "aria-selected": activeTabOrIndex === tabLabel && true,
      "aria-controls": "tab-item-" + tabLabel,
      tabIndex: -1
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: handleTabClick(index, tabLabel),
      role: "tab-button"
    }, data.props.tab));
  }))), /*#__PURE__*/React.createElement(TabsBody, {
    className: "tabs-body",
    tabIndex: 0
  }, /*#__PURE__*/React.createElement(TabPane, {
    className: classNames('tabs-item', "tab-item-" + activeTabOrIndex, "tabs-item-" + alignment, 'tabs-item'),
    role: "tabpanel",
    "aria-labelledby": "tab-" + activeTabOrIndex,
    tabIndex: -1
  }, /*#__PURE__*/React.isValidElement(currentChild) && currentChild.props.children)));
};
Tabs.Pane = TabPane;
export default Tabs;