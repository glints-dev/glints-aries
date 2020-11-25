import styled from 'styled-components';
import { Greyscale } from '../../Utils/Colors';
import { Props } from './Tooltip';

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-flex;
`;

export const TooltipContent = styled.div<Props>`
  position: absolute;
  z-index: 10;
  width: 100%;

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
            border-bottom: 9px solid ${Greyscale.black};
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
            border-left: 9px solid ${Greyscale.black};
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
            border-right: 9px solid ${Greyscale.black};
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
            border-top: 9px solid ${Greyscale.black};
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

export const TooltipMessage = styled.div`
  background: ${Greyscale.black};
  border-radius: 3px;
  color: ${Greyscale.white};
  line-height: 1.5;
  font-size: 12px;
  padding: 10px;
  text-align: center;
`;
