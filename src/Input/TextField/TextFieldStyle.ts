import styled from 'styled-components';
import { SecondaryColor, Greyscale } from '../../Utils/Colors';

const startIconPadding = '44px';

export const IconContainer = styled.div`
  position: absolute;
  display: flex;
  right: 1em;
  cursor: pointer;

  svg {
    fill: #666666;
  }

  &:hover svg {
    fill: ${Greyscale.black};
  }
`;

export const StartIconContainer = styled.div`
  position: absolute;
  display: flex;
  left: 16px;

  svg {
    fill: #666666;
  }
`;

export const TextFieldContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const TextFieldLabel = styled.label<TextFieldLabelProps>`
  position: absolute;
  left: ${({ small }) => (small ? '16px' : '22px')};
  margin-right: 1px;
  overflow: hidden;
  color: #666666;
  transition: all .2s;
  pointer-events: none;
  font-weight: 400;
  font-size: ${({ small }) => (small ? '14px' : '16px')};

  ${({ hasStartIcon }) => {
    if (hasStartIcon) {
      return `
        left: ${startIconPadding};
      `;
    }
  }}
  
  ${({ floating }) => {
    if (floating) {
      return `
        padding: 0 5px;
        top: 1em;
        transform: translate3d(-15px, -20px, 0);
        transition: all .2s;
        font-size: 12px;
        background-color: ${Greyscale.white};
      `;
    }
  }}
  
  ${({ floating, small }) => {
    if (floating && small) {
      return `
        transform: translate3d(-10px, -20px, 0);
      `;
    }
  }}
`;

type statusType = 'success' | 'error';

interface TextFieldLabelProps {
  small: boolean;
  floating: boolean;
  status: statusType;
  hasStartIcon?: boolean;
}

export const TextFieldInput = styled.input<TextFieldInputProps>`
  position: relative;
  width: 100%;
  outline: none;
  font-size: ${({ small }) => (small ? '14px' : '16px')};
  padding: ${({ small }) => (small ? '8px 16px' : '12px 16px')};
  border: unset;
  border-radius: ${({ small }) => (small ? '4px' : '8px')};
  transition: all .5s;
  background-color: ${({ status }) =>
    status === 'error' ? ' rgba(236, 39, 43, 0.08)' : 'rgb(1, 126, 183, 0.08)'};

  ${({ disableTyping }) => {
    if (disableTyping) {
      return `
        color: transparent;
        text-shadow: 0 0 0 black;
        cursor: pointer;
      `;
    }
  }}

  ${({ hasStartIcon }) => {
    if (hasStartIcon) {
      return `
        padding-left: ${startIconPadding};
      `;
    }
  }}
  
  &:hover {
    transition: all .5s;
    background-color: ${({ status }) =>
      status === 'error'
        ? ' rgba(236, 39, 43, 0.08)'
        : 'rgb(1, 126, 183, 0.16)'};

    ~ ${TextFieldLabel} {
      color: #666666;
    }
  }

  &:focus {
    background-color: ${({ status }) =>
      status === 'error'
        ? ' rgba(236, 39, 43, 0.08)'
        : 'rgb(1, 126, 183, 0.24)'};

    ${({ hasStartIcon }) => {
      if (hasStartIcon) {
        return `
          + ${StartIconContainer} {
            svg {
              fill: ${SecondaryColor.actionblue};
            }
          }
        `;
      }
    }}

    ~ ${TextFieldLabel} {
      padding: 0 5px;
      top: 1em;
      transform: ${({ small }) =>
        small
          ? 'translate3d(-10px, -20px, 0)'
          : 'translate3d(-15px, -20px, 0)'};
      transition: all .2s;
      font-size: 12px;
      right: auto;
      background-color: ${Greyscale.white};
    }
  }

  &:disabled {
    cursor: not-allowed;
    background: ${SecondaryColor.whitesmoke};

    + ${TextFieldLabel} {
      background: transparent;
      color: ${SecondaryColor.grey};
    }
  }
`;

export interface TextFieldInputProps {
  small?: boolean;
  status?: statusType;
  disableTyping?: boolean;
  floating?: boolean;
  hasStartIcon?: boolean;
}
