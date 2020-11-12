import styled from 'styled-components';
import { PrimaryColor, SecondaryColor, Greyscale } from '../../Utils/Colors';

export const IconContainer = styled.div`
  position: absolute;
  display: flex;
  right: 1em;
  cursor: pointer;

  svg {
    fill: ${Greyscale.grey};
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
    fill: #798899;
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
  background: ${SecondaryColor.white};
  color: ${({ floating }) =>
    floating ? `${SecondaryColor.black}` : `${SecondaryColor.lightblack}`};
  transition: all .2s;
  pointer-events: none;
  font-weight: 300;
  font-size: 1.1em;

  ${({ hasStartIcon }) => {
    if (hasStartIcon) {
      return `
        left: 38px;
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

  ${({ status, floating }) => {
    if (status === 'error' && floating) {
      return `
        color: ${PrimaryColor.glintsred};
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
  font-size: ${({ small }) => (small ? '1em' : '1.1em')};
  line-height: 1.5;
  padding: ${({ small }) => (small ? '13px 15px' : '15px 20px')};
  border: ${({ status }) =>
    status === 'error'
      ? `2px solid ${PrimaryColor.glintsred}`
      : `2px solid ${SecondaryColor.lightblack}`};
  transition: all .5s;

  ${({ disableTyping }) => {
    if (disableTyping) {
      return `
        color: transparent;
        text-shadow: 0 0 0 black;
        cursor: pointer;
      `;
    }
  }}

  ${({ status, floating }) => {
    if (status === 'error') {
      if (floating) {
        return `
          border: 2px solid ${PrimaryColor.glintsred};
        `;
      }
    }
  }}

  ${({ hasStartIcon }) => {
    if (hasStartIcon) {
      return `
        padding-left: 38px;
      `;
    }
  }}
  
  &:hover {
    border: 2px solid ${SecondaryColor.actionblue};
    transition: all .5s;

    ${({ status }) => {
      if (status === 'error') {
        return `
          border: 2px solid ${PrimaryColor.glintsred};
        `;
      }
    }}

    ~ ${TextFieldLabel} {
      color: ${SecondaryColor.black};

      ${({ status }) => {
        if (status === 'error') {
          return `
          color: ${PrimaryColor.glintsred};
        `;
        }
      }}
    }
  }

  &:focus {
    border: 2px solid ${SecondaryColor.actionblue};

    ${({ status }) => {
      if (status === 'error') {
        return `
          border: 2px solid ${PrimaryColor.glintsred};
        `;
      }
    }}

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
      color: ${SecondaryColor.black};
      font-size: 12px;
        right: auto;

      ${({ status }) => {
        if (status === 'error') {
          return `
          color: ${PrimaryColor.glintsred};
        `;
        }
      }}
    }
  }

  &:disabled {
    cursor: not-allowed;
    background: ${SecondaryColor.whitesmoke};
    border: 2px solid ${SecondaryColor.lightgrey};

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
