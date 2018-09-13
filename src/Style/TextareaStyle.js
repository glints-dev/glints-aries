import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

export const Container = styled.div`
  position: relative;
  display: inline-flex;
`;

export const TextareaLabel = styled.label`
  position: absolute;
  left: 1em;
  top: 1em;
  background: ${SecondaryColor.white};
  color: ${({ floating }) => floating ? `${SecondaryColor.black}` : `${SecondaryColor.lightblack}`};
  transition: all .2s;
  pointer-events: none;
  font-weight: 300;
  
  ${({ floating }) => {
    if (floating) {
      return `
        transform: translate3d(-.5rem,-2rem,0);
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

export const TextareaComponent = styled.textarea`
  position: relative;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 1em;
  border: 2px solid ${SecondaryColor.lightblack};
  transition: all .5s;
  resize: vertical;

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

    + ${TextareaLabel} {
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

    + ${TextareaLabel} {
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

    + ${TextareaLabel} {
      transform: translate3d(-.5rem,-2rem,0);
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
