import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "color", "width", "height", "onClick", "size"];
import * as React from 'react';
import { VerticalCenteredSvg } from './IconStyle';
export var iconSizeMap = {
  xxs: '12px',
  xs: '16px',
  s: '24px',
  m: '32px',
  l: '48px',
  xl: '64px',
  xxl: '96px',
  xxxl: '128px'
};

var Icon = function Icon(props) {
  var className = props.className,
      children = props.children,
      _props$color = props.color,
      color = _props$color === void 0 ? 'currentColor' : _props$color,
      _props$width = props.width,
      width = _props$width === void 0 ? '1em' : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? '1em' : _props$height,
      onClick = props.onClick,
      size = props.size,
      restProps = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/React.createElement(VerticalCenteredSvg, _extends({
    "data-testid": "icon-svg",
    className: className,
    width: iconSizeMap[size] || width,
    height: iconSizeMap[size] || height,
    onClick: onClick,
    fill: color,
    viewBox: "0 0 100 100"
  }, restProps), children);
};

export default Icon;