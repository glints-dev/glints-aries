import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children"];
import * as React from 'react';
import classNames from 'classnames';
import { BreadcrumbContainer } from './BreadcrumbStyle';
import BreadcrumbItem from './BreadcrumbItem';
export var Breadcrumb = function Breadcrumb(_ref) {
  var className = _ref.className,
      children = _ref.children,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(BreadcrumbContainer, _extends({
    className: classNames('aries-breadcrumb', className)
  }, defaultProps), children);
};
Breadcrumb.Item = BreadcrumbItem;
export default Breadcrumb;