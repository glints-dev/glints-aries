import * as React from 'react';
import styled from 'styled-components';

import { Box } from '../Box';
import { BoxProps } from '../Box/types';
import { FlexProps } from './types';

type Props = FlexProps &
  BoxProps & {
    style?: React.CSSProperties;
  };

export const StyledFlex = styled(Box)<Props>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ flexWrap }) => flexWrap};
`;

export const Flex: React.FC<Props> = ({
  flexDirection = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  flexWrap = 'nowrap',
  ...restProps
}) => (
  <StyledFlex
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
    flexWrap={flexWrap}
    {...restProps}
  />
);
