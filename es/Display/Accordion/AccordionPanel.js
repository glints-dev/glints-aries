import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "content", "label", "active", "iconOptions", "onOpen", "onClick"];
import * as React from 'react';
import classNames from 'classnames';
import { PanelWrapper, IconWrapper, IconLabelWrapper, ContentWrapper, Content, Label } from './AccordionStyle';

var AccordionPanel = function AccordionPanel(props) {
  var className = props.className,
      content = props.content,
      label = props.label,
      active = props.active,
      _props$iconOptions = props.iconOptions,
      activeIcon = _props$iconOptions.activeIcon,
      inactiveIcon = _props$iconOptions.inactiveIcon,
      position = _props$iconOptions.position,
      onOpen = props.onOpen,
      onClick = props.onClick,
      restProps = _objectWithoutPropertiesLoose(props, _excluded);

  var handleClick = function handleClick(e) {
    onOpen();

    if (onClick) {
      onClick(e);
    }
  };

  var renderIcon = function renderIcon() {
    return /*#__PURE__*/React.createElement(IconWrapper, {
      position: position,
      active: active
    }, active ? activeIcon : inactiveIcon);
  };

  return /*#__PURE__*/React.createElement(PanelWrapper, _extends({
    className: classNames('panel-wrapper', className),
    role: "tab",
    "aria-expanded": active,
    tabIndex: 0
  }, restProps), /*#__PURE__*/React.createElement(IconLabelWrapper, {
    className: "label-wrapper",
    onClick: handleClick,
    tabIndex: -1,
    position: position,
    active: active
  }, position === 'left' && renderIcon(), /*#__PURE__*/React.createElement(Label, null, label), position === 'right' && renderIcon()), /*#__PURE__*/React.createElement(ContentWrapper, {
    className: "content-wrapper",
    active: active
  }, /*#__PURE__*/React.createElement(Content, {
    position: position
  }, content)));
};

export default AccordionPanel;