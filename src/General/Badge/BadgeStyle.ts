import styled from 'styled-components';
import { Greyscale, SecondaryColor } from '../../Utils/Colors';
import { BadgeVariant } from './BadgeVariant';
import { Spacing } from '../../Layout/Spacing';

export const BadgeContainer = styled.div<BadgeContainerProps>`
  position: relative;
  display: inline-flex;
  color: ${Greyscale.white};
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
          color: ${SecondaryColor.actionblue};
        `;
      default:
        return `
          background: #ed9300;
        `;
    }
  }}
  border-radius: 3px;
  margin: 0 ${Spacing[4]}px;
  padding: 0 ${Spacing[4]}px;
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
