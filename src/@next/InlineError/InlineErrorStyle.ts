import styled from 'styled-components';
import { space4 } from '../utilities/spacing';
import { Typography } from '../Typography';
import { Red } from '../utilities/colors';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${space4};
`;

export const StyledText = styled(Typography)`
  margin: 0;
  color: ${Red.B93};
`;
