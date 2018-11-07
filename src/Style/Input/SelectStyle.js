import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Colors';

export const SelectContainer = styled.div`
  position: relative;
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;

  .select-icon {
    position: absolute;
    right: 1em;
    display: flex;
    align-items: center;
    pointer-events: none;
  }
`;

export const SelectLabel = styled.label`
  position: absolute;
  left: 1.5em;
  background: ${SecondaryColor.white};
  color: ${({ floating }) => floating ? `${SecondaryColor.black}` : `${SecondaryColor.lightblack}`};
  transition: all .2s;
  pointer-events: none;
  font-weight: 300;
  
  ${({ floating }) => {
    if (floating) {
      return `
        padding: 0 5px;
        top: 1em;
        transform: translate3d(-10px, -22px, 0);
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

export const SelectInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 18px 2.5em 18px 18px;
  border: 2px solid ${SecondaryColor.lightblack};
  transition: all .5s;
  font-size: 1em;
  line-height: 1.5;

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
    + ${SelectLabel} {
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
    + ${SelectLabel} {
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
    + ${SelectLabel} {
      padding: 0 5px;
      top: 1em;
      transform: translate3d(-10px, -22px, 0);
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

export const SelectListWrapper = styled.ul`
  position: absolute;
  background: ${SecondaryColor.white};
  width: 100%;
  height: auto;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.12);
  z-index: 9999;
  max-height: 200px;
  overflow: auto;
`;

export const SelectItemWrapper = styled.li`
  display: flex;
  cursor: pointer;
  padding: .5em 1em;
  
  &:first-child {
    margin-top: .5em;
  }
  &:last-child {
    margin-bottom: .5em;
  }
  &.active {
    color: ${SecondaryColor.blue};
    background: ${SecondaryColor.lightergrey};
  }
  ${({ disabled }) => {
    if (disabled) {
      return `
        cursor: not-allowed;
        background: ${SecondaryColor.lightergrey};
        color: ${SecondaryColor.grey};
        font-style: italic;
      `;
    }
  }}
`;
