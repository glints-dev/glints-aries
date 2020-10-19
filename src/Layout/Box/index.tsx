import * as React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { breakpointAliasMap, MarginProps, PaddingProps } from './types';

const theme = {
  breakpoints: breakpointAliasMap,
};

type Props = MarginProps & PaddingProps;

export const StyledBox = styled.div<Props>`
  ${space}
`;

export const Box: React.FC<Props> = props => (
  <StyledBox theme={theme} {...props} />
);
