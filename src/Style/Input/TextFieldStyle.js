import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Colors';

export const TextFieldContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  .see-password {
    position: absolute;
    display: flex;
    right: 1em;
    cursor: pointer;
  }
`;

export const TextFieldLabel = styled.label`
  position: absolute;
  left: 1em;
  background: ${SecondaryColor.white};
  color: ${({ floating }) => floating ? `${SecondaryColor.black}` : `${SecondaryColor.lightblack}`};
  transition: all .2s;
  pointer-events: none;
  font-weight: 300;
  padding: 0 .5em;
  
  ${({ floating }) => {
    if (floating) {
      return `
        transform: translate3d(-.5em, -2.2em, 0);
        transition: all .2s;
        font-size: 12px;
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

export const TextFieldInput = styled.input`
  position: relative;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 1em 2em 1em 1em;
  border: 2px solid ${SecondaryColor.lightblack};
  transition: all .5s;

  ${({ status, floating }) => {
    if (status === 'error') {
      if (floating) {
        return `
          border: 2px solid ${PrimaryColor.glintsred};
        `;
      }
    }
  }}
    

  &:disabled {
    cursor: not-allowed;
    background: ${SecondaryColor.whitesmoke};

    + ${TextFieldLabel} {
      background: transparent;
      color: ${SecondaryColor.grey};
    }

    &:hover {
      border: 2px solid ${SecondaryColor.lightgrey};
    }
  }

  &:hover {
    border: 2px solid ${SecondaryColor.black};
    transition: all .5s;

    ${({ status }) => {
    if (status === 'error') {
      return `
          border: 2px solid ${PrimaryColor.glintsred};
        `;
    }
  }}

    + ${TextFieldLabel} {
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
    border: 2px solid ${SecondaryColor.black};

    ${({ status }) => {
    if (status === 'error') {
      return `
          border: 2px solid ${PrimaryColor.glintsred};
        `;
    }
  }}

    + ${TextFieldLabel} {
      transform: translate3d(-.5em, -2.2em, 0);
      transition: all .2s;
      color: ${SecondaryColor.black};
      font-size: 12px;

      ${({ status }) => {
    if (status === 'error') {
      return `
          color: ${PrimaryColor.glintsred};
        `;
    }
  }}
    }
  }
`;
