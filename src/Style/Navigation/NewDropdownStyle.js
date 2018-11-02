import styled from 'styled-components';

import { SecondaryColor } from '../Colors';

export const DropdownWrapper = styled.div`
  display: inline;
  outline: none;
`;

export const DropdownContainer = styled.div`
  display: inline;

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
  padding: 1em 1.4em;
  cursor: pointer;
  background: ${({ isOpen, disabled }) => isOpen || disabled ? `${SecondaryColor.whitesmoke}` : null};
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  color: ${({ disabled }) => disabled && `${SecondaryColor.lightblack}`};

  &:hover {
    background: ${SecondaryColor.whitesmoke};
  }

  svg {
    margin-left: .6em;
  }
`;

export const DropdownBody = styled.ul`
  position: absolute;
  background: ${SecondaryColor.white};
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.12);
  z-index: 1000;
`;

export const DropdownItemWrapper = styled.li`
  position: relative;
  padding: 1em 1.4em;
  cursor: pointer;

  &:hover {
    background: ${SecondaryColor.whitesmoke};
  }
`;
