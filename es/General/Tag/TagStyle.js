import styled from 'styled-components';
import { Greyscale } from '../../Utils/Colors';
export var TagContent = styled.label.withConfig({
  displayName: "TagStyle__TagContent",
  componentId: "sc-66xi2f-0"
})(["display:flex;align-items:center;padding:5px 15px;outline:none;"]);
export var TagContainer = styled.div.withConfig({
  displayName: "TagStyle__TagContainer",
  componentId: "sc-66xi2f-1"
})(["display:inline-flex;border-radius:", ";border-width:1px;border-style:solid;font-size:14px;color:", ";", ";", " &:focus{outline:none;}&:focus > ", "{outline:5px auto -webkit-focus-ring-color;}"], function (_ref) {
  var block = _ref.block;
  return !block && '20px';
}, Greyscale.black, function (_ref2) {
  var isClickable = _ref2.isClickable;

  if (isClickable) {
    return TagContent + " {\n        cursor: pointer;\n      }";
  }
}, function (_ref3) {
  var outline = _ref3.outline;

  if (!outline) {
    return "\n        background: " + Greyscale.softgrey + ";\n        border-color: " + Greyscale.lightgrey + ";\n      ";
  } else {
    return "\n        border-color: " + Greyscale.black + ";\n      ";
  }
}, TagContent);
var IconContainer = styled.span.withConfig({
  displayName: "TagStyle__IconContainer",
  componentId: "sc-66xi2f-2"
})(["display:inline-flex;svg{width:12px;height:12px;}"]);
export var StartIconContainer = styled(IconContainer).withConfig({
  displayName: "TagStyle__StartIconContainer",
  componentId: "sc-66xi2f-3"
})(["margin-right:8px;"]);
export var EndIconContainer = styled(IconContainer).withConfig({
  displayName: "TagStyle__EndIconContainer",
  componentId: "sc-66xi2f-4"
})(["margin-left:8px;svg{fill:", ";cursor:pointer;&:hover,&:active{fill:", ";}}"], Greyscale.grey, Greyscale.black);