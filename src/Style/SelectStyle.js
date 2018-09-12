import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

export const Container = styled.div`
  position: relative;
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  .icon {
    position: absolute;
    right: 1em;
    display: flex;
    height: 1em;
    width: 1em;
    align-items: center;
    pointer-events: none;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 1em;
  background: ${SecondaryColor.white};
  color: ${({ floating }) => floating ? `${SecondaryColor.black}` : `${SecondaryColor.lightblack}`};
  transition: all .2s;
  pointer-events: none;
  font-weight: 300;
  
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

export const Input = styled.input`
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

    + ${Label} {
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

    + ${Label} {
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

    + ${Label} {
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

export const ItemWrapper = styled.div`
  position: absolute;
  background: ${SecondaryColor.white};
  width: 100%;
  height: auto;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.12);
  z-index: 9999;
  max-height: 200px;
  overflow: auto;
`;

export const Item = styled.li`
  display: flex;
  cursor: pointer;
  padding: .5em 1em;
  
  &:first-child {
    margin-top: .5em;
  }

  &:last-child {
    margin-bottom: .5em;
  }

  &.active,
  &:hover {
    color: ${SecondaryColor.blue};
    background: ${SecondaryColor.lightergrey};
  }
`;
