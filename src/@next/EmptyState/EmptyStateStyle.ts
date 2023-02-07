import styled from 'styled-components';
import { Breakpoints } from '..';
import { space16, space24 } from '../utilities/spacing';

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyStateContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: ${space16};
  margin: ${space24} 20px 20px;

  &[data-full-width='false'] {
    max-width: 400px;
    margin: ${space24} 0px 0px;

    @media (max-width: ${Breakpoints.large}) {
      max-width: 288px;
    }
  }
`;

export const StyledImage = styled.img`
  height: 200px;
  width: 200px;
`;
