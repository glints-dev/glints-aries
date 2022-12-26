import styled from 'styled-components';
import { PrimaryColor, SecondaryColor, Greyscale } from '../../Utils/Colors';
import { Shadow } from '../../Utils/Shadow';
import { SelectInputProps } from './Select';

export const SelectContainer = styled.div`
  flex-grow: 1;
  position: relative;
  font-weight: normal;
`;

export const SelectWrapper = styled.div<SelectWrapperProps>`
  display: flex;
  align-items: center;
  .select-icon {
    font-size: ${({ small }) => (small ? '12px' : '15px')};
    position: absolute;
    right: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      transform: ${({ isFocus }) => (isFocus ? 'rotate(180deg)' : 'rotate(0)')};
      transition: ${({ isFocus }) =>
        isFocus ? 'transform .5s' : 'transform .5s'};
    }
  }
`;

interface SelectWrapperProps {
  isFocus: boolean;
  small?: boolean;
}

export const SelectLabel = styled.label<SelectLabelProps>`
  position: absolute;
  left: ${({ small }) => (small ? '16px' : '22px')};
  background: ${Greyscale.white};
  color: ${({ floating }) =>
    floating ? `${Greyscale.black}` : `${Greyscale.grey}`};
  transition: all 0.2s;
  pointer-events: none;
  font-size: ${({ small }) => (small ? '14px' : '16px')};

  ${({ floating }) => {
    if (floating) {
      return `
        padding: 0 5px;
        top: 1em;
        transform: translate3d(-15px, -20px, 0);
        transition: all .2s;
        font-size: 12px;
      `;
    }
  }}
  ${({ floating, small }) => {
    if (floating && small) {
      return `
        transform: translate3d(-10px, -20px, 0);
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

interface SelectLabelProps {
  floating: boolean;
  small: boolean;
  status: string;
}

interface StyledSelectInputProps extends SelectInputProps {
  floating?: boolean;
}

export const SelectInput = styled.input<StyledSelectInputProps>`
  width: 100%;
  outline: none;
  height: ${({ small }) => (small ? '46px' : '53px')};
  padding: ${({ small }) =>
    small ? '13px 40px 13px 15px' : '15px 42px 15px 20px'};
  border: ${({ status }) =>
    status === 'error'
      ? `2px solid ${PrimaryColor.glintsred}`
      : `2px solid ${Greyscale.grey}`};
  transition: all 0.5s;
  font-size: ${({ small }) => (small ? '1em' : '1.1em')};
  line-height: 1.5;

  &::placeholder {
    color: ${Greyscale.grey};
  }

  /* Styling for disableTyping */
  ${({ disableTyping }) => {
    if (disableTyping) {
      return `
        color: transparent;
        text-shadow: 0 0 0 black;
        cursor: pointer;
      `;
    }
  }}
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
    background: ${Greyscale.softgrey};
    + ${SelectLabel} {
      ${({ floating }) => {
        if (!floating) {
          return `
              background: transparent;
            `;
        }
      }}
      color: ${Greyscale.grey};
    }
    &:hover {
      border: 2px solid ${Greyscale.lightgrey};
    }
  }
  &:hover {
    border: 2px solid ${SecondaryColor.actionblue};
    transition: all 0.5s;
    ${({ status }) => {
      if (status === 'error') {
        return `
          border: 2px solid ${PrimaryColor.glintsred};
        `;
      }
    }}
    + ${SelectLabel} {
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
    border: 2px solid ${SecondaryColor.actionblue};
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
      transform: ${({ small }) =>
        small
          ? 'translate3d(-10px, -20px, 0)'
          : 'translate3d(-15px, -20px, 0)'};
      transition: all 0.2s;
      color: ${Greyscale.black};
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

export const SelectListWrapper = styled.ul<SelectListWrapperProps>`
  position: absolute;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transform: ${({ open }) => (open ? 'scaleY(1)' : 'scaleY(0.9)')};
  transform-origin: center top;
  transition: ${({ open }) => (open ? 'all .2s ease' : 'all .1s ease')};
  background: ${Greyscale.white};
  min-width: 100%;
  height: auto;
  box-shadow: ${Shadow.down3};
  z-index: 9999;
  max-height: 200px;
  overflow: auto;
  font-size: ${({ small }) => (small ? '1em' : '1.1em')};
  padding: 0;
  margin: 0;
`;

interface SelectListWrapperProps {
  open: boolean;
  small: boolean;
}

export const SelectItemWrapper = styled.li<SelectItemWrapperProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5em 1em;
  list-style-type: none;

  &:first-child {
    margin-top: 0.5em;
  }

  &:last-child {
    margin-bottom: 0.5em;
  }

  &.active {
    color: ${SecondaryColor.actionblue};
    background: ${Greyscale.softgrey};
  }

  &.select-loading {
    justify-content: center;
  }

  ${({ disabled }) => {
    if (disabled) {
      return `
        cursor: not-allowed;
        background: ${Greyscale.softgrey};
        color: ${Greyscale.grey};
        font-style: italic;
      `;
    }
  }}
`;

interface SelectItemWrapperProps {
  disabled?: boolean;
}

export const SelectErrorDefault = styled.span`
  color: ${PrimaryColor.glintsred};
`;
