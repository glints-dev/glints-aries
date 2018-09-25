import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

export const DividerWrapper = styled.div`
    display: flex;
    width: 100%;
    height: .15em;
    margin: 15px 0;

    ${({ theme }) => {
    switch (theme) {
      case 'red':
        return `
          background: ${PrimaryColor.glintsred};
        `;
      case 'blue':
        return `
          background: ${PrimaryColor.glintsblue};
        `;
      case 'yellow':
        return `
          background: ${PrimaryColor.glintsyellow};
        `;
      case 'white':
        return `
          background: ${SecondaryColor.white};
        `;
      case 'grey':
        return `
          background: ${SecondaryColor.lightgrey};
        `;
      default:
        return `
          background: ${SecondaryColor.black};
        `;
    }
  }}
`;
