import styled, { keyframes } from 'styled-components';
var openFromRight = keyframes(["from{transform:translateX(100%);}to{transform:translateX(0%);}"]);
var closeToRight = keyframes(["from{transform:translateX(0%);}to{transform:translateX(100%);}"]);
var openFromLeft = keyframes(["from{transform:translateX(-100%);}to{transform:translateX(0%);}"]);
var closeToLeft = keyframes(["from{transform:translateX(0%);}to{transform:translateX(-100%);}"]);
export var DrawerContainer = styled.div.withConfig({
  displayName: "DrawerStyle__DrawerContainer",
  componentId: "sc-13skgii-0"
})(["position:fixed;min-height:100vh;max-height:100vh;width:100vw;top:0px;left:0px;", ";z-index:9999;"], function (_ref) {
  var open = _ref.open;
  return open ? "\n    opacity: 1;\n    visibility: visible;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: opacity 0.5s, visibility 0.1s, background-color 0.5s;\n  " : "\n    opacity: 0;\n    visibility: hidden;\n    background-color: transparent;\n    transition: opacity 0.5s, visibility 0.4s 0.1s, background-color 0.5s;\n  ";
});
export var DrawerWrapper = styled.div.withConfig({
  displayName: "DrawerStyle__DrawerWrapper",
  componentId: "sc-13skgii-1"
})(["position:absolute;height:100vh;width:80vw;max-width:300px;top:0px;", " background-color:white;animation:", " 0.3s ease-in-out;transform:", ";outline:none;box-shadow:-2px 0 8px rgba(0,0,0,0.15);overflow-y:auto;"], function (_ref2) {
  var position = _ref2.position;
  return {
    left: "\n    left: 0px;\n  ",
    right: "\n    right: 0px;\n  "
  }[position];
}, function (_ref3) {
  var open = _ref3.open,
      position = _ref3.position;
  return {
    right: open ? openFromRight : closeToRight,
    left: open ? openFromLeft : closeToLeft
  }[position];
}, function (_ref4) {
  var open = _ref4.open,
      position = _ref4.position;
  return {
    right: open ? 'translateX(0%)' : 'translateX(100%)',
    left: open ? 'translateX(0%)' : 'translateX(-100%)'
  }[position];
});