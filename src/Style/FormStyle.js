import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';
import './GlobalStyle';

// Assets
import checkmark from './../../assets/image/checkmark-green.png';
import exclamation from './../../assets/image/exclamation.png';

/*
 * Text Field
 */

export const TextFieldContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: ${props => props.size};
`;

export const TextFieldLabel = styled.label`
  position: absolute;
  left: 1em;
  background: ${SecondaryColor.white};
  color: ${props => props.floating ? `${SecondaryColor.black}` : `${SecondaryColor.grey}`};
  transition: all .2s;
  pointer-events: none;
  font-weight: 300;

  ${props => {
    if (props.floating) {
      return`
        transform: translate3d(-.5em, -2em, 0);
        transition: all .2s;
        font-size: 12px;
      `;
    }
  }}
`;

export const TextFieldInput = styled.input`
  position: relative;
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 1em 2em 1em 1em;
  border: 2px solid ${SecondaryColor.lightgrey};
  font-weight: 600;
  transition: all .5s;

  ${props => {
    if(props.status === 'error'){
      if (props.floating) {
        return`
          border: 2px solid ${PrimaryColor.glintsred};
        `;
      }
    }
  }}
    

  &:disabled {
    cursor: default;
    background: ${SecondaryColor.whitesmoke};

    + ${TextFieldLabel} {
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

    ${props => {
      if (props.status === 'error') {
        return`
          border: 2px solid ${PrimaryColor.glintsred};
        `;
      }
    }}

    + label {
      color: ${SecondaryColor.black};
    }
  }

  &:focus {
    border: 2px solid ${SecondaryColor.black};

    ${props => {
      if (props.status === 'error') {
        return`
          border: 2px solid ${PrimaryColor.glintsred};
        `;
      }
    }}

    + ${TextFieldLabel} {
      transform: translate3d(-.5em, -2em, 0);
      transition: all .2s;
      color: ${SecondaryColor.black};
      font-size: 12px;
    }
  }
`;

export const Icon = styled.i`
  position: absolute;
  right: .6em;
  height: ${props => props.size};
  width: ${props => props.size};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  ${props => {
    if (props.status === 'success') {
      return`
        background-image: url(${checkmark});
      `;
    } else if (props.status === 'error') {
      return`
        background-image: url(${exclamation});
      `;
    }
  }}
`;
    


