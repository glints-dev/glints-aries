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
  }

  // ---- tick box --------
  label:before {
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
    width: 1.29em;
    height: 1.29em;
    box-sizing: border-box;
  }

  &[aria-checked='true'] label:before {
    border-color: transparent;
  }

  &[aria-checked='true'][data-border='true'] label:before {
    background: ${SecondaryColor.actionblue};
  }

  &[aria-checked='true'][data-border='false'] label:before {
    background: ${SecondaryColor.darkgreen};
  }

  // ---- label --------
  label {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 1;
    cursor: pointer;
    outline: none;
  }

  &[aria-checked='true'] label {
    border-color: ${SecondaryColor.actionblue};
  }

  &[data-border='true'] label {
    border: 1px solid #aaaaaa;
    cursor: pointer;
    border-radius: 8px;
    padding: 0.57em 0.86em;
    &:hover {
      background: rgba(1, 126, 183, 0.1);
      border-color: ${SecondaryColor.actionblue};
    }
  }

  // ---- tick mark --------
  &[aria-checked='true'] label:after {
    content: '';
    display: block;
    position: absolute;
    top: 0.13em;
    left: 0.45em;
    width: 0.43em;
    height: 0.86em;
    border: solid ${Greyscale.white};
    border-width: 0 0.143em 0.143em 0;
    transform: rotate(45deg);
  }

  &[aria-checked='true'][data-border='true'] label:after {
    margin-top: 0.61em;
    margin-left: 0.89em;
  }
`;
