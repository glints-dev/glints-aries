import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-flex;
`;

export const TooltipContent = styled.div<TooltipContentProps>`
  position: absolute;
  z-index: 10;

  ${({ text }) => {
    if (text.length > 150) {
      return `
        width: ${text.length + 20}px;
      `;
    }
    return `
      width: 150px;
    `;
  }}

  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return `
          top: 100%;
          left: 50%;
          padding-top: 9px;
          transform: translateX(-50%);

          &:after {
            border-left: 9px solid transparent;
            border-right: 9px solid transparent;
            border-bottom: 9px solid ${SecondaryColor.black};
            top: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        `;
      case 'left':
        return `
          top: 50%;
          right: 100%;
          padding-right: 9px;
          transform: translateY(-50%);
          
          &:after {
            border-left: 9px solid ${SecondaryColor.black};
            border-top: 9px solid transparent;
            border-bottom: 9px solid transparent;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
          }
        `;
      case 'right':
        return `
          top: 50%;
          left: 100%;
          padding-left: 9px;
          transform: translateY(-50%);
          
          &::after {
            border-right: 9px solid ${SecondaryColor.black};
            border-top: 9px solid transparent;
            border-bottom: 9px solid transparent;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
        `;
      default:
        return `
          bottom: 100%;
          left: 50%;
          padding-bottom: 9px;
          transform: translateX(-50%);

          &:after {
            border-left: 9px solid transparent;
            border-right: 9px solid transparent;
            border-top: 9px solid ${SecondaryColor.black};
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        `;
    }
  }}

  &:after {
    content: '';
    position: absolute;
  }
`;

interface TooltipContentProps {
  text: string;
  position: string;
}

export const TooltipMessage = styled.div`
  background: ${SecondaryColor.black};
  border-radius: 3px;
  color: ${SecondaryColor.white};
  line-height: 1.5;
  font-size: .8em;
  padding: 5px;
  text-align: center;
`;
