import styled from 'styled-components';
import { Blue, Neutral } from '../utilities/colors';
import { space2 } from '../utilities/spacing';
import { LinkProps } from './Link';

export const StyledLink = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  color: ${Blue.S99};

  &[data-underline='false'] {
    text-decoration: none;
  }

  &[data-monochrome='true'] {
    color: ${Neutral.B18};

    &:hover,
    &:active {
      color: ${Neutral.B00};

      svg {
        fill: ${Neutral.B00};
      }
    }

    svg {
      fill: ${Neutral.B18};
    }
  }

  &:hover {
    color: rgba(0, 86, 140, 0.9);

    svg {
      fill: rgba(0, 86, 140, 0.9);
    }
  }

  &:active {
    color: ${Blue.S100};

    svg {
      fill: ${Blue.S100};
    }
  }

  svg {
    fill: ${Blue.S99};
    margin-left: ${space2};
    padding-bottom: ${space2};
    height: 18px;
  }
`;
