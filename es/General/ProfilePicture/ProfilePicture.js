import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["editable", "children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import { EditIcon } from '../Icon/components';
import { ProfilePictureContainer, ProfilePictureContent } from './ProfilePictureStyle';

var ProfilePicture = function ProfilePicture(_ref) {
  var editable = _ref.editable,
      children = _ref.children,
      className = _ref.className,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _React$useState = React.useState(false),
      isHover = _React$useState[0],
      setIsHover = _React$useState[1];

  var handleMouseEnter = function handleMouseEnter() {
    if (editable) {
      setIsHover(true);
    }
  };

  var handleMouseLeave = function handleMouseLeave() {
    if (editable) {
      setIsHover(false);
    }
  };

  return /*#__PURE__*/React.createElement(ProfilePictureContainer, _extends({
    className: classNames('aries-profile', className),
    role: editable ? 'button' : 'presentation',
    "aria-label": "Profile Picture",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    tabIndex: editable ? 0 : undefined
  }, defaultProps), /*#__PURE__*/React.createElement(ProfilePictureContent, {
    editable: editable,
    tabIndex: editable ? -1 : undefined
  }, isHover && /*#__PURE__*/React.createElement(EditIcon, {
    color: "white"
  }), children));
};

export default ProfilePicture;