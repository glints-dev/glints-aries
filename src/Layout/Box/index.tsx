import * as React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { MarginProps, PaddingProps } from './types';
import { ScreenSize } from '../../Utils/StyleConfig';

const theme = {
  breakpoints: {
    mobileS: `${ScreenSize.mobileS}px`,
    mobileM: `${ScreenSize.mobileM}px`,
    mobileL: `${ScreenSize.mobileL}px`,
    tablet: `${ScreenSize.tablet}px`,
    desktopS: `${ScreenSize.desktopS}px`,
    desktopM: `${ScreenSize.desktopM}px`,
    desktopL: `${ScreenSize.desktopL}px`,
  },
  /*
    To overwrite default space theme in case <Box p={8} /> will be styled as
    `padding: 512px` instead of `padding: 8px`. Because the index 8 of default
    space theme is 512, can refer to https://styled-system.com/api/#defaults
  */
  space: [0],
};

export type Props = MarginProps & PaddingProps;

export const StyledBox = styled.div<Props>`
  ${space}
`;

export const Box: React.FC<Props> = props => (
  <StyledBox theme={theme} {...props} />
);
