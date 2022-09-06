import styled from 'styled-components';
import { ScreenSize } from '../../Utils/StyleConfig';
import { Greyscale } from '../../Utils/Colors';
import { Shadow } from '../../Utils/Shadow';
export var SwipeableContainer = styled.div.withConfig({
  displayName: "SwipeableStyle__SwipeableContainer",
  componentId: "sc-xvh6jb-0"
})(["display:flex;position:relative;overflow-x:auto;&::-webkit-scrollbar{appearance:none;height:7px;}&::-webkit-scrollbar-thumb{border-radius:4px;background-color:rgba(0,0,0,0.25);}@media (max-width:", "px){scrollbar-width:none;&::-webkit-scrollbar{display:none;}}"], ScreenSize.desktopS);
export var SwipeableItemWrapper = styled.div.withConfig({
  displayName: "SwipeableStyle__SwipeableItemWrapper",
  componentId: "sc-xvh6jb-1"
})(["display:inline-flex;margin:0 1em;padding:1em 0;&:first-child{margin-left:0;}&:last-child{margin-right:0;}"]);
export var SwipeableCardExample = styled.div.withConfig({
  displayName: "SwipeableStyle__SwipeableCardExample",
  componentId: "sc-xvh6jb-2"
})(["width:150px;height:150px;background:", ";box-shadow:", ";display:flex;justify-content:center;align-items:center;"], Greyscale.white, Shadow.down1);