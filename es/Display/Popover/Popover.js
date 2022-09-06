import * as React from 'react';
import classNames from 'classnames';
import { ArrowDownIcon } from '../../General/Icon/components';
import { PopoverContainer, PopoverContentWrapper, PopoverChildren, PopoverIcon, PopOverContent, PopoverItemWrapper } from './PopoverStyle';

var Popover = function Popover(_ref) {
  var className = _ref.className,
      children = _ref.children,
      content = _ref.content;

  var _React$useState = React.useState(false),
      isOpen = _React$useState[0],
      setIsOpen = _React$useState[1];

  var handleOnClick = function handleOnClick() {
    return setIsOpen(!isOpen);
  };

  var handleClickOutside = function handleClickOutside() {
    return setIsOpen(false);
  };

  return /*#__PURE__*/React.createElement(PopoverContainer, {
    className: classNames('aries-popover', className),
    onBlur: handleClickOutside,
    "aria-haspopup": "true",
    "aria-busy": "false",
    tabIndex: 0
  }, /*#__PURE__*/React.createElement(PopoverChildren, {
    "data-testid": "popover-children",
    onClick: handleOnClick
  }, children), /*#__PURE__*/React.createElement(PopoverContentWrapper, {
    onClick: handleOnClick
  }, /*#__PURE__*/React.createElement(PopoverItemWrapper, null, /*#__PURE__*/React.createElement(PopoverIcon, null, /*#__PURE__*/React.createElement(ArrowDownIcon, {
    color: "black"
  })), isOpen && /*#__PURE__*/React.createElement(PopOverContent, null, content))));
};

export default Popover;