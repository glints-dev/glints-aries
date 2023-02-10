import styled from 'styled-components';
import * as Breakpoints from '../utilities/breakpoints';
import { Neutral, Red } from '../utilities/colors';
import { InputProps } from './Input';
import { space4, space8 } from '../utilities/spacing';

export const StyledContainer = styled.div<InputProps & { prefixWidth: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: 100%;

  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  &[data-prefix='true'] input {
    padding-left: ${props => props.prefixWidth}px;
  }

  &[data-error='true'] input {
    border: 1px solid ${Red.B93};
  }

  &[data-error='true'] input:focus {
    box-shadow: none;
  }

  &[data-disabled='true'] input {
    border: 1px solid ${Neutral.B85};
    background: ${Neutral.B95};
    color: ${Neutral.B85};
  }

  &[data-disabled='true'] input::placeholder {
    color: ${Neutral.B85};
  }

  &[data-disabled='true'] svg {
    fill: ${Neutral.B85};
  }

  &[data-disabled='true'] div {
    color: ${Neutral.B85};
  }
`;

export const StyledPrefixContainer = styled.div`
  position: absolute;
  padding: 0;
  left: 0;
  line-height: 0;
  color: ${Neutral.B40};

  svg {
    height: 17px;
    width: 17px;
    margin: 10px 14px;
    margin-right: ${space8};
    fill: ${Neutral.B40};
  }

  div {
    color: ${Neutral.B40};
    margin: 18px 12px;
    margin-right: ${space4};
  }
`;

export const StyledSuffixContainer = styled(StyledPrefixContainer)`
  left: auto;
  right: 0;

  svg {
    margin: 10px 14px;
  }

  div {
    margin: 18px 12px;
  }
`;

export const StyledInput = styled.input<InputProps>`
  background: ${Neutral.B100};
  box-sizing: border-box;
  border: 1px solid ${Neutral.B68};
  border-radius: 4px;
  padding: 0 12px;

  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: ${Neutral.B18};

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  height: 36px;

  &::placeholder {
    color: ${Neutral.B40};
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1px ${Neutral.B100}, 0px 0px 0px 3px #6ac9ec;
  }

  @media (max-width: ${Breakpoints.large}) {
    font-size: 14px;
  }
`;
