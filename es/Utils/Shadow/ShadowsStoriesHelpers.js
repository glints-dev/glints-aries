import styled from 'styled-components';
import { Shadow } from '.';
import { PrimaryColor } from '../Colors';
export var levels = [[Shadow.up1, Shadow.down1], [Shadow.up2, Shadow.down2], [Shadow.up3, Shadow.down3], [Shadow.up4, Shadow.down4]];
export var levelUsages = ['Elements that uses shadow by default', 'Elements in hovered state', 'Sticky elements, dropdown elements', 'Alerts'];
export var PreviewCell = styled.div.withConfig({
  displayName: "ShadowsStoriesHelpers__PreviewCell",
  componentId: "sc-cigkku-0"
})(["background-color:white;padding:16px;display:flex;*{margin-top:0 !important;margin-bottom:0 !important;}"]);
export var PreviewBox = styled.div.withConfig({
  displayName: "ShadowsStoriesHelpers__PreviewBox",
  componentId: "sc-cigkku-1"
})(["box-shadow:", ";margin:16px;border:1px solid black;background-color:", ";width:32px;height:32px;"], function (_ref) {
  var shadow = _ref.shadow;
  return shadow;
}, PrimaryColor.glintsyellow);