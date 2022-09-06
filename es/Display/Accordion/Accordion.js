import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["label", "content"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import * as React from 'react';
import classNames from 'classnames';
import { AddIcon, MinusIcon, ArrowDownSolidIcon } from '../../General/Icon/components';
import AccordionPanel from './AccordionPanel';
import { Container } from './AccordionStyle';

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$iconPosition = _ref.iconPosition,
      iconPosition = _ref$iconPosition === void 0 ? 'left' : _ref$iconPosition;

  var _React$useState = React.useState(-1),
      currIndex = _React$useState[0],
      setCurrIndex = _React$useState[1];

  var iconOptions = {
    activeIcon: iconPosition === 'left' ? /*#__PURE__*/React.createElement(MinusIcon, null) : /*#__PURE__*/React.createElement(ArrowDownSolidIcon, null),
    inactiveIcon: iconPosition === 'left' ? /*#__PURE__*/React.createElement(AddIcon, null) : /*#__PURE__*/React.createElement(ArrowDownSolidIcon, null),
    position: iconPosition
  };

  var handleOpen = function handleOpen(index) {
    setCurrIndex(currIndex === index ? -1 : index);
  };

  return /*#__PURE__*/React.createElement(Container, {
    className: classNames('aries-accordion', className)
  }, React.Children.map(children, function (child, index) {
    var _child$props = child.props,
        label = _child$props.label,
        content = _child$props.content,
        restChildProps = _objectWithoutPropertiesLoose(_child$props, _excluded);

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

Accordion.Panel = AccordionPanel;
Accordion.Panel.displayName = 'Accordion.Panel'; // To show the correct name in code sample

export default Accordion;