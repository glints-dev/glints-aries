import styled from 'styled-components';

import { ScreenSize } from '../../../src/Utils/StyleConfig';

export const contentWidth = 80;
export const contentHeight = 30;

export const Container = styled.div`
  position: relative;
  display: inline-block;
  background-color: #f3f3f3;
`;

export const SpaceText = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const PaddingText = styled(SpaceText)`
  width: ${contentWidth}px;
  height: ${contentHeight}px;
`;

export const Content = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${contentWidth}px;
  height: ${contentHeight}px;
  background-color: white;
`;

export const MobileText = styled.span`
  @media (min-width: ${ScreenSize.desktopS}px) {
    display: none;
  }
`;

export const DesktopText = styled.span`
  display: none;
  @media (min-width: ${ScreenSize.desktopS}px) {
    display: block;
  }
`;
