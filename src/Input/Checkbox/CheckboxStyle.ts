import styled from 'styled-components';
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
      top: ${({ size }) => (size === 'small' ? '1.8px' : '3.3px')};
      left: ${({ size }) => (size === 'small' ? '6.3px' : '7.5px')};
      width: 6px;
      height: 12px;
      border: solid ${Greyscale.white};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      ${({ border, size }) => {
        if (border) {
          return `
            margin-top: ${size === 'small' ? '8.5px' : '8px'};
            margin-left: 12.5px;
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
        return `
          border: 1px solid #aaaaaa;
          cursor: pointer;
          border-radius: 8px;
          padding: 8px 12px;
          &:hover {
            background: rgba(1, 126, 183, 0.1);
            border-color: ${SecondaryColor.actionblue};
          }
        `;
      }
    }};

    ${({ checked }) => {
      if (checked) {
        return `
          border-color: ${SecondaryColor.actionblue};
        `;
      }
    }};

    &:before {
      content: '';
      appearance: none;
      background-color: transparent;
      border: 1px solid ${Greyscale.grey};
      padding: 0.6em;
      display: inline-block;
      position: relative;
      vertical-align: middle;
      cursor: pointer;
      margin-right: 10px;
      border-radius: 4px;
      height: 18px;
      width: 18px;
      box-sizing: border-box;
    }
  }
`;
