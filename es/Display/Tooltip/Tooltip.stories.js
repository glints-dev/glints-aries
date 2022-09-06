import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["text"],
    _excluded2 = ["text"];
import React from 'react';
import styled from 'styled-components';
import { Tooltip } from './Tooltip';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import Tag from '../../General/Tag/BasicTag';
var Container = styled(BaseContainer).withConfig({
  displayName: "Tooltipstories__Container",
  componentId: "sc-qjslxe-0"
})(["width:100%;height:150px;display:flex;align-items:center;justify-content:center;"]);
var defaultText = 'Lorem Ipsum';
export default {
  title: 'General/Tooltip',
  component: Tooltip,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(Container, null, Story());
  }]
};

var StringTooltipTemplate = function StringTooltipTemplate(_ref) {
  var text = _ref.text,
      args = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Tooltip, _extends({}, args, {
    text: text || defaultText
  }), /*#__PURE__*/React.createElement(Tag, null, "Glints Aries"));
};

var HtmlTooltipTemplate = function HtmlTooltipTemplate(_ref2) {
  var text = _ref2.text,
      args = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(Tooltip, _extends({}, args, {
    text: text || defaultText
  }), /*#__PURE__*/React.createElement(Tag, null, "Glints Aries"));
};

export var Interactive = StringTooltipTemplate.bind({});
Interactive.args = {
  text: defaultText,
  position: 'top'
};
export var DifferentPosition = StringTooltipTemplate.bind({});
DifferentPosition.args = {
  position: 'left'
};
export var WithHtmlContent = HtmlTooltipTemplate.bind({});
WithHtmlContent.args = {
  text: /*#__PURE__*/React.createElement("b", null, "Hello World"),
  textAsString: 'Hello World'
};