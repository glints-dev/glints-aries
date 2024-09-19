import styled from 'styled-components';
import * as Breakpoints from '../utilities/breakpoints';
import { Neutral, Red } from '../utilities/colors';
import { InputProps } from './Input';
import { space12, space4, space8 } from '../utilities/spacing';
import { NotoSans } from '../utilities/fonts';
import { borderRadius4 } from '../utilities/borderRadius';
import { Greyscale } from '../../Utils/Colors';

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
    border: none;
    background: ${Neutral.B99};
    color: ${Neutral.B18};
    cursor: not-allowed;
  }

  &[data-disabled='true'] svg {
    fill: ${Neutral.B85};
  }

  &[data-disabled='true'] div {
    color: ${Neutral.B85};
  }
`;

export const StyledPrefixContainer = styled.div<{
  height?: string;
}>`
  position: absolute;
  left: 0;
  color: ${Neutral.B40};
  display: flex;
  align-items: center;
  height: ${({ height }) => height ?? '36px'};
  padding: 0px ${space8} 0 ${space12};

  svg {
    height: 17px;
    width: 17px;
    fill: ${Neutral.B40};
  }
`;

export const StyledSuffixContainer = styled(StyledPrefixContainer)<{
  height?: string;
}>`
  left: auto;
  right: 0;

  padding: 0px ${space12} 0 ${space4};
`;

export const FloatingLabel = styled.label<{
  top?: number;
  left?: number;
  fontSize?: string;
  color?: string;
}>`
  position: absolute;
  left: ${({ left }) => left ?? '0.5'}em;
  top: ${({ top }) => top ?? '-1.25'}em;
  visibility: visible;
  padding: 0 0.3em;
  background: white;
  font-size: ${({ fontSize }) => fontSize ?? '12px'};
  color: ${({ color }) => color ?? Greyscale.devilsgrey};
  transition: color 0.2s ease-in-out;
  pointer-events: none;

  [data-error='true'] & {
    color: ${Red.B93};
  }
`;

export const StyledInput = styled.input<InputProps>`
  background: ${Neutral.B100};
  box-sizing: border-box;
  border: ${({ border }) => border ?? `1px solid ${Neutral.B68}`};
  border-radius: ${({ borderRadius }) => borderRadius ?? borderRadius4};
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
  height: ${({ height }) => height ?? `36px`};

  &::placeholder {
    color: ${Neutral.B68};
  }

  &:focus {
    outline: none;
    box-shadow:
      0px 0px 0px 1px ${Neutral.B100},
      0px 0px 0px 3px #6ac9ec;
  }

  @media (max-width: ${Breakpoints.large}) {
    font-size: 14px;
  }
`;

export const AsteriskIcon = styled.span`
  color: ${Red.B93};
  font-size: 20px;
  vertical-align: middle;
`;
