import styled from 'styled-components';
import { SecondaryColor, Greyscale } from '../Colors';

export const TagContent = styled.label`
  display: flex;
  align-items: center;
  padding: 5px 15px; /* TODO: replace by spacing */
  outline: none;
`;

export const TagContainer = styled.div<TagContainerProps>`
  display: inline-flex;
  border-radius: ${({ block }) => !block && '20px'};
  border-width: 1px;
  border-style: solid;
  font-size: 14px;
  color: ${Greyscale.black};

  ${({ isClickable }) => {
    if (isClickable) {
      return `${TagContent} {
        cursor: pointer;
      }`;
    }
  }};

  ${({ outline }) => {
    if (!outline) {
      return `
        background: ${SecondaryColor.lightergrey};
        border-color: ${SecondaryColor.lightgrey};
      `;
    } else {
      return `
        border-color: ${Greyscale.black};
      `;
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
  isClickable?: boolean;
}

const IconContainer = styled.span`
  display: inline-flex;

  svg {
    width: 12px; /* TODO: replace by icon-sizes variable after Iconography is done */
    height: 12px; /* TODO: replace by icon-sizes variable after Iconography is done */
  }
`;

export const StartIconContainer = styled(IconContainer)`
  margin-right: 8px; /* TODO: replace by spacing */
`;

export const EndIconContainer = styled(IconContainer)`
  margin-left: 8px; /* TODO: replace by spacing */

  svg {
    fill: ${Greyscale.grey};
    cursor: pointer;

    &:hover,
    &:active {
      fill: ${Greyscale.black};
    }
  }
`;
