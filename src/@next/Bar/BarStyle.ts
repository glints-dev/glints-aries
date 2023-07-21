import styled from 'styled-components';
import * as Breakpoints from '../utilities/breakpoints';
import { Neutral } from '../utilities/colors';
import { space8 } from '../utilities/spacing';

export const StyledBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  width: 100%;
  position: absolute;
  min-height: 90px;
  height: fit-content;

  &[data-align='bottom'] {
    bottom: 0;
  }
  &[data-align='top'] {
    top: 0;
  }

  box-shadow:
    0px 0px 0px 1px rgba(63, 63, 68, 0.05),
    0px 1px 3px rgba(63, 63, 68, 0.15);
  background: ${Neutral.B100};

  @media (max-width: ${Breakpoints.large}) {
    padding: 8px 0;
    min-height: 70px;
  }
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

export const StyledBarContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 50px;
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
    padding: 0 16px;
  }
`;

export const StyledCustomHeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${space8};
`;

export const StyledButtonContainer = styled.div`
  cursor: pointer;
  margin-right: 24px;
  svg {
    width: 24px;
    fill: ${Neutral.B40};
  }

  @media (max-width: ${Breakpoints.large}) {
    margin-right: 16px;

    svg {
      width: 16px;
    }
  }
`;
