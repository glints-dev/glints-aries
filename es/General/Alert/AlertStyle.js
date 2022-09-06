import styled, { keyframes } from 'styled-components';
import { ScreenSize } from '../../Utils/StyleConfig';
import { Shadow } from '../../Utils/Shadow';
var fadeDown = keyframes(["0%{transform:translateY(-100%);top:0;}100%{transform:translateY(0%);top:16px;}"]);
var fadeUp = keyframes(["0%{transform:translateY(0%);top:12px;}100%{transform:translateY(-100%);top:0;}"]);
export var AlertContainer = styled.div.withConfig({
  displayName: "AlertStyle__AlertContainer",
  componentId: "sc-fcjw72-0"
})(["position:fixed;left:0;right:0;margin:0 auto;top:16px;animation:", " 0.3s ease-in-out;&[aria-hidden='true']{top:0;animation:", " 0.3s ease-in-out;}display:flex;align-items:center;box-shadow:", ";padding:12px;border-radius:4px;z-index:5000;min-width:296px;max-width:", "px;outline:none;line-height:1.5;font-size:14px;color:#454545;@media (max-width:", "px){max-width:95%;}background:#c5ecfa;&[data-type='success']{background:#c2e2da;}&[data-type='warning']{background:#fde9cc;}&[data-type='danger']{background:#facbcc;}"], fadeDown, fadeUp, Shadow.down4, ScreenSize.tablet, ScreenSize.tablet);
export var AlertIcon = styled.div.withConfig({
  displayName: "AlertStyle__AlertIcon",
  componentId: "sc-fcjw72-1"
})(["margin-right:8px;line-height:1;svg{display:block;}"]);
export var AlertMessage = styled.div.withConfig({
  displayName: "AlertStyle__AlertMessage",
  componentId: "sc-fcjw72-2"
})(["margin-right:8px;flex-grow:1;"]);
export var AlertClose = styled.div.withConfig({
  displayName: "AlertStyle__AlertClose",
  componentId: "sc-fcjw72-3"
})(["line-height:1;cursor:pointer;font-size:10px;"]);