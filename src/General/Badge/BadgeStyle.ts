import styled from 'styled-components';
import { Greyscale, SecondaryColor } from '../../Utils/Colors';
import { BadgeVariant } from './BadgeVariant';

export const BadgeContainer = styled.div<BadgeContainerProps>`
  position: relative;
  display: inline-flex;
  ${({ variant }) => {
    switch (variant) {
      case BadgeVariant.BLUE:
        return `
          background: ${SecondaryColor.actionblue};
        `;
      case BadgeVariant.DIMMED:
        return `
          background: ${Greyscale.devilsgrey};
        `;
      case BadgeVariant.WHITE:
        return `
          background: ${Greyscale.white};
        `;
      default:
        return `
          background: #ed9300;
        `;
    }
  }}
  color: ${({ variant }) =>
    variant === BadgeVariant.WHITE
      ? `${SecondaryColor.actionblue}`
      : `${Greyscale.white}`};
  border-radius: 3px;
  margin: 0 4px;
  padding: 0 4px;
  height: 17px;
  min-width: 18px;
  align-items: center;
  justify-content: center;

  span {
    font-size: 12px;
    font-weight: 700;
    text-align: center;
  }
`;

interface BadgeContainerProps {
  variant?: string;
}
