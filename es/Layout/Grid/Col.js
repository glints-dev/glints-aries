import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["xs", "sm", "md", "xsOrder", "smOrder", "mdOrder", "children"];
import * as React from 'react';
import { ColumnContainer } from './GridStyle';
export var Col = function Col(_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      xsOrder = _ref.xsOrder,
      smOrder = _ref.smOrder,
      mdOrder = _ref.mdOrder,
      children = _ref.children,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(ColumnContainer
  /** Set number of columns you wish to span for extra small devices like phone (<=640px) */
  , _extends({
    xs: xs
    /** Set number of columns you wish to span for small devices like tablet (<=768px) */
    ,
    sm: sm
    /** Set number of columns you wish to span for medium devices like phone (>=1024px) */
    ,
    md: md
    /** Sets the order of the column for extra small devices like phone (<=640px) */
    ,
    xsOrder: xsOrder
    /** Sets the order of the column for small devices like tablet (<=768px) */
    ,
    smOrder: smOrder
    /** Sets the order of the column for medium devices like phone (>=1024px) */
    ,
    mdOrder: mdOrder
  }, defaultProps), children);
};
Col.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12
};
export default Col;