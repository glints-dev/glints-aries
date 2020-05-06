import styled from 'styled-components';

import { Greyscale, SecondaryColor } from '../../Style/Colors';
import BasicTag from './BasicTag';

export const AddTag = styled(BasicTag)`
  border-style: dashed;
  border-color: ${SecondaryColor.lightgrey};

  &:hover {
    border-color: ${Greyscale.grey};
  

  &:active {
    border-color: ${Greyscale.black};
  }
`;
