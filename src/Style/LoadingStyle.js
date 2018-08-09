import styled, { keyframes, css } from 'styled-components';

import { PrimaryColor, SecondaryColor } from './Colors';
import { Size } from '../Utils/StyleConfig';

const spin = keyframes`
  0%{
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(360deg);
  }
`;

const spinnerGlobal = css`
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 8px solid transparent;
  border-top-color: ${PrimaryColor.glintsred};
`;

export const LoadingContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  label {
    position: relative;
    text-transform: uppercase;
    top: -.5em;
    font-weight: 600;
  }
`;

export const Spinner = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;

  ${(props) => {
    switch (props.size) {
      case `${Size.SMALL}`:
        return `
          width: 3em;
          height: 3em;
        `;
      case `${Size.MEDIUM}`:
        return `
          width: 4em;
          height: 4em;
        `;
      case `${Size.LARGE}`:
        return `
          width: 6em;
          height: 6em;
        `;
      default:
        return `
          width: 4em;
          height: 4em;
        `;
    }
  }};

  &:before {
    ${spinnerGlobal};
    z-index: 100;
    animation: ${spin} 1s infinite;
  }

  &:after {
    ${spinnerGlobal};
    border: 8px solid ${SecondaryColor.whitesmoke};
  }
`;
