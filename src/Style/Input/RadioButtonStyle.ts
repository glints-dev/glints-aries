import styled, { css } from 'styled-components';

import { PrimaryColor, SecondaryColor, Greyscale } from '../Colors';

const getStateColor = ({
  disabled,
  error,
  border,
  checked,
}: {
  disabled: boolean;
  error: boolean;
  border: boolean;
  checked: boolean;
}) => {
  if (disabled) {
    return Greyscale.lightgrey;
  } else if (error) {
    return PrimaryColor.glintsred;
  } else if (!checked) {
    return SecondaryColor.grey;
  } else if (border) {
    return SecondaryColor.actionblue;
  } else {
    return SecondaryColor.darkgreen;
  }
};

const showSolidCircleStyle = css`
  &:after {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

interface Props {
  error?: boolean;
  theme?: string;
  border?: boolean;
  disabled?: boolean;
  size?: 'regular' | 'small';
}

export const RadioIcon = styled.span<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => (size === 'regular' ? '18px' : '15px')};
  width: ${({ size }) => (size === 'regular' ? '18px' : '15px')};
  margin-right: 10px;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ disabled, error, border }) =>
    getStateColor({ disabled, error, border, checked: false })};

  &:hover {
    border-color: ${SecondaryColor.darkgreen};
  }

  &:after {
    content: '';
    display: inline-block;
    height: ${({ size }) => (size === 'regular' ? '8px' : '5px')};
    width: ${({ size }) => (size === 'regular' ? '8px' : '5px')};
    border-radius: 50%;
    opacity: 0;
    transform: scale(0, 0);
    transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
    background-color: ${({ disabled, error, border }) =>
      getStateColor({ disabled, error, border, checked: true })};
  }
`;

export const RadioLabel = styled.span<Props>`
  font-size: ${({ size }) => (size === 'regular' ? '16px' : '14px')};
  outline: none;
  color: ${({ disabled }) => (disabled ? '#aaa' : SecondaryColor.black)};
`;

export const Border = styled.span<Props>`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  border-color: #aaa;

  ${({ disabled }) => {
    if (!disabled) {
      return css`
        &:hover {
          background-color: rgba(1, 126, 183, 0.1);
          border-color: ${SecondaryColor.actionblue};
        }
      `;
    }
  }};
`;

export const RadioContainer = styled.label<Props>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};;
  user-select: none;
  text-align: left;

  input {
    display: none;

    &:checked + ${RadioIcon} {
      ${showSolidCircleStyle}
      border-color: ${({ disabled, error, border }) =>
        getStateColor({ disabled, error, border, checked: true })};
    }

    &:checked + ${Border} {
      border-color: ${({ disabled, error, border }) =>
        getStateColor({ disabled, error, border, checked: true })};

      ${RadioIcon} {
        ${showSolidCircleStyle}
        border-color: ${({ disabled, error, border }) =>
          getStateColor({ disabled, error, border, checked: true })};
      }
    }
  }

  &:focus {
    outline: none;
  }
`;
