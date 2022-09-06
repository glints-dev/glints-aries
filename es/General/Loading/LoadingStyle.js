import styled, { keyframes, css } from 'styled-components';
import { Greyscale, SecondaryColor } from '../../Utils/Colors';
var spin = keyframes(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
var spinnerGlobal = css(["content:'';position:absolute;width:100%;height:100%;border-radius:100%;border:0.35em solid transparent;border-top-color:", ";"], Greyscale.white);
export var LoadingContainer = styled.div.withConfig({
  displayName: "LoadingStyle__LoadingContainer",
  componentId: "sc-fg2qx3-0"
})(["position:relative;display:inline-flex;"]);
export var Spinner = styled.div.withConfig({
  displayName: "LoadingStyle__Spinner",
  componentId: "sc-fg2qx3-1"
})(["position:relative;display:flex;justify-content:center;align-items:center;width:2em;height:2em;&:before{", ";z-index:100;animation:", " 1s infinite;}&:after{", ";border:0.35em solid ", ";}"], spinnerGlobal, spin, spinnerGlobal, SecondaryColor.actionblue);