import styled from 'styled-components';
import { PrimaryColor } from '../../../Utils/Colors';
import BasicTag from '../BasicTag';
export var ResetTag = styled(BasicTag).withConfig({
  displayName: "ResetTag",
  componentId: "sc-be45u9-0"
})(["color:", ";border-style:solid;border-color:transparent;background-color:rgba(236,39,43,0.05);&:hover{background-color:rgba(236,39,43,0.1);}&:active{background-color:rgba(236,39,43,0.2);}"], PrimaryColor.glintsred);