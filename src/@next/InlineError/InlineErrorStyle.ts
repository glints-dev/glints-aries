import styled from 'styled-components';
import { space4 } from '../utilities/spacing';
import { Typography } from '../Typography';
import { Red } from '../utilities/colors';
import { Breakpoints } from '..';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${space4};

  svg {
    flex-shrink: 0;
  }

  @media (max-width: ${Breakpoints.large}) {
    svg {
      height: 18px;
      width: 18px;
    }
  }
`;

export const StyledText = styled(Typography)`
  margin: 0;
  color: ${Red.B93};
`;
