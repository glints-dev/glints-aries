import styled from 'styled-components';
import { borderRadius8 } from '../utilities/borderRadius';
import { Neutral } from '../utilities/colors';
import { space16, space18 } from '../utilities/spacing';
import * as Breakpoints from '../utilities/breakpoints';

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
  width: 620px;

  &[data-size='large'] {
    width: 980px;
  }

  &[data-size='small'] {
    width: 380px;
  }

  @media (max-width: ${Breakpoints.large}) {
    &&& {
      width: 320px;
    }
  }
`;

export const StyledModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${space16} 20px;
  gap: 20px;
  box-shadow: inset 0px -1px 0px ${Neutral.B95};
  border-radius: ${borderRadius8} 0;
  align-self: stretch;

  div {
    flex: 1;
  }
`;

export const StyledModalContent = styled.div`
  min-height: 24px;
  color: #202223;
  padding: 20px;
  width: 100%;
  padding: ${space18} 20px;
`;

export const StyledModalActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: stretch;
  padding: ${space16};
  gap: 10px;
  box-shadow: inset 0px 1px 0px ${Neutral.B95};
  border-radius: 0p ${borderRadius8};
`;

export const StyledModalCloseButton = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
  padding: 0;

  svg {
    width: 24px;
    height: 24px;
    fill: ${Neutral.B40};
  }
`;
