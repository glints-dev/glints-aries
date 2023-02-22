import styled from 'styled-components';
import { borderRadius8 } from '../utilities/borderRadius';
import { Blue, Neutral } from '../utilities/colors';
import { space16 } from '../utilities/spacing';

export const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  border: 1px solid ${Neutral.B85};
  border-bottom: 0;
  border-spacing: 0;
  color: ${Neutral.B18};
  max-width: 100vw;

  &[data-loading='true'] {
    tbody {
      position: relative;
    }

    .loader-container {
      display: block;
      z-index: 1;
    }
  }
`;

export const StyledTableRow = styled.tr`
  background: ${Neutral.B100};
  min-height: 56px;
  box-shadow: inset 0px -1px 0px ${Neutral.B85};

  &[data-total='true'] {
    background: ${Neutral.B99};
  }
`;

export const StyledTabledHeader = styled.th`
  padding: ${space16};
  text-align: left;
  white-space: no-wrap;

  &[data-text-align='right'] {
    > div {
      display: flex;
      justify-content: right;
    }
  }

  &[data-text-align='center'] {
    > div {
      display: flex;
      justify-content: center;
    }
  }

  button {
    padding: 0;
    margin: 0;
    border: none;
    box-shadow: none;
  }

  button:hover {
    background: transparent;
  }

  button:active {
    border: none;
    box-shadow: none;
    background: transparent;
  }

  button:focus {
    border: none;
  }

  button svg {
    width: 24px;
    height: 24px;
    fill: ${Neutral.B40};
  }
`;

export const StyledTableCell = styled.td`
  text-align: left;
  padding: ${space16};
  white-space: no-wrap;

  &[data-text-align='right'] {
    > div {
      display: flex;
      justify-content: right;
    }
  }

  &[data-text-align='center'] {
    > div {
      display: flex;
      justify-content: center;
    }
  }
`;

export const StyledTableFooterRow = styled.div`
  padding: ${space16};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  min-height: 64px;
  background: ${Neutral.B99};
  border-radius: 0px 0px ${borderRadius8} ${borderRadius8};
  border: 1px solid ${Neutral.B85};
  border-top: 0;
`;

export const StyledTableLoadingRow = styled(StyledTableRow)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
  z-index: -1;
`;

export const StyledLoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const StyledSpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${Neutral.B18};

  svg {
    width: 48px;
    height: 48px;
    fill: ${Blue.S99};
  }
`;

export const StyledDataTableContainer = styled.div`
  overflow-x: auto;
  scroll-behavior: smooth;
`;
