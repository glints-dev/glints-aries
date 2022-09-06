import styled from 'styled-components';
import { Greyscale, SecondaryColor } from '../../Utils/Colors';
export var DatepickerContainer = styled.div.withConfig({
  displayName: "DatepickerStyle__DatepickerContainer",
  componentId: "sc-t24o7e-0"
})(["flex-grow:1;position:relative;"]);
export var DatepickerWrapper = styled.div.withConfig({
  displayName: "DatepickerStyle__DatepickerWrapper",
  componentId: "sc-t24o7e-1"
})(["position:absolute;visibility:", ";opacity:", ";transform:", ";transform-origin:center top;transition:", ";background:", ";width:280px;box-shadow:0 2px 8px rgba(0,0,0,0.15);margin-top:0.5em;outline:none;z-index:1000;"], function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 'visible' : 'hidden';
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? '1' : '0';
}, function (_ref3) {
  var isOpen = _ref3.isOpen;
  return isOpen ? 'scaleY(1)' : 'scaleY(0.9)';
}, function (_ref4) {
  var isOpen = _ref4.isOpen;
  return isOpen ? 'all .2s ease' : 'all .1s ease';
}, Greyscale.white);
export var DatepickerSection = styled.div.withConfig({
  displayName: "DatepickerStyle__DatepickerSection",
  componentId: "sc-t24o7e-2"
})(["padding:10px;border-bottom:", ";"], function (_ref5) {
  var border = _ref5.border;
  return border && '1px solid #E8E8E8';
});
export var DatepickerContent = styled.div.withConfig({
  displayName: "DatepickerStyle__DatepickerContent",
  componentId: "sc-t24o7e-3"
})(["display:flex;justify-content:", ";align-items:center;"], function (_ref6) {
  var justify = _ref6.justify;
  return justify || 'center';
});
export var DatepickerMonthYearBtn = styled.button.withConfig({
  displayName: "DatepickerStyle__DatepickerMonthYearBtn",
  componentId: "sc-t24o7e-4"
})(["border:none;background:", ";padding:0;cursor:pointer;margin:0 4px;&:hover{color:", ";}"], Greyscale.white, SecondaryColor.actionblue);
export var DatepickerTodayBtn = styled.button.withConfig({
  displayName: "DatepickerStyle__DatepickerTodayBtn",
  componentId: "sc-t24o7e-5"
})(["display:flex;align-items:center;justify-content:center;border:none;outline:none;cursor:pointer;padding:0;&:hover{color:", ";}"], SecondaryColor.actionblue);
export var DatepickerNavigation = styled.div.withConfig({
  displayName: "DatepickerStyle__DatepickerNavigation",
  componentId: "sc-t24o7e-6"
})(["display:flex;"]);
export var DatepickerIconWrapper = styled.div.withConfig({
  displayName: "DatepickerStyle__DatepickerIconWrapper",
  componentId: "sc-t24o7e-7"
})(["display:flex;font-size:8px;cursor:pointer;margin:", ";"], function (_ref7) {
  var needMargin = _ref7.needMargin;
  return needMargin && '0 8px';
});
export var DatepickerTable = styled.table.withConfig({
  displayName: "DatepickerStyle__DatepickerTable",
  componentId: "sc-t24o7e-8"
})(["width:100%;max-width:100%;"]);
export var Td = styled.td.withConfig({
  displayName: "DatepickerStyle__Td",
  componentId: "sc-t24o7e-9"
})(["padding:0;"]);
export var Th = styled.th.withConfig({
  displayName: "DatepickerStyle__Th",
  componentId: "sc-t24o7e-10"
})(["padding:0;"]);
export var HoverContent = styled.div.withConfig({
  displayName: "DatepickerStyle__HoverContent",
  componentId: "sc-t24o7e-11"
})(["display:flex;justify-content:center;align-items:center;width:", ";height:", ";border-radius:2px;transition:background 0.3s ease;background-color:transparent;line-height:22px;", " ", ""], function (_ref8) {
  var biggerSize = _ref8.biggerSize;
  return !biggerSize ? '35px' : 'auto';
}, function (_ref9) {
  var biggerSize = _ref9.biggerSize;
  return !biggerSize ? '35px' : '50px';
}, function (_ref10) {
  var currentActiveDate = _ref10.currentActiveDate,
      index = _ref10.index;
  return currentActiveDate && currentActiveDate === index ? "\n      background-color: #1890ff;\n      color: white;\n  " : null;
}, function (_ref11) {
  var hoverAble = _ref11.hoverAble;
  return hoverAble ? "\n      cursor: pointer;\n      &:hover { \n          background-color: #E5F7FF;\n      }\n  " : null;
});