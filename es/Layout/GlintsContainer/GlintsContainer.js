import styled, { css } from 'styled-components';
import { ScreenSize, Device } from '../../Utils/StyleConfig';
var BaseStyles = css(["font-family:Poppins,sans-serif;*,*:before,*:after{box-sizing:border-box;}"]);
var PageStyles = css(["position:relative;@media ", "{width:100%;margin:0 12px;}@media ", "{width:720px;margin:0 16px;}@media ", "{width:960px;margin:0 auto;}@media ", "{width:1140px;}@media ", "{width:1260px;}"], "(max-width: " + (ScreenSize.tablet - 1) + "px)", Device.tablet, Device.desktopS, Device.desktopM, Device.desktopL);
export var BaseContainer = styled.div.withConfig({
  displayName: "GlintsContainer__BaseContainer",
  componentId: "sc-13x4ui7-0"
})(["", ""], BaseStyles);
export var PageContainer = styled.div.withConfig({
  displayName: "GlintsContainer__PageContainer",
  componentId: "sc-13x4ui7-1"
})(["", ""], PageStyles);
export var GlintsContainer = styled.div.withConfig({
  displayName: "GlintsContainer",
  componentId: "sc-13x4ui7-2"
})(["", " ", ""], BaseStyles, PageStyles);
export default GlintsContainer;