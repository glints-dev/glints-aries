import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Colors';

export const AutoCompleteContainer = styled.div`
  flex-grow: 1;
  position: relative;
`;

export const AutoCompleteWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AutoCompleteLabel = styled.label<AutoCompleteLabelProps>`
  position: absolute;
  left: ${({ small }) => small ? '16px' : '22px'};
  background: ${SecondaryColor.white};
  color: ${({ floating }) => floating ? `${SecondaryColor.black}` : `${SecondaryColor.lightblack}`};
  transition: all .2s;
  pointer-events: none;
  font-weight: 300;
  font-size: 1.1em;
  
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

interface AutoCompleteLabelProps {
  small: boolean;
  floating: boolean;
  status: string;
}

export const AutoCompleteInput = styled.input<AutoCompleteInputProps>`
  position: relative;
  width: 100%;
  border: none;
  outline: none;
  font-size: ${({ small }) => small ? '1em' : '1.1em'};
  line-height: 1.5;
  padding: ${({ small }) => small ? '13px 15px' : '15px 20px'};
  border: ${({ status }) => status === 'error' ? `2px solid ${PrimaryColor.glintsred}` : `2px solid ${SecondaryColor.lightblack}`};
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

    + ${AutoCompleteLabel} {
      background: transparent;
      color: ${SecondaryColor.grey};
    }

    &:hover {
      border: 2px solid ${SecondaryColor.lightgrey};
    }
  }

  &:hover {
    border: 2px solid ${SecondaryColor.actionblue};
    transition: all .5s;

    ${({ status }) => {
    if (status === 'error') {
      return `
          border: 2px solid ${PrimaryColor.glintsred};
        `;
    }
  }}

    + ${AutoCompleteLabel} {
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
    border: 2px solid ${SecondaryColor.actionblue};

    ${({ status }) => {
    if (status === 'error') {
      return `
          border: 2px solid ${PrimaryColor.glintsred};
        `;
    }
  }}

    + ${AutoCompleteLabel} {
      padding: 0 5px;
      top: 1em;
      transform: ${({ small }) => small ? 'translate3d(-10px, -20px, 0)' : 'translate3d(-15px, -20px, 0)'};
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

interface AutoCompleteInputProps {
  floating?: boolean;
  small?: boolean;
  status?: string;
}

export const AutoCompleteListWrapper = styled.ul<AutoCompleteListWrapperProps>`
  position: absolute;
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  opacity: ${({ open }) => open ? '1' : '0'};
  transform: ${({ open }) => open ? 'scaleY(1)' : 'scaleY(0.9)'};
  transform-origin: center top;
  transition: ${({ open }) => open ? 'all .2s ease' : 'all .1s ease'};
  background: ${SecondaryColor.white};
  width: 100%;
  height: auto;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.12);
  z-index: 9999;
  max-height: 200px;
  overflow: auto;
  font-size: ${({ small }) => small ? '1em' : '1.1em'};
  padding: 0;
  margin: 0;
`;

interface AutoCompleteListWrapperProps {
  open: boolean;
  small: boolean;
}

export const AutoCompleteItemWrapper = styled.li<AutoCompleteItemWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: .5em 1em;
  list-style-type: none;
  
  &:first-child {
    margin-top: .5em;
  }

  &:last-child {
    margin-bottom: .5em;
  }

  &.active {
    color: ${SecondaryColor.actionblue};
    background: ${SecondaryColor.lightergrey};
  }

  .autocomplete-additionalinfo {
    color: ${SecondaryColor.lighterblack};
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

interface AutoCompleteItemWrapperProps {
  disabled?: boolean;
}
