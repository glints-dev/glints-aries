import styled from 'styled-components';
import { Greyscale } from '../../Utils/Colors';
import { Shadow } from '../../Utils/Shadow';
export var PointingModalContainer = styled.div.withConfig({
  displayName: "PointingModalStyle__PointingModalContainer",
  componentId: "sc-wzvi3y-0"
})(["position:relative;background:", ";box-shadow:", ";outline:none;"], Greyscale.white, Shadow.down2);
export var PointingModalHeaderArrow = styled.div.withConfig({
  displayName: "PointingModalStyle__PointingModalHeaderArrow",
  componentId: "sc-wzvi3y-1"
})(["position:absolute;right:1em;top:-0.7em;width:1.5em;height:1.5em;transform:rotate(45deg);background-color:white;box-shadow:-2px -2px 5px rgba(0,0,0,0.06);"]);
export var PointingModalHeaderWrapper = styled.div.withConfig({
  displayName: "PointingModalStyle__PointingModalHeaderWrapper",
  componentId: "sc-wzvi3y-2"
})(["display:flex;align-items:center;padding:1.2em;> *:first-child{margin-left:0;}> *:last-child{margin-right:0;}> *{margin-left:0.5em;margin-right:0.5em;}.aries-modal-profile{font-weight:700;}span{font-size:1em;font-weight:500;}a{display:flex;color:", ";font-size:1.2em;margin:0;}"], Greyscale.black);
export var PointingModalBodyWrapper = styled.div.withConfig({
  displayName: "PointingModalStyle__PointingModalBodyWrapper",
  componentId: "sc-wzvi3y-3"
})(["position:relative;display:flex;flex-direction:column;ul{padding:1.2em 0;margin:0;}"]);
export var PointingModalItemWrapper = styled.li.withConfig({
  displayName: "PointingModalStyle__PointingModalItemWrapper",
  componentId: "sc-wzvi3y-4"
})(["font-weight:600;cursor:pointer;padding:0.5em 1.2em;list-style-type:none;&:last-child{margin-bottom:0;}*{cursor:pointer;color:", ";}&:hover{background:", ";}"], Greyscale.black, Greyscale.softgrey);
export var PointingModalFooterWrapper = styled.footer.withConfig({
  displayName: "PointingModalStyle__PointingModalFooterWrapper",
  componentId: "sc-wzvi3y-5"
})(["display:flex;position:relative;padding:1.2em;"]);