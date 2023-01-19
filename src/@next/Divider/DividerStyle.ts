import styled from 'styled-components';
import { Neutral } from '../utilities/colors';
import { DividerProps } from './Divider';

export const DividerStyle = styled.div<DividerProps>`
  margin: 0;
  background-color: ${Neutral.B85};
  width: 100%;
  height: 1px;
`;
