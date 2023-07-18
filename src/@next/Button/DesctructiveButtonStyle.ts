import styled from 'styled-components';
import { Neutral, Red } from '../utilities/colors';
import { insetButtonPressed } from '../utilities/dropShadow';
import { Button } from './Button';

export const DestructiveButton = styled(Button)`
  color: ${Neutral.B100};
  background: ${Red.B93};
  border: none;

  &:hover {
    background: ${Red.B74};
    box-shadow:
      0px 1px 0px rgba(0, 0, 0, 0.08),
      inset 0px -1px 0px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    box-shadow: 0px 0px 0px 2px rgba(69, 143, 255, 1);
  }

  &:active {
    background: ${Red.B65};
    box-shadow: ${insetButtonPressed};
  }

  &[data-loading='true'] {
    background: ${Neutral.B95};
  }
`;
