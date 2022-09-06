import styled, { css } from 'styled-components';
import { Greyscale, PrimaryColor } from '../../Utils/Colors';
import { ScreenSize } from '../../Utils/StyleConfig';
var arrow = css(["position:absolute;display:flex;top:50%;transform:translateY(-50%);cursor:pointer;font-size:2em;"]);
export var SliderContentWrapper = styled.div.withConfig({
  displayName: "SliderStyle__SliderContentWrapper",
  componentId: "sc-1wof4f4-0"
})(["position:relative;display:flex;align-items:center;"]);
export var SliderItemWrapper = styled.div.withConfig({
  displayName: "SliderStyle__SliderItemWrapper",
  componentId: "sc-1wof4f4-1"
})(["display:inline-flex;flex:0 0 auto;justify-content:center;width:100%;white-space:normal;"]);
export var LeftArrowContainer = styled.div.withConfig({
  displayName: "SliderStyle__LeftArrowContainer",
  componentId: "sc-1wof4f4-2"
})(["", ";left:0;cursor:", ";"], arrow, function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'not-allowed' : 'pointer';
});
export var RightArrowContainer = styled.div.withConfig({
  displayName: "SliderStyle__RightArrowContainer",
  componentId: "sc-1wof4f4-3"
})(["", ";right:0;cursor:", ";"], arrow, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled ? 'not-allowed' : 'pointer';
});
export var SliderContainer = styled.div.withConfig({
  displayName: "SliderStyle__SliderContainer",
  componentId: "sc-1wof4f4-4"
})(["position:relative;white-space:nowrap;overflow:hidden;outline:none;", "{padding:", ";}"], SliderItemWrapper, function (_ref3) {
  var fullContent = _ref3.fullContent;
  return !fullContent && '2em 4em';
});
export var NavigationContainer = styled.ul.withConfig({
  displayName: "SliderStyle__NavigationContainer",
  componentId: "sc-1wof4f4-5"
})(["position:absolute;bottom:0;width:100%;padding:0;margin:10px 0;display:flex;justify-content:center;align-items:center;"]);
export var NavigationItem = styled.li.withConfig({
  displayName: "SliderStyle__NavigationItem",
  componentId: "sc-1wof4f4-6"
})(["display:inline-flex;width:6px;height:6px;background:", ";border-radius:50%;box-shadow:0 1px 1px rgba(0,0,0,0.15);margin:0 3px;cursor:pointer;&.active{width:20px;height:6px;border-radius:8px;background:", ";}@media (min-width:", "px){width:8px;height:8px;margin:0 4px;&.active{width:30px;height:10px;}}"], Greyscale.lightgrey, PrimaryColor.glintsyellow, ScreenSize.tablet);