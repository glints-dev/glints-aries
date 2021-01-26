import styled from 'styled-components';

import { Greyscale } from '../../../Utils/Colors';
import BasicTag from '../BasicTag';

export const AddTag = styled(BasicTag)`
  border-style: dashed;
  border-color: ${Greyscale.lightgrey};

  &:hover {
    border-color: ${Greyscale.grey};
  

  &:active {
    border-color: ${Greyscale.black};
  }
`;
