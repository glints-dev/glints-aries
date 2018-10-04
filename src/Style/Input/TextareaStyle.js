import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Colors';

export const TextareaContainer = styled.div`
  position: relative;
  display: flex;
`;

export const TextareaLabel = styled.label`
  position: absolute;
  left: 2rem;
  top: 1.5rem;
  background: ${SecondaryColor.white};
  color: ${({ floating }) => floating ? `${SecondaryColor.black}` : `${SecondaryColor.lightblack}`};
  transition: all .2s;
  pointer-events: none;
  font-weight: 300;
  
  ${({ floating }) => {
    if (floating) {
      return `
        padding: 0 .5rem;
        transform: translate3d(-1rem,-2.4rem,0);
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

export const TextareaInput = styled.textarea`
  position: relative;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1em;
  line-height: 1.5;
  padding: 1.8rem;
  border: 2px solid ${SecondaryColor.lightblack};
  transition: border .5s;
  resize: vertical;
  overflow: auto;

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
    transition: border .5s;

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
      padding: 0 .5rem;
      transform: translate3d(-1rem,-2.4rem,0);
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
