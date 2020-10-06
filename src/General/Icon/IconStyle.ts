import styled from 'styled-components';

export const VerticalCenteredSvg = styled.svg`
  vertical-align: middle;
  ${({ fontSize }) => {
    switch (fontSize) {
      case 'xxs':
        return `
          font-size: 12px;
        `;
      case 'xs':
        return `
          font-size: 16px;
        `;
      case 's':
        return `
          font-size: 24px;
        `;
      case 'm':
        return `
          font-size: 32px;
        `;
      case 'l':
        return `
        font-size: 48px;
        `;
      case 'xl':
        return `
        font-size: 64px;
        `;
      case 'xxl':
        return `
        font-size: 96px;
        `;
      case 'xxxl':
        return `
        font-size: 128px;
        `;
      default:
        return `
        font-size: 24px;
        `;
    }
  }}
`;
