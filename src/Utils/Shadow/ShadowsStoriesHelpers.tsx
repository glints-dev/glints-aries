import styled from 'styled-components';
import { Shadow } from '.';
import { PrimaryColor } from '../Colors';

export const levels = [
  [Shadow.up1, Shadow.down1],
  [Shadow.up2, Shadow.down2],
  [Shadow.up3, Shadow.down3],
  [Shadow.up4, Shadow.down4],
];

export const levelUsages = [
  'Elements that uses shadow by default',
  'Elements in hovered state',
  'Sticky elements, dropdown elements',
  'Alerts',
];

export const PreviewCell = styled.div`
  background-color: white;
  padding: 16px;
  display: flex;

  * {
    margin-top: 0 !important; // Overrides some weird Storybook styles
    margin-bottom: 0 !important; // Overrides some weird Storybook styles
  }
`;

export const PreviewBox = styled.div<{ shadow: string }>`
  box-shadow: ${({ shadow }) => shadow};
  margin: 16px;
  border: 1px solid black;
  background-color: ${PrimaryColor.glintsyellow};
  width: 32px;
  height: 32px;
`;
