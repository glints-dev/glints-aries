import styled from 'styled-components';
import * as DropShadow from '../utilities/dropShadow';
import { borderRadius8 } from '../utilities/borderRadius';
import { Blue, Neutral } from '../utilities/colors';
import { space16 } from '../utilities/spacing';

const alignmentStyle = `
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
export const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  border: 1px solid ${Neutral.B85};
  border-spacing: 0;
  color: ${Neutral.B18};
  max-width: 100vw;
  border-bottom: 0;

  thead tr {
    background: ${Neutral.B99};
  }

  &[data-has-footer='true'] {
    border-bottom: 1px solid ${Neutral.B85};
  }

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
  box-shadow: inset 0px -1px 0px ${Neutral.B85};

  &:hover {
    background: ${Neutral.B99};
  }
`;

export const StyledTabledHeader = styled.th`
  padding: ${space16};
  text-align: left;

  ${alignmentStyle}

  button {
    padding: 0;
    margin: 0;
    height: auto;
    border: none;
    box-shadow: none;
    background: ${Neutral.B99};
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
    width: 16px;
    height: 16px;
    fill: ${Neutral.B40};
    margin-bottom: 2px;
  }
`;

export const StyledTableCell = styled.td`
  text-align: left;
  padding: ${space16};
  vertical-align: top;

  ${alignmentStyle}

  &[data-no-wrap='true'] {
    white-space: nowrap;

    div {
      width: max-content;
    }
  }
`;

export const StyledTableFooterRow = styled.tr`
  background: ${Neutral.B100};
  border-top: 0;
  border-radius: 0px 0px ${borderRadius8} ${borderRadius8};
  td {
    padding: ${space16};
  }
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
  box-shadow: ${DropShadow.card};
`;
