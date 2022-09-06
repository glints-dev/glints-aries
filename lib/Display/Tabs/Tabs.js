"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Tabs = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TabPane = _interopRequireDefault(require("./TabPane"));

var _TabsStyle = require("./TabsStyle");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Tabs = function Tabs(_ref) {
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

  return /*#__PURE__*/React.createElement(_TabsStyle.TabsContainer, {
    className: (0, _classnames["default"])(alignment + "-aries-tabs", 'aries-tabs', className)
  }, /*#__PURE__*/React.createElement(_TabsStyle.TabsHeader, {
    className: (0, _classnames["default"])(alignment + "-tabs-header", 'tabs-header'),
    theme: theme,
    alignment: alignment
  }, /*#__PURE__*/React.createElement("ul", {
    className: (0, _classnames["default"])(alignment + "-tabs-list", 'tabs-list'),
    role: "tablist"
  }, React.Children.map(children, function (data, index) {
    var tabLabel = data.props.label || index;
    var tabClassName = data.props.tabClassName || '';
    return /*#__PURE__*/React.createElement("li", {
      className: (0, _classnames["default"])("tab-" + tabLabel, {
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
  }))), /*#__PURE__*/React.createElement(_TabsStyle.TabsBody, {
    className: "tabs-body",
    tabIndex: 0
  }, /*#__PURE__*/React.createElement(_TabPane["default"], {
    className: (0, _classnames["default"])('tabs-item', "tab-item-" + activeTabOrIndex, "tabs-item-" + alignment, 'tabs-item'),
    role: "tabpanel",
    "aria-labelledby": "tab-" + activeTabOrIndex,
    tabIndex: -1
  }, /*#__PURE__*/React.isValidElement(currentChild) && currentChild.props.children)));
};

exports.Tabs = Tabs;
Tabs.Pane = _TabPane["default"];
var _default = Tabs;
exports["default"] = _default;