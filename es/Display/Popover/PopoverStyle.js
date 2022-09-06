import styled, { keyframes } from 'styled-components';
var opacityAnimation = keyframes(["0%{opacity:0}80%{opacity:1;}"]);
export var PopoverContainer = styled.div.withConfig({
  displayName: "PopoverStyle__PopoverContainer",
  componentId: "sc-1cb03rg-0"
})(["position:relative;outline:none;display:flex;justify-content:flex-end;cursor:pointer;"]);
export var PopoverChildren = styled.div.withConfig({
  displayName: "PopoverStyle__PopoverChildren",
  componentId: "sc-1cb03rg-1"
})(["position:relative;"]);
export var PopoverContentWrapper = styled.div.withConfig({
  displayName: "PopoverStyle__PopoverContentWrapper",
  componentId: "sc-1cb03rg-2"
})(["display:flex;align-items:center;margin-left:1em;"]);
export var PopoverItemWrapper = styled.div.withConfig({
  displayName: "PopoverStyle__PopoverItemWrapper",
  componentId: "sc-1cb03rg-3"
})(["position:relative;"]);
export var PopoverIcon = styled.div.withConfig({
  displayName: "PopoverStyle__PopoverIcon",
  componentId: "sc-1cb03rg-4"
})(["display:flex;font-size:1.5em;"]);
export var PopOverContent = styled.div.withConfig({
  displayName: "PopoverStyle__PopOverContent",
  componentId: "sc-1cb03rg-5"
})(["position:absolute;right:50%;top:2.5em;animation:", " 0.2s linear;z-index:10;min-width:250px;transform:translateX(calc(1em + 0.7em)) translateY(0.5em);"], opacityAnimation);