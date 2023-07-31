import styled from 'styled-components';
import { Neutral } from '../utilities/colors';
import * as Breakpoints from '../utilities/breakpoints';

export const StyledSideSheetWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(45, 45, 45, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
  animation: ga-fade-in2 0.2s;

  &.closed {
    animation: ga-fade-out2 0.2s;
  }

  @keyframes ga-fade-in2 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes ga-fade-out2 {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const StyledSideSheetContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 100vh;
  background: ${Neutral.B100};
  box-shadow:
    0px 26px 80px rgba(0, 0, 0, 0.2),
    0px 0px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  animation: ga-slide-in 0.2s;
  top: 0;
  right: 0;

  &.closed {
    animation: ga-slide-out 0.2s;
  }

  @keyframes ga-slide-in {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes ga-slide-out {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(100%);
    }
  }

  @media (max-width: ${Breakpoints.large}) {
    width: 100vw;
  }
`;

export const StyledSideSheetHeader = styled.div`
  display: flex;
  align-items: top;
  padding: 16px 20px;
`;

export const StyledButtonContainer = styled.div`
  cursor: pointer;
  margin: 4px 8px 4px 0px;
  svg {
    width: 24px;
    fill: ${Neutral.B40};
  }
`;

export const StyledRightContainer = styled.div`
  margin-left: auto;
`;

export const StyledHorizontalLine = styled.hr`
  height: 1px;
  background-color: ${Neutral.B95};
  margin: 0px 0px;
  border: none;
`;

export const StyledSideSheetFooter = styled.div`
  margin-top: auto;
`;

export const StyledButtonGroupContainer = styled.div`
  margin: 16px 20px;
`;
