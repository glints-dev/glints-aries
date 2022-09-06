import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["flexDirection", "justifyContent", "alignItems", "flexWrap"];
import * as React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
export var StyledFlex = styled(Box).withConfig({
  displayName: "Flex__StyledFlex",
  componentId: "sc-11ryoct-0"
})(["display:flex;flex-direction:", ";justify-content:", ";align-items:", ";flex-wrap:", ";"], function (_ref) {
  var flexDirection = _ref.flexDirection;
  return flexDirection;
}, function (_ref2) {
  var justifyContent = _ref2.justifyContent;
  return justifyContent;
}, function (_ref3) {
  var alignItems = _ref3.alignItems;
  return alignItems;
}, function (_ref4) {
  var flexWrap = _ref4.flexWrap;
  return flexWrap;
});
export var Flex = function Flex(_ref5) {
  var _ref5$flexDirection = _ref5.flexDirection,
      flexDirection = _ref5$flexDirection === void 0 ? 'row' : _ref5$flexDirection,
      _ref5$justifyContent = _ref5.justifyContent,
      justifyContent = _ref5$justifyContent === void 0 ? 'flex-start' : _ref5$justifyContent,
      _ref5$alignItems = _ref5.alignItems,
      alignItems = _ref5$alignItems === void 0 ? 'stretch' : _ref5$alignItems,
      _ref5$flexWrap = _ref5.flexWrap,
      flexWrap = _ref5$flexWrap === void 0 ? 'nowrap' : _ref5$flexWrap,
      restProps = _objectWithoutPropertiesLoose(_ref5, _excluded);

  return /*#__PURE__*/React.createElement(StyledFlex, _extends({
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    flexWrap: flexWrap
  }, restProps));
};