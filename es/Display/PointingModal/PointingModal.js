import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import { PointingModalContainer, PointingModalHeaderArrow } from './PointingModalStyle';
import PointingModalHeader from './PointingModalHeader';
import PointingModalBody from './PointingModalBody';
import PointingModalItem from './PointingModalItem';
import PointingModalFooter from './PointingModalFooter';

var PointingModal = function PointingModal(props) {
  var children = props.children,
      className = props.className,
      defaultProps = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/React.createElement(PointingModalContainer, _extends({
    className: classNames('aries-pointingmodal', className),
    role: "dialog",
    "aria-modal": "true"
  }, defaultProps), /*#__PURE__*/React.createElement(PointingModalHeaderArrow, {
    role: "presentation"
  }), children);
};

PointingModal.Header = PointingModalHeader;
PointingModal.Header.displayName = 'PointingModal.Header';
PointingModal.Body = PointingModalBody;
PointingModal.Body.displayName = 'PointingModal.Body';
PointingModal.Item = PointingModalItem;
PointingModal.Item.displayName = 'PointingModal.Item';
PointingModal.Footer = PointingModalFooter;
PointingModal.Footer.displayName = 'PointingModal.Footer';
export default PointingModal;