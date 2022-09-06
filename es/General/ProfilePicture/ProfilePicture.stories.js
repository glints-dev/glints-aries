import React from 'react';
import ProfilePicture from './ProfilePicture';
export default {
  title: 'General/ProfilePicture',
  component: ProfilePicture
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(ProfilePicture, args, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1537530360953-3b8b369e01fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ecc5073c4eb34e6c480e32b48e6208db&auto=format&fit=crop&w=750&q=80",
    alt: "Ying Cong"
  }));
};

export var Interactive = Template.bind({});
export var ShowEditIconOnHover = Template.bind({});
ShowEditIconOnHover.args = {
  editable: true
};