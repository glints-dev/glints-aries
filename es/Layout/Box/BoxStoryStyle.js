import styled from 'styled-components';
import { Box as BaseBox } from '../../../src/Layout/Box';
export var GreyBackground = styled.div.withConfig({
  displayName: "BoxStoryStyle__GreyBackground",
  componentId: "sc-1avr4wr-0"
})(["display:inline-block;background-color:#f3f3f3;"]);
export var Content = styled.span.withConfig({
  displayName: "BoxStoryStyle__Content",
  componentId: "sc-1avr4wr-1"
})(["background-color:white;"]);
export var Box = styled(BaseBox).withConfig({
  displayName: "BoxStoryStyle__Box",
  componentId: "sc-1avr4wr-2"
})(["background-color:#4caf50;"]);