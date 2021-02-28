import styled from 'styled-components';
import { PrimaryColor, Greyscale } from '../../Utils/Colors';
import { BadgeVariant } from './BadgeVariant';

export const BadgeContainer = styled.div<BadgeContainerProps>`
  position: relative;
  display: inline-flex;
  background: ${({ variant }) =>
    variant === BadgeVariant.DEFAULT
      ? `${PrimaryColor.glintsred}`
      : `${Greyscale.grey}`};
  color: ${Greyscale.white};
  border-radius: 3px;
  margin: 0 4px;

  span {
    height: 17px;
    min-width: 19px;
    font-size: 12px;
    font-weight: 700;
    padding: 0 5px;
    text-align: center;
  }
`;

interface BadgeContainerProps {
  variant?: string;
}
