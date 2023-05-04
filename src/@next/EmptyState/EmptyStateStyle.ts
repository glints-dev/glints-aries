import styled from 'styled-components';
import { Breakpoints } from '..';
import { ButtonGroup } from '../ButtonGroup';
import { Typography } from '../Typography';
import { space16, space24, space40 } from '../utilities/spacing';

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${space40} 0 60px;
`;

export const EmptyStateContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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

export const StyledButtonGroup = styled(ButtonGroup)`
  margin-bottom: ${space16};
`;

export const StyledTitle = styled(Typography)`
  text-align: center;
  margin: 0 0 ${space16};
`;

export const StyledDescription = styled(Typography)`
  text-align: center;
  margin: 0 0 ${space24};
  white-space: pre-wrap;
`;

export const StyledHelpText = styled(Typography)`
  text-align: center;
  margin: 0;
`;
