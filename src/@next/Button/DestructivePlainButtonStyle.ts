import styled from 'styled-components';
import { Neutral, Red } from '../utilities/colors';
import { Button } from './Button';

export const DestructivePlainButton = styled(Button)`
  color: ${Red.B93};
  background: transparent;
  border: none;
  box-shadow: none;
  outline: none;

  svg {
    fill: ${Red.B93};
  }

  &:hover {
    color: ${Red.B74};
    background: transparent;

    svg {
      fill: ${Red.B74};
    }
  }

  &:focus {
    border: 2px solid ${Red.B93};
    box-shadow: none;
  }

  &:active {
    color: ${Red.B65};
    border: none;

    svg {
      fill: ${Red.B65};
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
