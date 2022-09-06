import styled from 'styled-components';
import { PrimaryColor } from '../../Utils/Colors';
export var HeadingContainer = styled.h1.withConfig({
  displayName: "HeadingStyle__HeadingContainer",
  componentId: "sc-2rxtwu-0"
})(["position:relative;display:", ";font-size:2em;text-transform:", ";span{background-image:", ";}"], function (_ref) {
  var inline = _ref.inline;
  return inline ? 'inline-block' : 'block';
}, function (_ref2) {
  var uppercaseText = _ref2.uppercaseText;
  return uppercaseText ? 'uppercase' : null;
}, "linear-gradient(to top, " + PrimaryColor.glintsyellow + " 40%, transparent 0)");