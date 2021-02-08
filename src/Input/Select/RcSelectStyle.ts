import { default as RcSelect, Option } from 'rc-select';
import styled from 'styled-components';
import { PrimaryColor, SecondaryColor, Greyscale } from '../../Utils/Colors';

export const SelectContainer = styled.div`
  flex-grow: 1;
  position: relative;
  font-weight: normal;

  .rc-select-item {
    padding: 0.5em 1em;
    color: ${SecondaryColor.actionblue};
    background: ${Greyscale.softgrey};
  }

  .rc-select-item {
    width: 100%;
    height: 100px;
    background: red;
  }
`;

interface SelectLabelProps {
  floating: boolean;
  small: boolean;
  status: string;
}

export const SelectLabel = styled.label<SelectLabelProps>`
  position: absolute;
  left: ${({ small }) => (small ? '16px' : '22px')};
  background: ${Greyscale.white};
  color: ${({ floating }) =>
    floating ? `${Greyscale.black}` : `${Greyscale.grey}`};
  transition: all .2s;
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
        z-index: 99;
      `;
    }
    return `
      height: 100%;
      display: flex;
      align-items: center;
    `;
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

export const CustomizedSelect = styled(RcSelect)<SelectLabelProps>`
  position: relative;
  height: ${({ small }) => (small ? '46px' : '53px')};
  border: ${({ status }) =>
    status === 'error'
      ? `2px solid ${PrimaryColor.glintsred}`
      : `2px solid ${Greyscale.grey}`};

  .rc-select-item {
    width: 100%;
    height: 100px;
    background: red;
  }
`;

interface SelectItemWrapperProps {
  disabled?: boolean;
}

export const CustomizedOption = styled(Option)<SelectItemWrapperProps>`
  width: 100%;
  height: 100px;

  .rc-select-item {
    width: 100%;
    height: 100px;
    background: red;
  }
  /* display: flex;
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
  }} */
`;
