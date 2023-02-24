import styled from 'styled-components';
import { Breakpoints, Spacing } from '..';

import { Blue, Neutral } from '../utilities/colors';

export const SwitchStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: relative;

  width: ${Spacing.space40};

  &[data-with-icon] {
    width: 48px;
  }

  &[data-with-icon] svg {
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

    &[data-with-icon] {
      width: 44px;
    }

    &[data-with-icon] svg {
      height: 14px;
    }

    height: 22px;
  }

  &:before {
    transition: 100ms all;
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    top: 50%;
    left: 4px;
    background: ${Neutral.B100};
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    transform: translate(0, -50%);

    @media (max-width: ${Breakpoints.large}) {
      width: 14px;
      height: 14px;
    }
  }
`;

export const InputStyle = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${SwitchStyle} {
    background-color: ${Blue.S99};

    &[data-disabled='true'] {
      background-color: ${Neutral.B95};
    }

    &:before {
      transform: translate(16px, -50%);
    }

    &[data-with-icon] {
      &:before {
        transform: translate(24px, -50%);
      }
    }
  }

  & + ${SwitchStyle} svg:nth-child(1) {
    visibility: hidden;
  }
  & + ${SwitchStyle} svg:nth-child(2) {
    visibility: visible;
  }

  &:checked + ${SwitchStyle} svg:nth-child(1) {
    visibility: visible;
  }
  &:checked + ${SwitchStyle} svg:nth-child(2) {
    visibility: hidden;
  }
`;

export const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
