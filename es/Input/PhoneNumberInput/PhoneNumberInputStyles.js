import styled, { css } from 'styled-components';
import { Greyscale, PrimaryColor, SecondaryColor } from '../../Utils/Colors';
import { Shadow } from '../../Utils/Shadow';
import { Loading } from '../../General/Loading';
export var PhoneNumberInputContainer = styled.div.withConfig({
  displayName: "PhoneNumberInputStyles__PhoneNumberInputContainer",
  componentId: "sc-80kraj-0"
})(["position:relative;"]);
export var TopRow = styled.div.withConfig({
  displayName: "PhoneNumberInputStyles__TopRow",
  componentId: "sc-80kraj-1"
})(["display:flex;border:2px solid ", ";align-items:center;&:hover{border:2px solid ", ";}&[data-invalid='true']{border:2px solid ", ";}"], Greyscale.lightgrey, SecondaryColor.actionblue, PrimaryColor.glintsred);
export var CallingCodeInputToggle = styled.button.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeInputToggle",
  componentId: "sc-80kraj-2"
})(["border:none;background:none;padding:12px;padding-right:0;cursor:text;font-size:16px;display:flex;align-items:bottom;"]);
export var CallingCodeInputOpenIndicator = styled.span.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeInputOpenIndicator",
  componentId: "sc-80kraj-3"
})(["margin-left:8px;padding-right:8px;border-right:1px solid ", ";cursor:pointer;svg{margin-top:-2px;}"], Greyscale.lightgrey);
export var Label = styled.label.withConfig({
  displayName: "PhoneNumberInputStyles__Label",
  componentId: "sc-80kraj-4"
})(["position:absolute;left:0.5em;top:-0.5em;visibility:hidden;padding:0 0.3em;background:white;color:", ";"], Greyscale.devilsgrey);
var visibleLabel = css(["+ ", "{visibility:visible;color:#646464;font-size:12px;}"], Label);
export var SignificantNumberInput = styled.input.withConfig({
  displayName: "PhoneNumberInputStyles__SignificantNumberInput",
  componentId: "sc-80kraj-5"
})(["border:none;width:100%;font-size:16px;padding:12px;&:focus{outline:2px solid ", ";::placeholder{color:transparent;}", "}", " &[data-invalid='true']:focus{outline:2px solid ", ";}"], SecondaryColor.actionblue, visibleLabel, function (_ref) {
  var value = _ref.value;
  return value && visibleLabel;
}, PrimaryColor.glintsred);
export var TopRowAddon = styled.div.withConfig({
  displayName: "PhoneNumberInputStyles__TopRowAddon",
  componentId: "sc-80kraj-6"
})(["position:absolute;right:8px;top:50%;transform:translateY(-50%);"]);
export var CallingCodeInput = styled.div.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeInput",
  componentId: "sc-80kraj-7"
})(["position:absolute;display:none;z-index:2;background:white;margin-top:4px;width:100%;border:1px solid ", ";box-shadow:", ";", ""], Greyscale.lightgrey, Shadow.down1, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen && css(["display:initial;"]);
});
var CALLING_CODE_INPUT_MARGIN = '8px';
export var CallingCodeFilterInputGroup = styled.div.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeFilterInputGroup",
  componentId: "sc-80kraj-8"
})(["position:relative;width:90%;width:calc(100% - 2 * ", ");margin:", ";"], CALLING_CODE_INPUT_MARGIN, CALLING_CODE_INPUT_MARGIN);
export var CallingCodeFilterInput = styled.input.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeFilterInput",
  componentId: "sc-80kraj-9"
})(["width:100%;border:2px solid ", ";padding:12px;font-size:14px;box-sizing:border-box;&:focus{border:2px solid ", ";outline:none;}"], Greyscale.lightgrey, SecondaryColor.actionblue);
export var CallingCodeInputLoading = styled(Loading).withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeInputLoading",
  componentId: "sc-80kraj-10"
})(["position:absolute;right:8px;top:50%;transform:translateY(-50%);"]);
export var CallingCodeOptionsList = styled.ol.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeOptionsList",
  componentId: "sc-80kraj-11"
})(["list-style:none;margin:0;padding:0;max-height:260px;overflow:auto;font-size:16px;"]);

var getGroupHeaderStyles = function getGroupHeaderStyles(_ref3) {
  var withGroupHeader = _ref3.withGroupHeader;
  return withGroupHeader && css(["content:'", "';display:block;padding:4px 8px;color:", ";font-size:8px;border-bottom:1px solid ", ";text-transform:uppercase;background:white;cursor:default;"], withGroupHeader, Greyscale.devilsgrey, Greyscale.softgrey);
};

export var CallingCodeOption = styled.li.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeOption",
  componentId: "sc-80kraj-12"
})(["cursor:pointer;&:hover{color:", ";background:", ";}&[aria-selected='true']{color:", ";background:", ";}::before{", "}"], SecondaryColor.actionblue, Greyscale.softgrey, SecondaryColor.actionblue, Greyscale.softgrey, getGroupHeaderStyles);
export var CallingCodeOptionCallingCode = styled.div.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeOptionCallingCode",
  componentId: "sc-80kraj-13"
})(["min-width:48px;margin-right:8px;padding:8px;padding-right:0;"]);
export var CallingCodeOptionLabel = styled.div.withConfig({
  displayName: "PhoneNumberInputStyles__CallingCodeOptionLabel",
  componentId: "sc-80kraj-14"
})(["width:100%;padding:8px;padding-left:0;color:", ";&:hover{color:inherit;}"], Greyscale.devilsgrey);
export var GroupHeader = styled.div.withConfig({
  displayName: "PhoneNumberInputStyles__GroupHeader",
  componentId: "sc-80kraj-15"
})(["padding:4px 8px;color:", ";font-size:8px;border-bottom:1px solid ", ";text-transform:uppercase;"], Greyscale.devilsgrey, Greyscale.softgrey);
export var NoOptions = styled.div.withConfig({
  displayName: "PhoneNumberInputStyles__NoOptions",
  componentId: "sc-80kraj-16"
})(["padding:24px 8px;text-align:center;color:", ";font-size:14px;"], Greyscale.devilsgrey);
export var Error = styled.div.withConfig({
  displayName: "PhoneNumberInputStyles__Error",
  componentId: "sc-80kraj-17"
})(["margin-top:8px;color:", ";"], PrimaryColor.glintsred);