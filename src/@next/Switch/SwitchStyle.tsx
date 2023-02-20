import styled from 'styled-components';
import { Breakpoints, Spacing } from '..';

import { Blue, Neutral } from '../utilities/colors';

export const SwitchStyle = styled.div`
  position: relative;
  width: ${Spacing.space40};
  height: ${Spacing.space24};

  background-color: ${Neutral.B40};

  &[data-disabled='true'] {
    background-color: ${Neutral.B95};
  }

  border-radius: ${Spacing.space24};
  padding: 0;
  transition: 300ms all;

  @media (max-width: ${Breakpoints.large}) {
    width: 38px;
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
  }
`;

export const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
