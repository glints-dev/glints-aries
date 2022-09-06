"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _components = require("../../General/Icon/components");

var _AccordionPanel = _interopRequireDefault(require("./AccordionPanel"));

var _AccordionStyle = require("./AccordionStyle");

var _excluded = ["label", "content"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$iconPosition = _ref.iconPosition,
      iconPosition = _ref$iconPosition === void 0 ? 'left' : _ref$iconPosition;

  var _React$useState = React.useState(-1),
      currIndex = _React$useState[0],
      setCurrIndex = _React$useState[1];

  var iconOptions = {
    activeIcon: iconPosition === 'left' ? /*#__PURE__*/React.createElement(_components.MinusIcon, null) : /*#__PURE__*/React.createElement(_components.ArrowDownSolidIcon, null),
    inactiveIcon: iconPosition === 'left' ? /*#__PURE__*/React.createElement(_components.AddIcon, null) : /*#__PURE__*/React.createElement(_components.ArrowDownSolidIcon, null),
    position: iconPosition
  };

  var handleOpen = function handleOpen(index) {
    setCurrIndex(currIndex === index ? -1 : index);
  };

  return /*#__PURE__*/React.createElement(_AccordionStyle.Container, {
    className: (0, _classnames["default"])('aries-accordion', className)
  }, React.Children.map(children, function (child, index) {
    var _child$props = child.props,
        label = _child$props.label,
        content = _child$props.content,
        restChildProps = (0, _objectWithoutPropertiesLoose2["default"])(_child$props, _excluded);
    return /*#__PURE__*/React.cloneElement(child, _objectSpread({
      key: index,
      label: label,
      content: content,
      active: currIndex === index,
      iconOptions: iconOptions,
      onOpen: function onOpen() {
        return handleOpen(index);
      }
    }, restChildProps));
  }));
};

Accordion.Panel = _AccordionPanel["default"];
Accordion.Panel.displayName = 'Accordion.Panel'; // To show the correct name in code sample

var _default = Accordion;
exports["default"] = _default;