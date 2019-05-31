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
    bottom: -5px;
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
    bottom: -5px;
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

export const DropdownHeader = styled.div<DropdownHeaderProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  color: ${({ disabled }) => disabled && `${SecondaryColor.lightblack}`};
  transition: all .4s;
  ${({
    showHoverLine, isOpen, disabled, showFullWidth,
  }) => {
    if (showHoverLine) {
      if (isOpen) {
        return (`
          ${underLineAlwaysShow}
        `);
      }
      return (`
        ${underLine}
      `);
    }
    if (showFullWidth) {
      return (`
        width: 100%;
        padding: 10px 0 10px 20px;
      `);
    }
    return (`
      padding: 1em 1.4em;
      background: ${isOpen || disabled ? `${SecondaryColor.whitesmoke}` : null};
      &:hover {
        background: ${SecondaryColor.whitesmoke};
        transition: all .4s;
      }`
    );
  }};

  svg:first-child {
    margin-right: .6em;
  }

  svg:last-child {
    margin-left: .6em;
  }
`;

interface DropdownHeaderProps {
  disabled?: boolean;
  isOpen?: boolean;
  showFullWidth?: boolean;
  showHoverLine?: boolean;
}

export const DropdownBody = styled.ul<DropdownBodyProps>`
  position: absolute;
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  opacity: ${({ open }) => open ? '1' : '0'};
  transform: ${({ open }) => open ? 'scaleY(1)' : 'scaleY(0.9)'};
  transform-origin: center top;
  transition: ${({ open }) => open ? 'all .2s ease' : 'all .1s ease'};
  background: ${SecondaryColor.white};
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.12);
  z-index: 1000;
  padding: 0;
  margin: 0;
  white-space: ${({ noLineBreak }) => noLineBreak ? 'normal' : 'nowrap'};

  ${({ dropDownPlacement, showFullWidth }) => {
    if (dropDownPlacement === 'right') {
      return (`
        right: 0;
        width: auto;
      `);
    }
    if (showFullWidth) {
      return (`
        width: calc(100% - 20px);
        left: 10px;
      `);
    }
    return (`
      left: 0;
      width: auto;
    `);
  }};

  ${({ showHoverLine }) => {
    if (showHoverLine) {
      return (`
        margin-top: 13px;
      `);
    }
    return null;
  }};
  
  li {
    list-style-type: none;
  }
`;

interface DropdownBodyProps {
  open?: boolean;
  noLineBreak?: boolean;
  dropDownPlacement?: 'left' | 'right';
  showFullWidth?: boolean;
  showHoverLine?: boolean;
}

export const DropdownItemWrapper = styled.li<DropdownItemWrapperProps>`
  position: relative;
  padding: 1em 1.4em;
  cursor: pointer;
  ${({ showFullWidth }) => {
    if (showFullWidth) {
      return (`
        width: 100%;
      `);
    }
    return null;
  }}

  &.active {
    background: ${SecondaryColor.whitesmoke};
  }

  &:hover > ${DropdownHeader} {
    ${underLine}
  }
`;

interface DropdownItemWrapperProps {
  showFullWidth?: boolean;
}

export const IconWrapper = styled.span<IconWrapperProps>`
  display: flex;

  svg {
    transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    transition: ${({ isOpen }) => isOpen ? 'transform .5s;' : 'transform .5s'};
  }
`;

interface IconWrapperProps {
  isOpen: boolean;
}
