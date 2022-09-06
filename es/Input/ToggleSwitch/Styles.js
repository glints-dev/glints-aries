import styled from 'styled-components';
import { Greyscale, SecondaryColor } from '../../Utils/Colors';
var DEFAULTS = {
  activeBackgroundColor: SecondaryColor.actionblue,
  inactiveBackgroundColor: Greyscale.grey,
  inactiveBallColor: Greyscale.white,
  activeBallColor: Greyscale.white
};
var Toggle = styled.button.withConfig({
  displayName: "Styles__Toggle",
  componentId: "sc-bsue54-0"
})(["cursor:pointer;display:flex;align-items:center;overflow:hidden;position:relative;transform:translate3d(0,0,0);background-color:", ";height:25px;width:56px;border-radius:14px;padding:0px;border:none;"], function (_ref) {
  var active = _ref.active;
  return active ? DEFAULTS.activeBackgroundColor : DEFAULTS.inactiveBackgroundColor;
});
var ToggleBall = styled.div.withConfig({
  displayName: "Styles__ToggleBall",
  componentId: "sc-bsue54-1"
})(["display:flex;justify-content:center;align-items:center;border-radius:50%;transition:transform 0.3s cubic-bezier(1,0.19,0.15,0.7);transition-delay:0.1s;background-color:", ";height:19px;width:19px;margin:3px;transform:", ";&:active{background-color:", ";}"], DEFAULTS.inactiveBallColor, function (props) {
  return props.active ? "translateX(31px)" : 'translateX(0px)';
}, DEFAULTS.activeBallColor);
export { ToggleBall, Toggle };