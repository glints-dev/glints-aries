import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import styled from 'styled-components';
import { space, shadow } from 'styled-system';
import { ScreenSize } from '../../Utils/StyleConfig';
var theme = {
  breakpoints: {
    mobileS: ScreenSize.mobileS + "px",
    mobileM: ScreenSize.mobileM + "px",
    mobileL: ScreenSize.mobileL + "px",
    tablet: ScreenSize.tablet + "px",
    desktopS: ScreenSize.desktopS + "px",
    desktopM: ScreenSize.desktopM + "px",
    desktopL: ScreenSize.desktopL + "px"
  },

  /*
    To overwrite default space theme in case <Box p={8} /> will be styled as
    `padding: 512px` instead of `padding: 8px`. Because the index 8 of default
    space theme is 512, can refer to https://styled-system.com/api/#defaults
  */
  space: [0]
};
export var StyledBox = styled.div.withConfig({
  displayName: "Box__StyledBox",
  componentId: "sc-pr7b7l-0"
})(["", " ", ""], space, shadow);
export var Box = function Box(props) {
  return /*#__PURE__*/React.createElement(StyledBox, _extends({
    theme: theme
  }, props));
};