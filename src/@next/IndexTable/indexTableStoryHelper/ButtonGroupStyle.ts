import styled from 'styled-components';
import { Spacing } from '../..';
import { Button } from '../../Button';

export const StyledButtonGroup = styled.div`
  display: flex;
`;

export const StyledButton = styled(Button)`
  margin-right: ${Spacing.space8};
`;
