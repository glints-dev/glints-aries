import React from 'react';
import Accordion from './Accordion';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
export default {
  title: 'Display/Accordion',
  component: Accordion,
  argTypes: {
    className: {
      table: {
        disable: true
      }
    },
    label: {
      description: 'Sets the label for <Accordion.Panel />',
      control: {
        type: 'text'
      }
    },
    content: {
      description: 'Sets the content for <Accordion.Panel />',
      control: {
        type: 'text'
      }
    }
  },
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};
var defaultPanels = [{
  label: 'What is Lorem Ipsum?',
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
}];

var Template = function Template(_ref) {
  var _ref$iconPosition = _ref.iconPosition,
      iconPosition = _ref$iconPosition === void 0 ? 'left' : _ref$iconPosition,
      _ref$panels = _ref.panels,
      panels = _ref$panels === void 0 ? defaultPanels : _ref$panels;
  return /*#__PURE__*/React.createElement(Accordion, {
    iconPosition: iconPosition
  }, panels.map(function (_ref2) {
    var label = _ref2.label,
        content = _ref2.content;
    return /*#__PURE__*/React.createElement(Accordion.Panel, {
      key: label,
      label: label,
      content: content
    });
  }));
};

export var Interactive = Template.bind({});
export var DifferentIconPosition = Template.bind({});
DifferentIconPosition.args = {
  iconPosition: 'right'
};
export var MultiplePanels = Template.bind({});
MultiplePanels.args = {
  panels: [{
    label: 'What is Lorem Ipsum?',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    label: 'What is Love?',
    content: 'Love is the most powerful emotion a human being can experience. The strange think is, that almost nobody knows what love is. Why is it so difficult to find love? That is easy to understand, if you know that the word “love” is not the same as one’s feeling of love.'
  }]
};