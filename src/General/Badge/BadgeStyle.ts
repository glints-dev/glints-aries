import styled from 'styled-components';
import { PrimaryColor, SecondaryColor, Greyscale } from '../../Utils/Colors';
import { BadgeVariant } from './BadgeVariant';

export const BadgeContainer = styled.div<BadgeContainerProps>`
  position: relative;
  display: inline-flex;
  background: ${({ variant }) =>
    variant === BadgeVariant.DEFAULT
      ? `${PrimaryColor.glintsred}`
      : `${Greyscale.grey}`};
  color: ${SecondaryColor.white};
  border-radius: 10px;
  margin: 0 5px;

  ${({ sup }) => {
    if (sup) {
      return `
        top: -.6em;
      `;
    }
  }}

  span {
    height: ${({ sup }) => (sup ? '1.6em' : '17px')};
    min-width: ${({ sup }) => (sup ? '1.6em' : '19px')};
    font-size: ${({ sup }) => (sup ? '.7em' : '12px')};
    font-weight: bold;
    padding: 0 5px;
    text-align: center;
    ${({ sup }) => {
      if (sup) {
        return `
          display: flex;
          align-items: center;
        `;
      }
    }}
  }
`;

interface BadgeContainerProps {
  sup?: boolean;
  variant?: string;
}
