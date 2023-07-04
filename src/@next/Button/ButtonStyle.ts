import styled from 'styled-components';
import * as Breakpoints from '../utilities/breakpoints';
import { borderRadius4 } from '../utilities/borderRadius';
import { Neutral } from '../utilities/colors';
import {
  button,
  buttonFocused,
  insetButtonPressed,
} from '../utilities/dropShadow';
import {
  space12,
  space16,
  space24,
  space4,
  space8,
  space2,
} from '../utilities/spacing';
import { ButtonProps, ButtonSize } from './Button';

const defaultButtonSizeStyle = `
  min-width: 75px;
  height: 36px;
  padding: ${space8} ${space16};

  @media (max-width: ${Breakpoints.large}) {
    min-width: 71px;
  }
`;

const largeButtonSizeStyle = `
  min-width: 91px;
  height: 44px;
  padding: ${space12} ${space24};

  @media (max-width: ${Breakpoints.large}) {
    min-width: 87px;
  }
`;

const slimButtonSizeStyle = `
  min-width: 67px;
  height: 32px;
  padding: ${space4} ${space12};

  @media (max-width: ${Breakpoints.large}) {
    min-width: 63px;
  }
`;

const verySlimButtonSizeStyle = `
  padding: 5px ${space2};

  @media (max-width: ${Breakpoints.large}) {
    padding: 0px 0px;
  }

  p {
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
`;

const buttonSizeStyleMap: Record<ButtonSize, string> = {
  default: defaultButtonSizeStyle,
  slim: slimButtonSizeStyle,
  large: largeButtonSizeStyle,
  verySlim: verySlimButtonSizeStyle,
};

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  gap: 8px;
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
    border-color: ${Neutral.B68};
    box-shadow: ${buttonFocused};
  }

  &:active {
    background: ${Neutral.B95};
    border: 1px solid ${Neutral.B68};
    box-shadow: ${insetButtonPressed};
  }

  &:active > svg {
    fill: ${Neutral.B40};
  }

  &:disabled {
    color: ${Neutral.B68};
    background: ${Neutral.B95};
    pointer-events: none;
  }

  &:disabled svg {
    fill: ${Neutral.B85};
  }

  ${({ size = 'default' }: ButtonProps) => {
    const sizeStyle = buttonSizeStyleMap[size];
    if (size && !sizeStyle) {
      console.warn(`${size} is not a valid ButtonSize, default will be used`);
    }
    return buttonSizeStyleMap[size] || defaultButtonSizeStyle;
  }}

  svg {
    width: 20px;
    height: 20px;
    fill: ${Neutral.B40};
  }

  .spinner-container {
    position: absolute;
  }

  &[data-active='true'] {
    color: ${Neutral.B100};
    background: ${Neutral.B40};
  }

  &[data-full-width='true'] {
    width: 100%;
  }

  &[data-icon='true'] {
    gap: 4px;
  }

  &[data-active='true'] svg {
    fill: ${Neutral.B100};
  }

  &[data-loading='true'] {
    background: ${Neutral.B99};
    color: transparent;
  }

  &[data-loading='true'] svg {
    fill: transparent;
  }

  &[data-loading='true'] .spinner-container svg {
    fill: ${Neutral.B85};
    position: static;
  }
`;
