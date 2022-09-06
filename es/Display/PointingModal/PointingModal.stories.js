import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PointingModal from './PointingModal';
import ProfilePicture from '../../General/ProfilePicture';
import Divider from '../../General/Divider';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
export default {
  title: 'Display/PointingModal',
  component: PointingModal,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(_ref) {
  var args = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(PointingModal, args, /*#__PURE__*/React.createElement(PointingModal.Header, null, /*#__PURE__*/React.createElement(ProfilePicture, {
    editable: true
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80",
    alt: "profile"
  })), /*#__PURE__*/React.createElement("div", {
    className: "aries-modal-profile"
  }, /*#__PURE__*/React.createElement("span", null, "Hello,"), /*#__PURE__*/React.createElement("a", {
    href: "."
  }, "Fredy Yanto"))), /*#__PURE__*/React.createElement(Divider, {
    theme: "grey"
  }), /*#__PURE__*/React.createElement(PointingModal.Body, null, /*#__PURE__*/React.createElement(PointingModal.Item, null, "View Profile"), /*#__PURE__*/React.createElement(PointingModal.Item, null, "Edit Profile"), /*#__PURE__*/React.createElement(PointingModal.Item, null, "Sign Out")), /*#__PURE__*/React.createElement(PointingModal.Footer, null, "Have a nice day"));
};

export var Interactive = Template.bind({});
Interactive.args = {};