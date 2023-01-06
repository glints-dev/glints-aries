import styled from 'styled-components';
import { button } from '../utilities/dropShadow';
import { Button } from './Button';

export const OutlineButton = styled(Button)`
  filter: drop-shadow(${button});
`;
