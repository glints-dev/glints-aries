import styled from 'styled-components';
import { Neutral } from '../utilities/colors';
import { space4 } from '../utilities/spacing';

export const CollapseComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Neutral.B85};
  z-index: 2;

  &[data-border='true'] {
    border: 1px solid ${Neutral.B85};
    border-radius: ${space4};
    overflow: hidden;
  }

  div:last-child {
    border-bottom: none;
  }
`;
