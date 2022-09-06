import styled from 'styled-components';
import { Greyscale, SecondaryColor } from '../../Utils/Colors';
import { BadgeVariant } from './BadgeVariant';
import { Spacing } from '../../Layout/Spacing';
export var BadgeContainer = styled.div.withConfig({
  displayName: "BadgeStyle__BadgeContainer",
  componentId: "sc-vaj8hs-0"
})(["position:relative;display:inline-flex;color:", ";", " border-radius:3px;margin:0 ", "px;padding:0 ", "px;height:17px;min-width:18px;align-items:center;justify-content:center;span{font-size:12px;font-weight:700;text-align:center;}"], Greyscale.white, function (_ref) {
  var variant = _ref.variant;

  switch (variant) {
    case BadgeVariant.BLUE:
      return "\n          background: " + SecondaryColor.actionblue + ";\n        ";

    case BadgeVariant.DIMMED:
      return "\n          background: " + Greyscale.devilsgrey + ";\n        ";

    case BadgeVariant.WHITE:
      return "\n          background: " + Greyscale.white + ";\n          color: " + SecondaryColor.actionblue + ";\n        ";

    default:
      return "\n          background: #ed9300;\n        ";
  }
}, Spacing[4], Spacing[4]);