import styled from 'styled-components';
import { SecondaryColor, Greyscale } from '../Colors';

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
  border-style: ${({ border }) => border};
  border-width: 1px;
  font-size: 1em;
  line-height: 1.5;
  color: ${Greyscale.black};

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
  border?: string;
  outline?: boolean;
}

const IconContainer = styled.span`
  display: inline-flex;
  cursor: pointer;

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
`;
