import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import { PointingModalFooterWrapper } from './PointingModalStyle';

var PointingModalFooter = function PointingModalFooter(props) {
  var children = props.children,
      className = props.className,
      defaultProps = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/React.createElement(PointingModalFooterWrapper, _extends({
    className: classNames('pointingmodal-footer', className)
  }, defaultProps), children);
};

export default PointingModalFooter;