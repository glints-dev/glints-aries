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
};

export type Props = MarginProps & PaddingProps;

export const StyledBox = styled.div<Props>`
  ${space}
`;

export const Box: React.FC<Props> = props => (
  <StyledBox theme={theme} {...props} />
);
