import styled from 'styled-components';
import { Red } from '../utilities/colors';
import { Neutral } from '../utilities/colors/';
import { button } from '../utilities/dropShadow';
import { Button } from './Button';

export const OutlineMonochromeButton = styled(Button)`
  color: ${Red.B93};
  border: 1px solid ${Red.B93};
  filter: drop-shadow(${button});

  &:hover {
    background: ${Red.B100};
    opacity: 0.9;
    box-shadow: ${button};
  }

  &:active {
    background: ${Red.B100};
    opacity: 1;
    border: 1px solid ${Red.B93};
  }

  &[data-active='true'] {
    color: ${Neutral.B100};
    background: ${Red.B93};
  }
`;
