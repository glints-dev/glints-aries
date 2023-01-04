import { CSSProperties } from 'react';
import styled from 'styled-components';
import * as Breakpoints from '../../../Utils/@next/breakpoints';
import { borderRadius4 } from '../../../Utils/@next/borderRadius';
import { Neutral } from '../../../Utils/@next/colors';
import {
  button,
  buttonFocused,
  insetButtonPressed,
} from '../../../Utils/@next/dropShadow';
import {
  space12,
  space16,
  space24,
  space4,
  space8,
} from '../../../Utils/@next/spacing';
import { ButtonProps, ButtonSize } from './Button';

const defaultButtonSizeStyle = `
  width: 75px;
  height: 36px;
  padding: ${space8} ${space16};

  @media (max-width: ${Breakpoints.large}) {
    width: 71px;
  }
`;

const largeButtonSizeStyle = `
  width: 91px;
  height: 44px;
  padding: ${space12} ${space24};

  @media (max-width: ${Breakpoints.large}) {
    width: 87px;
  }
`;

const slimButtonSizeStyle = `
  width: 67px;
  height: 32px;
  padding: ${space4} ${space12};

  @media (max-width: ${Breakpoints.large}) {
    width: 63px;
  }
`;

const buttonSizeStyleMap: Record<ButtonSize, string> = {
  default: defaultButtonSizeStyle,
  slim: slimButtonSizeStyle,
  large: largeButtonSizeStyle,
};

export const BasicButton = styled.button.attrs(
  ({ active, fullWidth }: ButtonProps) => {
    const activeStyle = {
      color: `${Neutral.B100}`,
      background: `${Neutral.B40}`,
    };
    const widthStyle = { width: '100%' };
    return {
      style: {
        ...(active && activeStyle),
        ...(fullWidth && widthStyle),
      } as CSSProperties,
    };
  }
)`
  display: flex;
  gap: 10px;
  border-width: 1px;
  border-style: solid;
  border-radius: ${borderRadius4};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  color: ${Neutral.B18};
  background: ${Neutral.B100};
  border-color: ${Neutral.B68};
  box-shadow: ${button};

  &:hover {
    cursor: pointer;
    background: ${Neutral.B99};
  }
  &:focus {
    outline: none;
    border-color: ${Neutral.B100};
    box-shadow: ${buttonFocused};
  }
  &:active {
    background: ${Neutral.B95};
    border: 1px solid ${Neutral.B68};
    box-shadow: ${insetButtonPressed};
  }
  &:disabled {
    color: ${Neutral.B68};
    background: ${Neutral.B95};
  }
  ${({ size }: ButtonProps) => {
    const sizeStyle = buttonSizeStyleMap[size];
    if (size && !sizeStyle) {
      console.warn(`${size} is not a valid ButtonSize, default will be used`);
    }
    return buttonSizeStyleMap[size] || defaultButtonSizeStyle;
  }}
  > svg {
    width: 18px;
    height: 18px;
  }
`;
