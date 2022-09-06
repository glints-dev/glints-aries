import styled from 'styled-components';
import { Greyscale } from '../../Utils/Colors';
export var TextareaContainer = styled.div.withConfig({
  displayName: "TextareaStyle__TextareaContainer",
  componentId: "sc-1998n74-0"
})(["flex-grow:1;position:relative;display:flex;"]);
export var TextareaLabel = styled.label.withConfig({
  displayName: "TextareaStyle__TextareaLabel",
  componentId: "sc-1998n74-1"
})(["position:absolute;left:22px;top:1em;color:", ";transition:all 0.2s;pointer-events:none;font-weight:400;font-size:16px;", ""], Greyscale.devilsgrey, function (_ref) {
  var floating = _ref.floating;

  if (floating) {
    return "\n        padding: 0 5px;\n        transform: translate3d(-15px,-20px,0);\n        transition: all .2s;\n        font-size: 12px;\n        background: " + Greyscale.white + "\n      ";
  }
});
export var TextareaInput = styled.textarea.withConfig({
  displayName: "TextareaStyle__TextareaInput",
  componentId: "sc-1998n74-2"
})(["position:relative;width:100%;outline:none;font-size:16px;line-height:1.5;padding:", ";background-color:", ";border:unset;transition:border 0.5s;resize:vertical;overflow:auto;height:auto;border-radius:", ";&:disabled{cursor:not-allowed;background:", ";+ ", "{background:transparent;color:", ";}&:hover{border:2px solid ", ";}}&:hover{background-color:", ";border:unset;+ ", "{color:", ";}}&:focus{background-color:", ";border:unset;+ ", "{padding:0 5px;transform:translate3d(-15px,-20px,0);transition:all 0.2s;color:", ";font-size:12px;background:", ";}}"], function (_ref2) {
  var small = _ref2.small;
  return small ? '8px 16px' : '12px 16px';
}, function (_ref3) {
  var status = _ref3.status;
  return status === 'error' ? ' rgba(236, 39, 43, 0.08)' : 'rgb(1, 126, 183, 0.08)';
}, function (_ref4) {
  var small = _ref4.small;
  return small ? '4px' : '8px';
}, Greyscale.softgrey, TextareaLabel, Greyscale.grey, Greyscale.lightgrey, function (_ref5) {
  var status = _ref5.status;
  return status === 'error' ? ' rgba(236, 39, 43, 0.08)' : 'rgb(1, 126, 183, 0.16)';
}, TextareaLabel, Greyscale.devilsgrey, function (_ref6) {
  var status = _ref6.status;
  return status === 'error' ? ' rgba(236, 39, 43, 0.08)' : 'rgb(1, 126, 183, 0.24)';
}, TextareaLabel, Greyscale.devilsgrey, Greyscale.white);