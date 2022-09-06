import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["label", "children", "className", "isOpen"];
import React, { useState } from 'react';
import classNames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import { ArrowDownIcon } from '../../General/Icon/components';
import { CollapsibleContainer, CollapsibleContent, CollapsibleHeader, CollapsibleBody } from './CollapsibleStyle';
export var Collapsible = function Collapsible(_ref) {
  var label = _ref.label,
      children = _ref.children,
      className = _ref.className,
      isOpen = _ref.isOpen,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(isUndefined(isOpen) ? true : isOpen),
      isOpenInternal = _useState[0],
      setIsOpenInternal = _useState[1];

  var toggle = function toggle() {
    setIsOpenInternal(!isOpenInternal);
  };

  return /*#__PURE__*/React.createElement(CollapsibleContainer, _extends({
    className: classNames('aries-collapsible', className),
    tabIndex: 0,
    onClick: toggle,
    "data-testid": "collapsible-container"
  }, defaultProps), /*#__PURE__*/React.createElement(CollapsibleContent, {
    tabIndex: -1
  }, /*#__PURE__*/React.createElement(CollapsibleHeader, {
    className: "collapsible-title",
    role: "tab",
    "aria-expanded": isOpenInternal,
    isOpen: isOpenInternal
  }, label, /*#__PURE__*/React.createElement(ArrowDownIcon, {
    color: "#000000"
  })), isOpenInternal && /*#__PURE__*/React.createElement(CollapsibleBody, {
    className: "collapsible-content",
    "data-testid": "collapsible-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, children)));
};
export default Collapsible;