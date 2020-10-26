import * as React from 'react';
import styled from 'styled-components';

import { Box, Props as BoxProps } from '../Box';
import { FlexProps, FlexPropAndDefaultValueMap } from './types';

type Props = FlexProps & BoxProps;

export const StyledFlex = styled(Box)<Props>`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection || FlexPropAndDefaultValueMap.flexDirection};
  justify-content: ${({ justifyContent }) =>
    justifyContent || FlexPropAndDefaultValueMap.justifyContent};
  align-items: ${({ alignItems }) =>
    alignItems || FlexPropAndDefaultValueMap.alignItems};
  flex-wrap: ${({ flexWrap }) =>
    flexWrap || FlexPropAndDefaultValueMap.flexWrap};
`;

export const Flex: React.FC<Props> = props => <StyledFlex {...props} />;
