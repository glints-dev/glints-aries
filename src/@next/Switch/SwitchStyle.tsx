import styled from 'styled-components';
import { Breakpoints, Spacing, Typography } from '..';

import { Blue, Neutral } from '../utilities/colors';

export const SwitchTextStyle = styled(Typography)``;

export const SwitchStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: relative;

  width: ${Spacing.space40};

  &[data-with-icon='true'] {
    width: 48px;
  }

  &[data-with-text='true'] {
    width: max-content;
  }

  &[data-with-icon='true'] svg {
    height: 16px;
  }

  height: ${Spacing.space24};

  background-color: ${Neutral.B40};

  &[data-disabled='true'] {
    background-color: ${Neutral.B95};
    cursor: not-allowed;
  }

  border-radius: ${Spacing.space24};
  padding: 0;
  padding-left: 8px;
  padding-right: 8px;
  transition: 300ms all;

  @media (max-width: ${Breakpoints.large}) {
    width: 38px;

    &[data-with-icon='true'] {
      width: 44px;
    }

    &[data-with-icon='true'] svg {
      height: 14px;
    }

    height: 22px;
  }

  &:before {
    transition: 100ms all;
    content: ' ';
    cursor: pointer;
    position: absolute;
    width: 16px;
    height: 16px;
    left: 4px;
    right: 0;
    border-radius: 16px;
    background: ${Neutral.B100};
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    transform: scale(1);
    @media (max-width: ${Breakpoints.large}) {
      width: 14px;
      height: 14px;
    }
  }
`;

export const InputStyle = styled.input<{
  backgroundColor: string;
}>`
  opacity: 0;
  position: absolute;
  & + ${SwitchStyle} {
    ${SwitchTextStyle} {
      padding-inline-start: 18px;
    }
  }

  &:checked + ${SwitchStyle} {
    ${SwitchTextStyle} {
      padding-inline-start: unset;
      padding-inline-end: 18px;
    }
    background-color: ${({ backgroundColor }) => backgroundColor || Blue.S99};

    &[data-disabled='true'] {
      background-color: ${Neutral.B95};
    }

    &:before {
      right: 4px;
      left: unset;
    }
  }

  & + ${SwitchStyle} svg:nth-child(1) {
    visibility: hidden;
  }
  & + ${SwitchStyle} svg:nth-child(2) {
    visibility: visible;
  }
  & + ${SwitchStyle} ${SwitchTextStyle}:nth-child(1) {
    visibility: hidden;
    display: none;
  }
  & + ${SwitchStyle} ${SwitchTextStyle}:nth-child(2) {
    visibility: visible;
    display: block;
  }

  &:checked + ${SwitchStyle} svg:nth-child(1) {
    visibility: visible;
  }
  &:checked + ${SwitchStyle} svg:nth-child(2) {
    visibility: hidden;
  }

  &:checked + ${SwitchStyle} ${SwitchTextStyle}:nth-child(1) {
    visibility: visible;
    display: block;
  }
  &:checked + ${SwitchStyle} ${SwitchTextStyle}:nth-child(2) {
    visibility: hidden;
    display: none;
  }
`;

export const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
