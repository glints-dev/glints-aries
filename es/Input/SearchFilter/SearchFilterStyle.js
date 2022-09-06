import styled from 'styled-components';
import Button from '../../General/Button';
import { ScreenSize } from '../../Utils/StyleConfig';
import { Greyscale, SecondaryColor } from '../../Utils/Colors';
export var SearchFilterContainer = styled.div.withConfig({
  displayName: "SearchFilterStyle__SearchFilterContainer",
  componentId: "sc-18veyec-0"
})(["position:relative;"]);
export var SearchFilterBar = styled.div.withConfig({
  displayName: "SearchFilterStyle__SearchFilterBar",
  componentId: "sc-18veyec-1"
})(["display:flex;align-items:center;position:relative;input{padding:25px 6em 25px 30px;background:", ";border:3px solid ", ";font-size:1.4em;line-height:1.5;color:", ";width:100%;@media (max-width:", "px){padding:1em 5em 1em 1em;font-size:1em;}&:focus{outline:none;}&:hover,&:focus{border:3px solid ", ";}}"], Greyscale.white, Greyscale.grey, Greyscale.grey, ScreenSize.mobileL, SecondaryColor.actionblue);
export var SearchFilterButton = styled(Button).withConfig({
  displayName: "SearchFilterStyle__SearchFilterButton",
  componentId: "sc-18veyec-2"
})(["position:absolute;right:0;top:0;font-size:1.5em;height:100%;button{@media (max-width:", "px){padding:15px 20px;}}"], ScreenSize.mobileL);
export var SearchFilterBodyWrapper = styled.div.withConfig({
  displayName: "SearchFilterStyle__SearchFilterBodyWrapper",
  componentId: "sc-18veyec-3"
})(["position:relative;display:", ";z-index:9999;"], function (_ref) {
  var open = _ref.open;
  return open ? 'block' : 'none';
});
export var SearchFilterResultContainer = styled.div.withConfig({
  displayName: "SearchFilterStyle__SearchFilterResultContainer",
  componentId: "sc-18veyec-4"
})(["position:absolute;width:100%;display:grid;font-size:1.1em;grid-template-columns:repeat(3,1fr);padding:25px 30px;background:", ";border:1px solid ", ";@media (max-width:", "px){grid-template-columns:auto;grid-gap:2em;}"], Greyscale.white, Greyscale.lightgrey, ScreenSize.mobileL);
export var SearchFilterListWrapper = styled.div.withConfig({
  displayName: "SearchFilterStyle__SearchFilterListWrapper",
  componentId: "sc-18veyec-5"
})(["position:relative;label{color:", ";text-transform:uppercase;font-weight:600;letter-spacing:0.3px;}ul{padding:0;margin:0;li{display:flex;align-items:center;margin-bottom:0.6em;cursor:pointer;list-style-type:none;&:first-child{margin-top:0.5em;}&:last-child{margin-bottom:0;}svg,img{margin-right:1em;}img{object-fit:cover;border-radius:50%;}}}"], Greyscale.grey);
export var SearchFilterItemWrapper = styled.li.withConfig({
  displayName: "SearchFilterStyle__SearchFilterItemWrapper",
  componentId: "sc-18veyec-6"
})(["position:relative;"]);