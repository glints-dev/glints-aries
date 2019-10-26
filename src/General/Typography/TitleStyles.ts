import styled from 'styled-components';

import { SecondaryColor } from '../../Style/Colors';

interface TitleProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  ellipsis?: boolean;
}

export const Title = styled.h1<TitleProps>`
  margin: 0;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: ${props => props.color || SecondaryColor.black};

  ${props => {
    switch (props.as) {
      case 'h1':
        return `
        font-size: 50px;
        font-weight: 900;
        line-height: 1.2;
      `;
      case 'h2':
        return `
        font-size: 36px;
        line-height: 1.2;
      `;
      case 'h3':
        return `
        font-size: 30px;
        line-height: 1.4;
      `;
      case 'h4':
        return `
        font-size: 26px;
        line-height: 1.4;
      `;
      case 'h5':
        return `
        font-size: 22px;
        line-height: 1.4;
      `;
      case 'h6':
        return `
        font-size: 18px;
        line-height: 1.4;
      `;
      default:
        return `
        font-size: 50px;
        font-weight: 900;
        line-height: 1.2;
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
