import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Colors';

export const TagContent = styled.label`
  display: flex;
  align-items: center;
  padding: .4em .9em;
  outline: none;
`;

export const TagContainer = styled.div<TagContainerProps>`
  display: inline-flex;
  border-radius: ${({ block }) => !block && '20px'};
  font-size: 1em;
  line-height: 1.5;
  color: ${SecondaryColor.white};

  ${({ theme, outline }) => {
    if (!outline) {
      switch (theme) {
        case 'red':
          return `
            background: ${PrimaryColor.glintsred};
          `;
        case 'blue':
          return `
            background: ${PrimaryColor.glintsblue};
          `;
        case 'orange':
          return `
            background: ${SecondaryColor.orange};
          `;
        case 'green':
          return `
            background: ${SecondaryColor.green};
          `;
        case 'black':
          return `
            background: ${SecondaryColor.black};
          `;
        default:
          return `
            background: ${SecondaryColor.lightergrey};
          `;
      }
    } else {
      switch (theme) {
        case 'red':
          return `
            border: 1px solid ${PrimaryColor.glintsred};
            color: ${PrimaryColor.glintsred};
          `;
        case 'blue':
          return `
            border: 1px solid ${PrimaryColor.glintsblue};
            color: ${PrimaryColor.glintsblue};
          `;
        case 'orange':
          return `
            border: 1px solid ${SecondaryColor.orange};
            color: ${SecondaryColor.orange};
          `;
        case 'green':
          return `
            border: 1px solid ${SecondaryColor.green};
            color: ${SecondaryColor.green};
          `;
        default:
          return `
            border: 1px solid ${SecondaryColor.black};
            color: ${SecondaryColor.black};
          `;
      }
    }
  }}
  
  &:focus {
    outline: none;
  }

  &:focus > ${TagContent} {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

interface TagContainerProps {
  block?: boolean;
  outline?: boolean;
}
