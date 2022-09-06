import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import { PointingModalHeaderWrapper } from './PointingModalStyle';

var PointingModalHeader = function PointingModalHeader(props) {
  var children = props.children,
      className = props.className,
      defaultProps = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/React.createElement(PointingModalHeaderWrapper, _extends({
    className: classNames('pointingmodal-header', className),
    role: "group"
  }, defaultProps), children);
};

export default PointingModalHeader;