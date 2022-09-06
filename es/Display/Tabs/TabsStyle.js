import styled from 'styled-components';
import { ScreenSize, ETabThemeVariant, ETabAlignment } from '../../Utils/StyleConfig';
import { SecondaryColor, Greyscale } from '../../Utils/Colors';

var isNewTab = function isNewTab(theme) {
  return theme !== ETabThemeVariant.BLACK;
};

export var TabsContainer = styled.div.withConfig({
  displayName: "TabsStyle__TabsContainer",
  componentId: "sc-t1kk7p-0"
})(["position:relative;&.vertical-aries-tabs{@media (min-width:", "px){display:flex;max-width:100%;}}"], ScreenSize.tablet);
export var TabsHeader = styled.div.withConfig({
  displayName: "TabsStyle__TabsHeader",
  componentId: "sc-t1kk7p-1"
})(["position:relative;&.vertical-tabs-header{@media (min-width:", "px){width:20%;}}.vertical-tabs-list{@media (min-width:", "px){border-right:1px solid ", ";border-bottom:none;flex-direction:column;}}ul{border-bottom:1px solid ", ";display:flex;position:relative;white-space:nowrap;overflow:auto;font-size:1em;padding:0;margin:0;background-image:linear-gradient(to right,white,white),linear-gradient(to right,white,white),linear-gradient( to right,rgba(198,198,198,0.3),rgba(255,255,255,0) ),linear-gradient(to left,rgba(198,198,198,0.3),rgba(255,255,255,0));background-position:left center,right center,left center,right center;background-repeat:no-repeat;background-size:15px 100%,15px 100%,15px 100%,15px 100%;background-attachment:local,local,scroll,scroll;&::-webkit-scrollbar{display:none;}.horizontal-tab{margin:", ";}.vertical-tab{margin:0 10px;@media (min-width:", "px){margin:0;padding-left:15px;}}li{text-transform:uppercase;list-style-type:none;&:first-child.horizontal-tab{margin-left:0;}&:last-child.horizontal-tab{margin-right:0;}&:first-child.vertical-tab{margin-top:0;}&:last-child.vertical-tab{margin-bottom:0;}&.active.horizontal-tab,&.active.vertical-tab{border-bottom:", ";button{font-weight:bold;text-transform:uppercase;color:", ";}button:hover{border:0;}}&.active.vertical-tab{@media (min-width:", "px){border-right:", ";border-bottom:none;}button{font-weight:bold;text-transform:uppercase;}}}svg{margin-right:10px;height:15px;width:15px;}&:focus{outline:none;}.vertical-tab button{text-align:left;}button{width:100%;padding:20px 0;background:transparent;border:none;cursor:pointer;outline:none;text-transform:uppercase;", ";}button:hover{", ";", ";}}@media ", "{li{margin:0 15px;}}"], ScreenSize.tablet, ScreenSize.tablet, Greyscale.softgrey, Greyscale.softgrey, function (_ref) {
  var theme = _ref.theme;
  return isNewTab(theme) ? '0 15px' : '0 10px';
}, ScreenSize.tablet, function (_ref2) {
  var theme = _ref2.theme;
  return isNewTab(theme) ? "4px solid " + SecondaryColor.actionblue : "2px solid " + Greyscale.black;
}, function (_ref3) {
  var theme = _ref3.theme;
  return isNewTab(theme) ? "" + SecondaryColor.actionblue : "" + Greyscale.black;
}, ScreenSize.tablet, function (_ref4) {
  var theme = _ref4.theme;
  return isNewTab(theme) ? "4px solid " + SecondaryColor.actionblue : "2px solid " + Greyscale.black;
}, function (_ref5) {
  var theme = _ref5.theme;

  if (isNewTab(theme)) {
    return "\n            letter-spacing: 1px;\n            font-weight: 500;\n            color: " + Greyscale.grey + ";\n          ";
  }
}, function (_ref6) {
  var theme = _ref6.theme;

  if (isNewTab(theme)) {
    return "\n          color: " + SecondaryColor.actionblue + ";\n          border-bottom: 4px solid rgba(1, 126, 183, 0.5);\n          ";
  }
}, function (_ref7) {
  var alignment = _ref7.alignment,
      theme = _ref7.theme;

  if (alignment === ETabAlignment.VERTICAL && isNewTab(theme)) {
    return "\n            @media (min-width: " + ScreenSize.tablet + "px) {\n              border-bottom: 0;\n              border-right: 4px solid rgba(1, 126, 183, 0.5);\n            }\n          ";
  }
}, "(min-width: " + ScreenSize.desktopS + "px)");
export var TabsContent = styled.div.withConfig({
  displayName: "TabsStyle__TabsContent",
  componentId: "sc-t1kk7p-2"
})(["position:relative;outline:none;@media (min-width:", "px){&.tabs-item-vertical{margin-left:60px;}}"], ScreenSize.tablet);
export var TabsBody = styled.div.withConfig({
  displayName: "TabsStyle__TabsBody",
  componentId: "sc-t1kk7p-3"
})(["position:relative;padding-top:1.2em;&:focus{outline:none;}&:focus > ", "{outline:5px auto -webkit-focus-ring-color;}"], TabsContent);