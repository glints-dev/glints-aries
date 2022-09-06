import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["variant", "action", "children", "icon", "block", "outline", "onClick"];
import * as React from 'react';
import { AddIcon, TrashIcon } from '../../General/Icon/components';
import { StartIconContainer, EndIconContainer } from './TagStyle';
import { AddTag } from './ActionTags/AddTag';
import { ResetTag } from './ActionTags/ResetTag';
import BasicTag from './BasicTag';

var Tag = function Tag(_ref) {
  var variant = _ref.variant,
      action = _ref.action,
      children = _ref.children,
      icon = _ref.icon,
      _ref$block = _ref.block,
      block = _ref$block === void 0 ? false : _ref$block,
      _ref$outline = _ref.outline,
      outline = _ref$outline === void 0 ? false : _ref$outline,
      onClick = _ref.onClick,
      resetProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  if (variant === 'action') {
    switch (action) {
      case 'add':
        return /*#__PURE__*/React.createElement(AddTag, _extends({
          onClick: onClick
        }, resetProps), /*#__PURE__*/React.createElement(StartIconContainer, null, /*#__PURE__*/React.createElement(AddIcon, null)), children);

      case 'reset':
        return /*#__PURE__*/React.createElement(ResetTag, _extends({
          onClick: onClick
        }, resetProps), /*#__PURE__*/React.createElement(StartIconContainer, null, /*#__PURE__*/React.createElement(TrashIcon, null)), children);

      default:
    }
  } else if (variant === 'button') {
    return /*#__PURE__*/React.createElement(BasicTag, resetProps, children, /*#__PURE__*/React.createElement(EndIconContainer, null, icon));
  }

  return /*#__PURE__*/React.createElement(BasicTag, _extends({
    block: block,
    outline: outline,
    onClick: onClick
  }, resetProps), children);
};

export default Tag;