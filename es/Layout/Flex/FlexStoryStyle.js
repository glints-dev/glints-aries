import styled from 'styled-components';
import { Flex as BaseFlex } from '../../../src/Layout/Flex';
export var Item = styled.span.withConfig({
  displayName: "FlexStoryStyle__Item",
  componentId: "sc-jlb02q-0"
})(["display:flex;justify-content:center;align-items:center;width:50px;height:50px;background-color:#f3f3f3;"]);
export var Flex = styled(BaseFlex).withConfig({
  displayName: "FlexStoryStyle__Flex",
  componentId: "sc-jlb02q-1"
})(["width:500px;height:150px;padding:16px;background-color:#4caf50;"]);