import styled from 'styled-components';

import { SecondaryColor } from '../../Style/Colors';

export interface ParagraphProps {
  bold?: boolean;
  color?: string;
  ellipsis?: boolean;
  variant?: 'subtitle' | 'regular' | 'caption' | 'smallest';
}

export const Paragraph = styled.p<ParagraphProps>`
  margin: 0;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.color || SecondaryColor.black};

  ${props => {
    switch (props.variant) {
      case 'subtitle':
        return `
          font-size: 18px;
        `;
      case 'regular':
        return `
          font-size: 16px;
        `;
      case 'caption':
        return `
          font-size: 14px;
        `;
      case 'smallest':
        return `
          font-size: 12px;
        `;
      default:
        return `
          font-size: 16px;
        `;
    }
  }};

  ${props => {
    if (props.ellipsis) {
      return `
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      `;
    }
  }}
`;
