import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Colors';

export const BadgeContainer = styled.div<BadgeContainerProps>`
  position: relative;
  display: inline-flex;
  background: ${PrimaryColor.glintsred};
  color: ${SecondaryColor.white};
  border-radius: 20px;

  ${({ sup }) => {
    if (sup) {
      return `
        top: -.6em;
      `;
    }
  }}

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ sup }) => sup ? '1.6em' : '2em'};
    min-width: ${({ sup }) => sup ? '1.6em' : '2em'};
    font-size: ${({ sup }) => sup ? '.7em' : '1em'};
    line-height: 1.5;
    font-weight: 600;
    padding: .4em;
  }
`;

interface BadgeContainerProps {
  sup?: boolean;
}
