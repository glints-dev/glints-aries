import styled from 'styled-components';
import { PrimaryColor, SecondaryColor, Greyscale } from '../Colors';

export const TagContent = styled.label<TagContentProps>`
  display: flex;
  align-items: center;
  padding: 5px 15px; /* TODO: replace by spacing */
  outline: none;
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};
`;

interface TagContentProps {
  isClickable?: boolean;
}

export const TagContainer = styled.div<TagContainerProps>`
  display: inline-flex;
  border-radius: ${({ block }) => !block && '20px'};
  border-style: ${({ borderStyle }) => borderStyle};
  border-width: 1px;
  font-size: 1em;
  line-height: 1.5;
  color: ${Greyscale.white};

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
            background: ${Greyscale.black};
          `;
        default:
          return `
            background: ${SecondaryColor.lightergrey};
            border-color: ${SecondaryColor.lightgrey};
            color: ${Greyscale.black};
          `;
      }
    } else {
      switch (theme) {
        case 'red':
          return `
            border-color: ${PrimaryColor.glintsred};
            color: ${PrimaryColor.glintsred};
          `;
        case 'blue':
          return `
            border-color: ${PrimaryColor.glintsblue};
            color: ${PrimaryColor.glintsblue};
          `;
        case 'orange':
          return `
            border-color: ${SecondaryColor.orange};
            color: ${SecondaryColor.orange};
          `;
        case 'green':
          return `
            border-color: ${SecondaryColor.green};
            color: ${SecondaryColor.green};
          `;
        default:
          return `
            border-color: ${Greyscale.black};
            color: ${Greyscale.black};
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
  borderStyle?: string;
  outline?: boolean;
}

export const StartIconContainer = styled.span`
  display: inline-flex;
  margin-right: 8px; /* TODO: replace by spacing */
  cursor: pointer;
`;

export const EndIconContainer = styled.span`
  display: inline-flex;
  margin-left: 8px; /* TODO: replace by spacing */
  cursor: pointer;
`;
