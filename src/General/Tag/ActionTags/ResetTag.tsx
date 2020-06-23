import styled from 'styled-components';

import { PrimaryColor } from '../../../Utils/Colors';
import BasicTag from '../BasicTag';

export const ResetTag = styled(BasicTag)`
  color: ${PrimaryColor.glintsred};
  border-style: solid;
  border-color: transparent;
  background-color: rgba(236, 39, 43, 0.05);

  &:hover {
    background-color: rgba(236, 39, 43, 0.1);
  }

  &:active {
    background-color: rgba(236, 39, 43, 0.2);
  }
`;
