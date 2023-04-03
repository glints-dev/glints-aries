import styled from 'styled-components';
import * as Breakpoints from '../utilities/breakpoints';
import { borderRadius8 } from '../utilities/borderRadius';
import { Neutral } from '../utilities/colors';
import { space16 } from '../utilities/spacing';

export const StyledModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(45, 45, 45, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
`;

export const StyledModalContainer = styled.div`
  position: relative;
  background: ${Neutral.B100};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  box-shadow: 0px 26px 80px rgba(0, 0, 0, 0.2), 0px 0px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${borderRadius8};
  min-width: 320px;
  width: fit-content;
  max-width: calc(100vw - 32px);
  height: fit-content;
  max-height: calc(100vh - 96px);
  overflow: hidden;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${space16} 20px;
  box-shadow: inset 0px -1px 0px ${Neutral.B95};
  border-radius: ${borderRadius8} ${borderRadius8} 0 0;
  align-self: stretch;

  div {
    flex: 1;
  }

  &[data-show-border='false'] {
    box-shadow: unset;
  }

  @media (max-width: ${Breakpoints.large}) {
    padding: ${space16};
  }
`;

export const StyledModalContent = styled.div`
  min-height: 24px;
  color: #202223;
  width: fit-content;
  padding: 20px;
  overflow: auto;

  @media (max-width: ${Breakpoints.large}) {
    padding: 20px ${space16};
  }
`;

export const StyledModalActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: stretch;
  padding: ${space16} 20px;
  gap: 10px;
  box-shadow: inset 0px 1px 0px ${Neutral.B95};
  border-radius: 0 0 ${borderRadius8} ${borderRadius8};

  @media (max-width: ${Breakpoints.large}) {
    padding: ${space16};
  }
`;

export const StyledButtonContainer = styled.div`
  display: contents;
`;
export const StyledModalButton = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
  padding: 0;

  svg {
    width: 24px;
    height: 24px;
    fill: ${Neutral.B40};
  }

  &[data-has-decription='true'] {
    margin-top: -20px;
  }

  @media (max-width: ${Breakpoints.large}) {
    &[data-has-decription='true'] {
      margin-top: -18px;
    }
  }
`;

export const StyledModalBackButton = styled(StyledModalButton)`
  margin-right: 16px;
`;

export const StyledModalCloseButton = styled(StyledModalButton)`
  margin-left: 16px;
`;
