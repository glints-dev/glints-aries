import styled from 'styled-components';
import { Red } from '../utilities/colors';
import { B100 } from '../utilities/colors/neutral';
import { button } from '../utilities/dropShadow';
import { Button, ButtonProps } from './Button';

export const OutlineMonochromeButton = styled(Button)`
  ${({ active }: ButtonProps) =>
    active
      ? `&[style] {
    color: ${B100} !important;
    background: ${Red.B93} !important;
    }`
      : ``}
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
`;
