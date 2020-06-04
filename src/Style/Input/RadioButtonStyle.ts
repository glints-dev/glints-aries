import styled, { css } from 'styled-components';

import { PrimaryColor, SecondaryColor, Greyscale } from '../Colors';

interface Props {
  error?: boolean;
  theme?: string;
  border?: boolean;
  disabled?: boolean;
  size?: 'regular' | 'small';
}

export const RadioLabel = styled.span<Props>`
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: ${({ size }) => (size === 'regular' ? '16px' : '14px')};
  color: ${({ theme }) =>
    theme === 'white' ? SecondaryColor.white : SecondaryColor.black};
  outline: none;

  &:before {
    content: '';
    display: block;
    position: relative;
    top: 0;
    left: 0;
    margin-right: 8px;
    border-radius: 50%;
    border-style: solid;
    border-width: 2px;
    height: ${({ size }) => (size === 'regular' ? '18px' : '15px')};;
    width: ${({ size }) => (size === 'regular' ? '18px' : '15px')};;
    flex-shrink: 0;

    ${({ error, theme, disabled }) => {
      if (disabled) {
        return css`
          border-color: ${Greyscale.lightgrey};
        `;
      } else if (error) {
        return css`
          border-color: ${PrimaryColor.glintsred};
        `;
      } else if (theme === 'white') {
        return css`
          border-color: ${SecondaryColor.white};
        `;
      } else {
        return css`
          border-color: ${SecondaryColor.grey};
        `;
      }
    }}
  }

  &:hover:before {
    ${({ error, border }) => {
      if (!error && !border) {
        return css`
          border-color: ${SecondaryColor.darkgreen};
        `;
      }
    }}
  }

  &:after {
    content: '';
    display: block;
    height: ${({ size }) => (size === 'regular' ? '8px' : '5px')};
    width: ${({ size }) => (size === 'regular' ? '8px' : '5px')};
    position: absolute;
    border-radius: 50%;
    left: 5px;
    opacity: 0;
    transform: scale(0, 0);
    transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);

    ${({ error, theme, border, disabled }) => {
      if (disabled) {
        return css`
          left: ${border ? '15px' : '5px'};
          background-color: ${Greyscale.lightgrey};
        `;
      } else if (error) {
        return css`
          background-color: ${PrimaryColor.glintsred};
        `;
      } else if (border) {
        return css`
          left: 15px;
          background-color: ${SecondaryColor.actionblue};
        `;
      } else if (theme === 'white') {
        return css`
          background-color: ${SecondaryColor.white};
        `;
      } else {
        return css`
          background-color: ${SecondaryColor.darkgreen};
        `;
      }
    }}
  }

  ${({ border }) => {
    if (border) {
      return css`
        padding: 15px 10px;
        border: 1px solid #aaa;
        border-radius: 2px;

        &:hover {
          background-color: rgba(1, 126, 183, 0.1);
          border-color: ${SecondaryColor.actionblue};
        }
      `;
    }
  }}

  ${({ disabled }) => {
    if (disabled) {
      return css`
        color: #aaa;
      `;
    }
  }}

  ${({ border, disabled }) => {
    if (border && disabled) {
      return css`
        border-color: ${Greyscale.lightgrey};
      `;
    }
  }}
`;

export const RadioContainer = styled.label<Props>`
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  text-align: left;

  input {
    display: none;

    &:checked + ${RadioLabel} {
      ${({ border, disabled }) => {
        if (disabled) {
          return null;
        } else if (border) {
          return css`
            border-color: ${SecondaryColor.actionblue};
          `;
        }
      }}
    }

    &:checked + ${RadioLabel}:before {
      ${({ error, theme, border, disabled }) => {
        if (disabled) {
          return null;
        } else if (error) {
          return css`
            border-color: ${PrimaryColor.glintsred};
          `;
        } else if (border) {
          return css`
            border-color: ${SecondaryColor.actionblue};
          `;
        } else if (theme === 'white') {
          return css`
            border-color: ${SecondaryColor.white};
          `;
        } else {
          return css`
            border-color: ${SecondaryColor.darkgreen};
          `;
        }
      }}
    }

    &:checked + ${RadioLabel}:after {
      opacity: 1;
      transform: scale(1, 1);
    }
  }

  &:focus {
    outline: none;
  }

  ${({ disabled }) => {
    if (disabled) {
      return css`
        pointer-events: none;
      `;
    }
  }}
`;
