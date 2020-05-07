import styled from 'styled-components';
import { SecondaryColor } from '../Colors';
import { CheckboxProps } from '../../Input/Checkbox/Checkbox';

export const CheckboxContainer = styled.div<CheckboxProps>`
  position: relative;
  display: inline-flex;
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
  line-height: 1.5;

  ${({ border }) => {
    if (border) {
      return `
        border: 1px solid #aaaaaa;
        height: ${({ size }: any) => (size === 'small' ? '40px' : '43px')};
        padding: 10px 15px;
        border-radius: 2px;
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

  &:focus {
    outline: none;
  }

  &:focus > label {
    outline: 5px auto -webkit-focus-ring-color;
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
      top: 0.2em;
      left: 0.5em;
      width: 0.4em;
      height: 0.85em;
      border: solid ${SecondaryColor.white};
      border-width: 0 0.15em 0.15em 0;
      transform: rotate(45deg);
    }

    &:checked + label:before {
      background: ${({ border }) =>
        border
          ? `${SecondaryColor.actionblue}`
          : `${SecondaryColor.darkgreen}`};
      border: 2px solid
        ${({ border }) =>
          border
            ? `${SecondaryColor.actionblue}`
            : `${SecondaryColor.darkgreen}`};
    }
  }

  label {
    position: relative;
    display: flex;
    justify-content: center;
    line-height: 1.5;
    cursor: pointer;
    outline: none;

    &:before {
      content: '';
      appearance: none;
      background-color: transparent;
      border: 2px solid ${SecondaryColor.lightblack};
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
        inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
      padding: 0.6em;
      display: inline-block;
      position: relative;
      vertical-align: middle;
      cursor: pointer;
      margin-right: 10px;
      border-radius: 4px;
      height: 18px;
      width: 18px;
    }
  }
`;
