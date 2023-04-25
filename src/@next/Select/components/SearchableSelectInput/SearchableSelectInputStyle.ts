import styled from 'styled-components';
import * as Breakpoints from '../../../utilities/breakpoints';
import { Neutral, Red } from '../../../utilities/colors';
import { NotoSans } from '../../../utilities/fonts';
import {
  StyledContainer as StyledInputContainer,
  StyledSuffixContainer,
} from '../../../Input/InputStyle';
import { borderRadius4 } from '../../../utilities/borderRadius';

export const StyledContainer = styled(StyledInputContainer)`
  position: relative;
  height: 36px;
  width: ${props => props.width};
  background: ${Neutral.B100};
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  display: grid;

  input {
    background: transparent;
    z-index: 1;
    width: ${props => props.width};
  }

  &[data-prefix='true'] .searchable-select,
  input {
    padding-left: ${props => props.prefixWidth}px;
  }

  &[data-suffix='true'] .searchable-select,
  input {
    padding-right: ${props => props.suffixWidth}px;
  }

  &[data-error='true'] .searchable-select {
    border: 1px solid ${Red.B93};
  }

  &[data-error='true'] .searchable-select:focus {
    box-shadow: none;
  }

  &[data-disabled='true'] .searchable-select {
    border: 1px solid ${Neutral.B85};
    background: ${Neutral.B95};
    color: ${Neutral.B85};
  }
`;

export const StyledSelectedValue = styled.div`
  border: 1px solid ${Neutral.B68};
  border-radius: ${borderRadius4};
  background: transparent;
  box-sizing: border-box;
  padding: 0 12px;
  height: 36px;
  display: flex;
  align-items: center;
  grid-column: 1 / 1;
  grid-row: 1 / 1;

  font-family: ${NotoSans}, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: ${Neutral.B18};

  @media (max-width: ${Breakpoints.large}) {
    font-size: 14px;
  }
`;

export const InputContainer = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 1;
`;

export const ClearSelectedContainer = styled(StyledSuffixContainer)`
  z-index: 2;
`;
