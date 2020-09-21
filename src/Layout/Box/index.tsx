import * as React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

import { SpacingScaleValues } from '../Spacing';

// Space
type MarginTypes = 'm' | 'mt' | 'mb' | 'ml' | 'mr' | 'my' | 'mx';
type MarginProps = {
  [key in MarginTypes]?: SpacingScaleValues;
};

type PaddingTypes = 'p' | 'pt' | 'pb' | 'pl' | 'pr' | 'py' | 'px';
type PaddingProps = {
  [key in PaddingTypes]?: SpacingScaleValues;
};

interface Props extends MarginProps, PaddingProps {}

const StyledBox = styled.div<Props>`
  ${space}
`;

export const Box: React.FC<Props> = props => <StyledBox {...props} />;
