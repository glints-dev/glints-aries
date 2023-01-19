import styled from 'styled-components';
import { borderRadius2 } from '../utilities/borderRadius';
import { Blue, Neutral } from '../utilities/colors';
import { space4 } from '../utilities/spacing';

export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const StyledPageButton = styled.button`
  cursor: pointer;
  height: 32px;
  width: 32px;
  border: 0;
  background: ${Neutral.B100};
  border-radius: ${borderRadius2};
  padding: ${space4};

  &:hover {
    background: ${Neutral.B95};
  }

  &:disabled {
    color: ${Neutral.B85};
  }

  svg {
    fill: ${Neutral.B40};
    width: 24px;
    height: 24px;
  }

  &[data-active='true'] {
    background: ${Blue.S08};
    color: ${Blue.S99};
  }

  &:disabled svg {
    fill: ${Neutral.B85};
  }

  &[data-active='true']:disabled {
    background: ${Neutral.B95};
    color: ${Neutral.B85};
  }
`;
