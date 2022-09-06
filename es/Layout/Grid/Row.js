import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "alignContent", "justifyContent"];
import * as React from 'react';
import { RowContainer } from './GridStyle';

var Row = function Row(_ref) {
  var children = _ref.children,
      alignContent = _ref.alignContent,
      justifyContent = _ref.justifyContent,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(RowContainer, _extends({
    alignContent: alignContent,
    justifyContent: justifyContent
  }, defaultProps), children);
};

export default Row;