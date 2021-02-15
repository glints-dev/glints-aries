import styled, { css } from 'styled-components';
import { Greyscale, SecondaryColor } from '../../Utils/Colors';
import { CheckboxProps } from './Checkbox';

export const CheckboxContainer = styled.div<CheckboxProps>`
  position: relative;
  display: inline-flex;
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
  line-height: 1.5;

  &:focus {
    outline: none;
  }

  input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;

    &:checked + label:after {
      content: '';
      display: block;
      position: absolute;
      /* top: ${({ size }) => (size === 'small' ? '0.13em' : '0.24em')}; */
      top: 0.13em;
      /* left: ${({ size }) => (size === 'small' ? '0.45em' : '0.54em')}; */
      left: 0.45em;
      width: 0.43em;
      height: 0.86em;
      border: solid ${Greyscale.white};
      border-width: 0 0.143em 0.143em 0;
      transform: rotate(45deg);
      ${({ border, size }) => {
        if (border) {
          return css`
            /* margin-top: ${size === 'small' ? '0.61em' : '0.57em'}; */
            margin-top: 0.61em;
            margin-left: 0.89em;
          `;
        }
      }};
    }

    &:checked + label:before {
      background: ${({ border }) =>
        border
          ? `${SecondaryColor.actionblue}`
          : `${SecondaryColor.darkgreen}`};
      border-color: ${({ border }) =>
        `${border ? SecondaryColor.actionblue : SecondaryColor.darkgreen}`};
    }
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 1;
    cursor: pointer;
    outline: none;
    ${({ border }) => {
      if (border) {
        return css`
          border: 1px solid #aaaaaa;
          cursor: pointer;
          border-radius: 8px;
          padding: 0.57em 0.86em;
          &:hover {
            background: rgba(1, 126, 183, 0.1);
            border-color: ${SecondaryColor.actionblue};
          }
        `;
      }
    }};

    ${({ checked }) => {
      if (checked) {
        return css`
          border-color: ${SecondaryColor.actionblue};
        `;
      }
    }};

    &:before {
      content: '';
      appearance: none;
      background-color: transparent;
      border: 1px solid ${Greyscale.grey};
      display: inline-block;
      position: relative;
      vertical-align: middle;
      cursor: pointer;
      margin-right: 10px;
      border-radius: 4px;
      /* width: ${({ size }) => (size === 'small' ? '1.29em' : '1.45em')}; */
      width: 1.29em;
      /* height: ${({ size }) => (size === 'small' ? '1.29em' : '1.45em')}; */
      height: 1.29em;
      box-sizing: border-box;
    }
  }
`;
