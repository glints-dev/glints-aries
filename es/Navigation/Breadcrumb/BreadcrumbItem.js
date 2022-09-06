import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["active", "className", "children"];
import * as React from 'react';
import { BreadcrumbItemWrapper } from './BreadcrumbStyle';
import classNames from 'classnames';

var BreadcrumbItem = function BreadcrumbItem(props) {
  var active = props.active,
      className = props.className,
      children = props.children,
      defaultProps = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/React.createElement(BreadcrumbItemWrapper, _extends({
    className: classNames('aries-breadcrumb-item', className),
    active: active
  }, defaultProps), children, /*#__PURE__*/React.createElement("span", null, "/"));
};

export default BreadcrumbItem;