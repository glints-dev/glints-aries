import styled from 'styled-components';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { Blue } from '../utilities/colors';
import { space2 } from '../utilities/spacing';
import { LinkProps } from './Link';

export const StyledLink = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  color: ${Blue.S99};

  &[data-underline='false'] {
    text-decoration: none;
  }
`;

export const StyledTypography = styled(Typography)`
  color: ${Blue.S99};

  &:hover {
    color: rgba(0, 86, 140, 0.9);
  }

  &:active {
    color: ${Blue.S100};
  }
`;

export const StyledIcon = styled(Icon)`
  margin-left: ${space2};
  padding-bottom: ${space2};
  height: 18px;
`;
