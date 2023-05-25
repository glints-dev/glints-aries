import styled from 'styled-components';
import * as Breakpoints from '../utilities/breakpoints';
import { Neutral } from '../utilities/colors';
import { space8 } from '../utilities/spacing';
import React from 'react';

interface StyledBarProp extends React.HTMLAttributes<HTMLDivElement> {
  smallScreen: boolean;
}

export const StyledBar = styled.div<StyledBarProp>`
  display: flex;
  flex-direction: row;
  padding: ${props => (props.smallScreen ? '8' : '12')}px 0;
  width: 100%;
  position: absolute;
  min-height: ${props => (props.smallScreen ? '70' : '90')}px;
  height: fit-content;

  &[data-align='bottom'] {
    bottom: 0;
  }
  &[data-align='top'] {
    top: 0;
  }

  box-shadow: 0px 0px 0px 1px rgba(63, 63, 68, 0.05),
    0px 1px 3px rgba(63, 63, 68, 0.15);
  background: ${Neutral.B100};
`;

export const StyledBarHeaderWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const StyledBarActionWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
`;

export const StyledBarContainer = styled.div<StyledBarProp>`
  position: relative;
  margin: 0 auto;
  padding: 0 ${props => (props.smallScreen ? '16' : '50')}px;
  width: 100%;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;

  @media (max-width: ${Breakpoints.large}) {
    gap: 16px;
    padding: 0 24px;
  }
`;

export const StyledCustomHeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${space8};
`;

export const StyledButtonContainer = styled.div<StyledBarProp>`
  cursor: pointer;
  margin-right: ${props => (props.smallScreen ? '16' : '24')}px;
  svg {
    width: ${props => (props.smallScreen ? '16' : '24')}px;
    fill: ${Neutral.B40};
  }
`;
