import styled from 'styled-components';
import Loading from '../../General/Loading';
import { Greyscale, PrimaryColor, SecondaryColor } from '../../Utils/Colors';
import { Shadow } from '../../Utils/Shadow';
export var Container = styled.div.withConfig({
  displayName: "SelectStyle__Container",
  componentId: "sc-qr1jv6-0"
})(["position:relative;font-size:16px;"]);
export var Label = styled.label.withConfig({
  displayName: "SelectStyle__Label",
  componentId: "sc-qr1jv6-1"
})(["display:block;margin-bottom:8px;color:", ";font-weight:500;&[data-active='true']{color:", ";}&[data-disabled='true']{color:", ";}&[data-invalid='true']{color:", ";}"], Greyscale.devilsgrey, SecondaryColor.actionblue, Greyscale.lightgrey, PrimaryColor.glintsred);
export var Combobox = styled.div.withConfig({
  displayName: "SelectStyle__Combobox",
  componentId: "sc-qr1jv6-2"
})(["display:grid;grid-template-columns:1fr auto;grid-column-gap:0.75em;padding:0.75em 1em 0.75em 1em;border-radius:0.5em;background-color:#ebf5fa;:hover{background-color:#d6eaf2;}&[aria-expanded='true'],&[data-active='true']{background-color:#c2e0ed;}&[data-disabled='true']{background-color:", ";}&[data-invalid='true']{background-color:#feeeee;}"], Greyscale.softgrey);
export var Input = styled.input.withConfig({
  displayName: "SelectStyle__Input",
  componentId: "sc-qr1jv6-3"
})(["border:none;background-color:transparent;outline:none;color:", ";font-size:inherit;text-overflow:ellipsis;&:not([value='']){color:black;}:disabled::placeholder{color:", ";}"], Greyscale.devilsgrey, Greyscale.lightgrey);
export var IndicatorsContainer = styled.div.withConfig({
  displayName: "SelectStyle__IndicatorsContainer",
  componentId: "sc-qr1jv6-4"
})(["display:flex;flex-direction:row;>:not(:last-child){margin-right:0.75em;}"]);
export var _IndicatorButton = styled.button.withConfig({
  displayName: "SelectStyle___IndicatorButton",
  componentId: "sc-qr1jv6-5"
})(["padding:0;border:none;background:none;color:", ";font-size:inherit;"], Greyscale.devilsgrey);
export var ClearButton = styled(_IndicatorButton).withConfig({
  displayName: "SelectStyle__ClearButton",
  componentId: "sc-qr1jv6-6"
})([""]);
export var ToggleButton = styled(_IndicatorButton).withConfig({
  displayName: "SelectStyle__ToggleButton",
  componentId: "sc-qr1jv6-7"
})([""]);
export var LoadingIndicator = styled(Loading).withConfig({
  displayName: "SelectStyle__LoadingIndicator",
  componentId: "sc-qr1jv6-8"
})(["align-items:center;font-size:0.5625em;"]);
export var Menu = styled.ul.withConfig({
  displayName: "SelectStyle__Menu",
  componentId: "sc-qr1jv6-9"
})(["margin-top:4px;position:absolute;width:100%;padding:0.5em 0 0.5em 0;border:1px solid #eeeeee;border-radius:0.5em;box-shadow:", ";background-color:white;z-index:1;[aria-expanded='false'] + &{visibility:hidden;}"], Shadow.down3);
export var Item = styled.li.withConfig({
  displayName: "SelectStyle__Item",
  componentId: "sc-qr1jv6-10"
})(["padding:0.5em 1em;list-style-type:none;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;&[aria-selected='true']{background-color:", ";color:", ";}&[disabled]{background-color:transparent;color:", ";cursor:not-allowed;}"], Greyscale.softgrey, SecondaryColor.actionblue, Greyscale.lightgrey);
export var EmptyList = styled.li.withConfig({
  displayName: "SelectStyle__EmptyList",
  componentId: "sc-qr1jv6-11"
})(["padding:0.5em 1em;list-style-type:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:", ";cursor:not-allowed;"], Greyscale.lightgrey);
export var HelperText = styled.span.withConfig({
  displayName: "SelectStyle__HelperText",
  componentId: "sc-qr1jv6-12"
})(["margin-top:4px;color:", ";font-size:0.875em;&[data-invalid='true']{color:", ";}"], Greyscale.devilsgrey, PrimaryColor.glintsred);
export var GroupContainer = styled.li.withConfig({
  displayName: "SelectStyle__GroupContainer",
  componentId: "sc-qr1jv6-13"
})(["margin-bottom:0.5em;padding:0;list-style-type:none;"]);
export var Group = styled.ul.withConfig({
  displayName: "SelectStyle__Group",
  componentId: "sc-qr1jv6-14"
})(["padding:0;"]);
export var GroupHeading = styled.li.withConfig({
  displayName: "SelectStyle__GroupHeading",
  componentId: "sc-qr1jv6-15"
})(["padding:0.5em 1em;list-style-type:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:", ";font-size:0.75em;text-transform:uppercase;"], Greyscale.devilsgrey);