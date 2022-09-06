"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.MultiplePanels = exports.Interactive = exports.DifferentIconPosition = void 0;

var _react = _interopRequireDefault(require("react"));

var _Accordion = _interopRequireDefault(require("./Accordion"));

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _default = {
  title: 'Display/Accordion',
  component: _Accordion["default"],
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
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;
var defaultPanels = [{
  label: 'What is Lorem Ipsum?',
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
}];

var Template = function Template(_ref) {
  var _ref$iconPosition = _ref.iconPosition,
      iconPosition = _ref$iconPosition === void 0 ? 'left' : _ref$iconPosition,
      _ref$panels = _ref.panels,
      panels = _ref$panels === void 0 ? defaultPanels : _ref$panels;
  return /*#__PURE__*/_react["default"].createElement(_Accordion["default"], {
    iconPosition: iconPosition
  }, panels.map(function (_ref2) {
    var label = _ref2.label,
        content = _ref2.content;
    return /*#__PURE__*/_react["default"].createElement(_Accordion["default"].Panel, {
      key: label,
      label: label,
      content: content
    });
  }));
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
var DifferentIconPosition = Template.bind({});
exports.DifferentIconPosition = DifferentIconPosition;
DifferentIconPosition.args = {
  iconPosition: 'right'
};
var MultiplePanels = Template.bind({});
exports.MultiplePanels = MultiplePanels;
MultiplePanels.args = {
  panels: [{
    label: 'What is Lorem Ipsum?',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    label: 'What is Love?',
    content: 'Love is the most powerful emotion a human being can experience. The strange think is, that almost nobody knows what love is. Why is it so difficult to find love? That is easy to understand, if you know that the word “love” is not the same as one’s feeling of love.'
  }]
};