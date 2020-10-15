import * as React from 'react';
import styled from 'styled-components';

import { Box, Props as BoxProps } from '../Box';

const positions = ['center', 'flex-start', 'flex-end'] as const;

export const FlexPropAndPossibleValueMap = {
  flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
  justifyContent: [...positions, 'space-between', 'space-around'],
  alignItems: [...positions, 'stretch', 'baseline'] as const,
  flexWrap: ['nowrap', 'wrap', 'wrap-reverse'] as const,
};

export const FlexPropAndDefaultValueMap: FlexProps = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  flexWrap: 'nowrap',
};

type FlexProps = {
  flexDirection?: typeof FlexPropAndPossibleValueMap.flexDirection[number];
  justifyContent?: typeof FlexPropAndPossibleValueMap.justifyContent[number];
  alignItems?: typeof FlexPropAndPossibleValueMap.alignItems[number];
  flexWrap?: typeof FlexPropAndPossibleValueMap.flexWrap[number];
};

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
