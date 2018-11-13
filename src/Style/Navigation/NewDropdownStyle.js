import styled from 'styled-components';

import { SecondaryColor } from '../Colors';

const underLine = `
  position: relative;
  
  &:hover {
    color: black;
    background-color: rgba(255, 255, 255, 1);
    &:after {
      transform: scaleX(1);
    }
  }
    
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: black;
    bottom: 0px;
    left: 0px;
    transition: all .2s ease-in-out;
    transform: scaleX(0);
  }
`;

const underLineAlwaysShow = `
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: black;
    bottom: 0px;
    left: 0px;
    transition: all .2s ease-in-out;
    transform: scaleX(1);
  }
`;

export const DropdownWrapper = styled.div`
  display: inline;
  outline: none;
`;

export const DropdownContainer = styled.div`
  display: inline;
  position: relative;

  &:focus {
    outline: none;
  }

  &:focus > ${DropdownWrapper} {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export const DropdownHeader = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  color: ${({ disabled }) => disabled && `${SecondaryColor.lightblack}`};
  ${({ showHoverLine, isOpen, disabled }) => {
    if (showHoverLine) {
      if (isOpen) {
        return (`
          margin-bottom: 8px;
          padding-bottom: 5px;
          ${underLineAlwaysShow}
        `);
      }
      return (`
        margin-bottom: 8px;
        padding-bottom: 5px;
        ${underLine}
      `);
    }
    return (`
      padding: 1em 1.4em;
      background: ${isOpen || disabled ? `${SecondaryColor.whitesmoke}` : null};
      &:hover {
        background: ${SecondaryColor.whitesmoke};
      }`
    );
  }}

  svg:first-child {
    margin-right: .6em;
  }

  svg:last-child {
    margin-left: .6em;
  }
`;

export const DropdownBody = styled.ul`
  position: absolute;
  display: ${({ open }) => open ? 'block' : 'none'};
  background: ${SecondaryColor.white};
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.12);
  z-index: 1000;
  padding: 0;
  margin: 0;
  ${({ dropDownPlacement }) => {
    if (dropDownPlacement === 'right') {
      return (`
        right: 0;
      `);
    }
    return (`
      left: 0;
    `);
  }}
  width: auto;
  white-space: ${({ noLineBreak }) => noLineBreak ? 'normal' : 'nowrap'};
  li {
    list-style-type: none;
  }
`;

export const DropdownItemWrapper = styled.li`
  position: relative;
  padding: 1em 1.4em;
  cursor: pointer;

  &.active {
    background: ${SecondaryColor.whitesmoke};
  }

  &:hover > ${DropdownHeader} {
    ${underLine}
  }
`;
