import styled from 'styled-components';
import { Greyscale } from '../../../Utils/Colors';
import BasicTag from '../BasicTag';
export var AddTag = styled(BasicTag).withConfig({
  displayName: "AddTag",
  componentId: "sc-ggz15u-0"
})(["border-style:dashed;border-color:", ";&:hover{border-color:", ";&:active{border-color:", ";}"], Greyscale.lightgrey, Greyscale.grey, Greyscale.black);