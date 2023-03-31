import styled from 'styled-components';
import { Breakpoints } from '..';
import { borderRadius16, borderRadius4 } from '../utilities/borderRadius';
import { Blue, Neutral, Red } from '../utilities/colors';
import { space4 } from '../utilities/spacing';

import { CheckboxProps } from './Checkbox';

export const StyledContainer = styled.div`
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
  color: ${Neutral.B18};

  label {
    cursor: pointer;
    margin-top: -1px;
  }

  svg {
    border-radius: 4px;
    position: absolute;
    height: 20px;
    width: 20px;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    fill: ${Blue.S99};
  }

  &[data-in-table='true'] {
    svg {
      top: unset;
      left: unset;
    }
  }

  &[data-spacing='true'] {
    padding: ${space4} 0px;
  }

  &[aria-disabled='true'],
  &[aria-disabled='true'] .help-text {
    color: ${Neutral.B68};
  }

  &[aria-disabled='true'] div[role='checkbox'] {
    border-color: ${Neutral.B85};
    background: ${Neutral.B95};
  }

  &[aria-disabled='true'] svg {
    background: ${Neutral.B68};
    fill: ${Neutral.B95};
  }

  &[data-error='true'] svg {
    fill: ${Red.B93};
  }
`;

export const StyledCheckboxContainer = styled.div`
  position: relative;
  cursor: pointer;

  &[data-in-table='true'] {
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    &[data-in-table='true'] {
      background-color: rgba(1, 126, 183, 0.2);
      border-radius: ${borderRadius16};
    }
  }
`;

export const StyledCheckbox = styled.div<CheckboxProps>`
  width: 20px;
  height: 20px;
  background: ${Neutral.B100};
  border: 2px solid;
  border-color: ${({ hasError }: CheckboxProps) => {
    return hasError ? Red.B93 : Neutral.B68;
  }};
  cursor: pointer;
  border-radius: ${borderRadius4};
  > input {
    opacity: 0;
    cursor: pointer;
  }
  &[data-focus='true'] {
    box-shadow: 0px 0px 0px 1px ${Neutral.B100}, 0px 0px 0px 3px #6ac9ec;
  }

  &[aria-checked='true'] + svg,
  &[aria-checked='mixed'] + svg {
    opacity: 1;
  }

  @media (max-width: ${Breakpoints.large}) {
    width: 18px;
    height: 18px;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;

  &[data-in-table='true'] {
    gap: unset;
  }
`;
export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  &.help-text {
    color: ${Neutral.B40};
  }
`;

export const StyledLeftColumn = styled(StyledColumn)`
  flex-basis: 20px;
`;
