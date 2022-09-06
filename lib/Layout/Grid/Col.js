"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Col = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _GridStyle = require("./GridStyle");

var _excluded = ["xs", "sm", "md", "xsOrder", "smOrder", "mdOrder", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Col = function Col(_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      xsOrder = _ref.xsOrder,
      smOrder = _ref.smOrder,
      mdOrder = _ref.mdOrder,
      children = _ref.children,
      defaultProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_GridStyle.ColumnContainer
  /** Set number of columns you wish to span for extra small devices like phone (<=640px) */
  , (0, _extends2["default"])({
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

exports.Col = Col;
Col.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12
};
var _default = Col;
exports["default"] = _default;