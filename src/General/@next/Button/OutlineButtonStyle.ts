import styled from 'styled-components';
import { button } from '../../../Utils/@next/dropShadow';
import { Button } from './Button';

export const OutlineButton = styled(Button)`
  filter: drop-shadow(${button});
`;
