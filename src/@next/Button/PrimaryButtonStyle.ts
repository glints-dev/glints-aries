import styled from 'styled-components';
import { Blue, Neutral } from '../utilities/colors';
import { Button } from './Button';

export const PrimaryButton = styled(Button)`
  color: ${Neutral.B100};
  background: ${Blue.S99};
  border: none;

  &:hover {
    background: ${Blue.S100};
    opacity: 0.9;
    box-shadow:
      0px 1px 0px rgba(0, 0, 0, 0.08),
      inset 0px -1px 0px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background: ${Blue.S100};
    opacity: 1;
    border: 0;
  }

  &[data-loading='true'] {
    background: ${Neutral.B95};
  }

  svg {
    fill: ${Neutral.B100};
  }
`;
