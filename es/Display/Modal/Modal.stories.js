import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "title", "buttonTexts"];
import React, { useState } from 'react';
import { times, constant } from 'lodash';
import { Modal } from './Modal';
import { Button } from '../../General/Button/Button';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
export default {
  title: 'Display/Modal',
  component: Modal,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};
var defaultTitle = 'Lorem Ipsum';
var defaultChildren = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

var Template = function Template(_ref) {
  var children = _ref.children,
      title = _ref.title,
      _ref$buttonTexts = _ref.buttonTexts,
      buttonTexts = _ref$buttonTexts === void 0 ? [] : _ref$buttonTexts,
      args = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(false),
      isModalVisible = _useState[0],
      setIsModalVisible = _useState[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    onClick: function onClick() {
      return setIsModalVisible(!isModalVisible);
    }
  }, "Toggle"), /*#__PURE__*/React.createElement(Modal, _extends({}, args, {
    title: title || defaultTitle,
    isVisible: isModalVisible,
    onClose: function onClose() {
      return setIsModalVisible(false);
    },
    footer: [/*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: function onClick() {
        return setIsModalVisible(false);
      },
      key: "cancel"
    }, buttonTexts[0] || 'Cancel'), /*#__PURE__*/React.createElement(Button, {
      variant: "solid-blue",
      onClick: function onClick() {
        return setIsModalVisible(false);
      },
      key: "save"
    }, buttonTexts[1] || 'Save')]
  }), children || defaultChildren));
};

export var Interactive = Template.bind({});
Interactive.args = {
  title: defaultTitle,
  children: defaultChildren
};
export var ScreenCentered = Template.bind({});
ScreenCentered.args = {
  centering: true
};
export var FullScreen = Template.bind({});
FullScreen.args = {
  fullscreen: true,
  children: times(1000, constant(defaultChildren)).join(' ')
};
export var ScreenCenteredWithALotOfContent = Template.bind({});
ScreenCenteredWithALotOfContent.args = {
  centering: true,
  children: times(10, constant(defaultChildren)).join(' ')
};
export var FooterResponsiveness = Template.bind({});
FooterResponsiveness.args = {
  buttonTexts: ['Looooooong Cancel', 'Loooooooong Save'],
  size: 's'
};
FooterResponsiveness.parameters = {
  docs: {
    description: {
      story: 'If all the buttons cannot fit in one row, then they will be expanded to the 100% width of the container and break into two rows.'
    }
  }
};