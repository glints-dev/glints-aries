import styled, { css } from 'styled-components';
import { SecondaryColor, Greyscale } from '../../Utils/Colors';
var iconSize = 15;
var iconMargin = 30;
var offsetIcon = iconSize + iconMargin;
var transitionTiming = '0.24s';
export var PanelWrapper = styled.div.withConfig({
  displayName: "AccordionStyle__PanelWrapper",
  componentId: "sc-7hk6zs-0"
})(["border-top:solid 1px ", ";outline:none;"], Greyscale.lightgrey);
export var Container = styled.div.withConfig({
  displayName: "AccordionStyle__Container",
  componentId: "sc-7hk6zs-1"
})(["", ":first-child{border-top:none;}"],
/* sc-selector */
PanelWrapper);
export var IconLabelWrapper = styled.div.withConfig({
  displayName: "AccordionStyle__IconLabelWrapper",
  componentId: "sc-7hk6zs-2"
})(["position:relative;display:flex;justify-content:", ";margin-top:30px;padding-bottom:30px;cursor:pointer;outline:none;transition:", ";&:hover{color:", ";svg{fill:", ";}}"], function (_ref) {
  var position = _ref.position;
  return position === 'left' ? 'flex-start' : 'space-between';
}, function (_ref2) {
  var active = _ref2.active;
  return active ? 'none' : "padding-bottom " + transitionTiming + " ease-in-out";
}, SecondaryColor.actionblue, SecondaryColor.actionblue);
export var ContentWrapper = styled.div.withConfig({
  displayName: "AccordionStyle__ContentWrapper",
  componentId: "sc-7hk6zs-3"
})(["visibility:", ";opacity:", ";max-height:", ";transition:all ", " ease-in-out;"], function (_ref3) {
  var active = _ref3.active;
  return active ? 'visible' : 'hidden';
}, function (_ref4) {
  var active = _ref4.active;
  return active ? '1' : '0';
}, function (_ref5) {
  var active = _ref5.active;
  return active ? '100rem' : '0';
}, transitionTiming);
export var Content = styled.div.withConfig({
  displayName: "AccordionStyle__Content",
  componentId: "sc-7hk6zs-4"
})(["margin-left:", ";margin-right:", ";padding-bottom:30px;cursor:default;"], function (_ref6) {
  var position = _ref6.position;
  return position === 'left' ? offsetIcon + "px" : '0';
}, function (_ref7) {
  var position = _ref7.position;
  return position === 'right' ? offsetIcon + "px" : '0';
});
export var Label = styled.div.withConfig({
  displayName: "AccordionStyle__Label",
  componentId: "sc-7hk6zs-5"
})(["margin:0;font-size:18px;font-weight:bold;line-height:1.4em;"]);
export var IconWrapper = styled.div.withConfig({
  displayName: "AccordionStyle__IconWrapper",
  componentId: "sc-7hk6zs-6"
})(["display:flex;align-items:center;svg{width:", ";height:", ";}", ""], iconSize + "px", iconSize + "px", function (_ref8) {
  var position = _ref8.position,
      active = _ref8.active;

  if (position === 'right') {
    return css(["transform:", ";transition:transform ", ";"], active ? 'rotate(180deg)' : 'none', transitionTiming);
  }

  return css(["margin-right:", ";"], iconMargin + "px");
});