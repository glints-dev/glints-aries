import styled, { keyframes } from 'styled-components';
import { Greyscale, SecondaryColor } from '../../Utils/Colors';
var animateCollapsible = keyframes(["from{opacity:0;transform:translate3d(0,10%,0);}to{opacity:1;transform:translate3d(0,0,0);}"]);
export var CollapsibleContent = styled.div.withConfig({
  displayName: "CollapsibleStyle__CollapsibleContent",
  componentId: "sc-133mwvh-0"
})(["position:relative;outline:none;"]);
export var CollapsibleContainer = styled.div.withConfig({
  displayName: "CollapsibleStyle__CollapsibleContainer",
  componentId: "sc-133mwvh-1"
})(["cursor:pointer;color:black;background-color:", ";border:solid 1px ", ";font-size:1em;&:focus{outline:none;}&:focus > ", "{outline:5px auto -webkit-focus-ring-color;}"], Greyscale.white, Greyscale.lightgrey, CollapsibleContent);
export var CollapsibleHeader = styled.div.withConfig({
  displayName: "CollapsibleStyle__CollapsibleHeader",
  componentId: "sc-133mwvh-2"
})(["background:", ";display:flex;justify-content:space-between;align-items:center;padding:1.2em;&:hover{color:", ";}svg{transform:rotate(0);transition:transform 0.5s;", "}"], Greyscale.white, SecondaryColor.actionblue, function (_ref) {
  var isOpen = _ref.isOpen;

  if (isOpen) {
    return "\n        transform: rotate(180deg);\n        transition: transform .5s;\n      ";
  }
});
export var CollapsibleBody = styled.div.withConfig({
  displayName: "CollapsibleStyle__CollapsibleBody",
  componentId: "sc-133mwvh-3"
})(["padding:0 1.2em 1.2em 1.2em;margin-bottom:0;animation:", " 0.3s linear;cursor:default;"], animateCollapsible);