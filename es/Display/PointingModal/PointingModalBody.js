import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import { PointingModalBodyWrapper } from './PointingModalStyle';

var PointingModalBody = function PointingModalBody(props) {
  var children = props.children,
      className = props.className,
      defaultProps = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/React.createElement(PointingModalBodyWrapper, _extends({
    className: classNames('pointingmodal-body', className),
    role: "list"
  }, defaultProps), /*#__PURE__*/React.createElement("ul", null, children));
};

export default PointingModalBody;