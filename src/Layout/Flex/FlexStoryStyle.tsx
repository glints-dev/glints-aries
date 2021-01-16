import styled from 'styled-components';

import { Flex as BaseFlex } from '../../../src/Layout/Flex';

export const Item = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #f3f3f3;
`;

export const Flex = styled(BaseFlex)`
  width: 500px;
  height: 150px;
  padding: 16px;
  background-color: #4caf50;
`;
