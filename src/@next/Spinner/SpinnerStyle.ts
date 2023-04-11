import styled from 'styled-components';
import { Typography } from '../Typography';
import { space16, space4 } from '../utilities/spacing';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes p-keyframes-spin {
    to {
      transform: rotate(1turn);
    }
  }

  svg {
    animation: p-keyframes-spin 800ms linear infinite;
  }

  &[data-processing='true'] {
    svg {
      animation: p-keyframes-spin 1200ms linear infinite;
    }
  }
`;

export const Label = styled(Typography)`
  margin-bottom: 0;

  &[data-size='large'] {
    margin-top: ${space16};
  }

  &[data-size='small'] {
    margin-top: ${space4};
  }
`;
