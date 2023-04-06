import styled from 'styled-components';
import { Blue, Neutral } from '../utilities/colors';
import { Button } from './Button';

export const PlainButton = styled(Button)`
  color: ${Blue.S99};
  background: transparent;
  border: none;
  box-shadow: none;
  outline: none;

  svg {
    fill: ${Blue.S99};
  }

  &:hover {
    color: ${Blue.S100};
    background: transparent;

    svg {
      fill: ${Blue.S100};
    }
  }

  &:focus {
    border: 2px solid ${Blue.S99};
    box-shadow: none;
  }

  &:active {
    color: ${Blue.S100};

    svg {
      fill: ${Blue.S100};
    }
  }

  &:disabled {
    color: ${Neutral.B85};
    background: transparent;

    svg {
      fill: ${Neutral.B85};
    }
  }

  &[data-loading='true'] {
    background: transparent;
  }
`;
