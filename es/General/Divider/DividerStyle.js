import styled from 'styled-components';
import { PrimaryColor, Greyscale } from '../../Utils/Colors';
export var DividerContainer = styled.div.withConfig({
  displayName: "DividerStyle__DividerContainer",
  componentId: "sc-1s5eeou-0"
})(["display:flex;width:100%;height:0.15em;", ""], function (_ref) {
  var theme = _ref.theme;

  switch (theme) {
    case 'red':
      return "\n          background: " + PrimaryColor.glintsred + ";\n        ";

    case 'blue':
      return "\n          background: " + PrimaryColor.glintsblue + ";\n        ";

    case 'yellow':
      return "\n          background: " + PrimaryColor.glintsyellow + ";\n        ";

    case 'white':
      return "\n          background: " + Greyscale.white + ";\n        ";

    case 'grey':
      return "\n          background: " + Greyscale.lightgrey + ";\n        ";

    default:
      return "\n          background: " + Greyscale.black + ";\n        ";
  }
});