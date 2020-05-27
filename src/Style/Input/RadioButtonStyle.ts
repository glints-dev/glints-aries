import styled, { css } from 'styled-components';

import { PrimaryColor, SecondaryColor } from '../Colors';

interface Props {
  error?: boolean;
  theme?: string;
}

export const RadioLabel = styled.span<Props>`
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 1em;
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
    height: 18px;
    width: 18px;
    flex-shrink: 0;

    ${({ error, theme }) => {
      if (error) {
        return css`
          border: solid 2px ${PrimaryColor.glintsred};
        `;
      } else if (theme === 'white') {
        return css`
          border: solid 2px ${SecondaryColor.white};
        `;
      } else {
        return css`
          border: solid 2px ${SecondaryColor.grey};
        `;
      }
    }}
  }

  &:after {
    content: '';
    display: block;
    height: 8px;
    width: 8px;
    position: absolute;
    border-radius: 50%;
    left: 5px;
    top: 50%;
    margin-top: -4px;
    opacity: 0;
    transform: scale(0, 0);
    transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);

    ${({ error, theme }) => {
      if (error) {
        return css`
          background: ${PrimaryColor.glintsred};
        `;
      } else if (theme === 'white') {
        return css`
          background: ${SecondaryColor.white};
        `;
      } else {
        return css`
          background: ${SecondaryColor.darkgreen};
        `;
      }
    }}
  }
`;

export const RadioContainer = styled.label<Props>`
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  text-align: left;

  input {
    opacity: 0;

    &:checked + span:before {
      ${({ error, theme }) => {
        if (error) {
          return css`
            border-color: solid 2px ${PrimaryColor.glintsred};
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

    &:checked + span:after {
      opacity: 1;
      transform: scale(1, 1);
    }
  }

  &:focus {
    outline: none;
  }

  &:focus > ${RadioLabel} {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;
