import styled from 'styled-components';
import * as Breakpoints from '../utilities/breakpoints';
import { Neutral, Red } from '../utilities/colors';
import { InputProps } from './Input';
import { space12, space4, space8 } from '../utilities/spacing';
import { NotoSans } from '../utilities/fonts';
import { borderRadius4 } from '../utilities/borderRadius';

export interface PreffixSuffixWidthProps {
  prefixWidth: number;
  suffixWidth: number;
}

export const StyledContainer = styled.div<InputProps & PreffixSuffixWidthProps>`
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

  &[data-suffix='true'] input {
    padding-right: ${props => props.suffixWidth}px;
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
  left: 0;
  color: ${Neutral.B40};
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0px ${space8} 0 ${space12};

  svg {
    height: 17px;
    width: 17px;
    fill: ${Neutral.B40};
  }
`;

export const StyledSuffixContainer = styled(StyledPrefixContainer)`
  left: auto;
  right: 0;

  padding: 0px ${space12} 0 ${space4};
`;

export const StyledInput = styled.input<InputProps>`
  background: ${Neutral.B100};
  box-sizing: border-box;
  border: 1px solid ${Neutral.B68};
  border-radius: ${borderRadius4};
  padding: 0 12px;

  font-family: ${NotoSans}, sans-serif;
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
