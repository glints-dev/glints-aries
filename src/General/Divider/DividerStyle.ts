import styled from 'styled-components';
import { PrimaryColor, Greyscale } from '../../Utils/Colors';

export const DividerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 0.15em;

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
          background: ${Greyscale.white};
        `;
      case 'grey':
        return `
          background: ${Greyscale.lightgrey};
        `;
      default:
        return `
          background: ${Greyscale.black};
        `;
    }
  }}
`;
