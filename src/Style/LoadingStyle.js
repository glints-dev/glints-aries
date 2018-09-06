import styled, { keyframes, css } from 'styled-components';

import { SecondaryColor } from './Colors';
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
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

export const LoadingContainer = styled.div`
  position: relative;
  display: inline-flex;
`;

export const Spinner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    switch (props.size) {
      case `${Size.SMALL}`:
        return `
          width: 1.5rem;
          height: 1.5rem;
        `;
      case `${Size.MEDIUM}`:
        return `
          width: 2.5rem;
          height: 2.5rem;
        `;
      case `${Size.LARGE}`:
        return `
          width: 3.5rem;
          height: 3.5rem;
        `;
      default:
        return `
          width: 2.5rem;
          height: 2.5rem;
        `;
    }
  }};

  &:before {
    ${spinnerGlobal};
    z-index: 100;
    animation: ${spin} 1s infinite;
    
    ${(props) => {
    switch (props.size) {
      case `${Size.SMALL}`:
        return `
          border: 3px solid transparent;
          border-top-color: ${SecondaryColor.white};
        `;
      case `${Size.MEDIUM}`:
        return `
          border: 4px solid transparent;
          border-top-color: ${SecondaryColor.white};
        `;
      case `${Size.LARGE}`:
        return `
          border: 5px solid transparent;
          border-top-color: ${SecondaryColor.white};
        `;
      default:
        return `
          border: 4px solid transparent;
          border-top-color: ${SecondaryColor.white};
        `;
    }
  }};
  }

  &:after {
    ${spinnerGlobal};
    border: 8px solid transparent;

    ${(props) => {
    switch (props.size) {
      case `${Size.SMALL}`:
        return `
          border: 3px solid ${SecondaryColor.actionblue};
        `;
      case `${Size.MEDIUM}`:
        return `
          border: 4px solid ${SecondaryColor.actionblue};
        `;
      case `${Size.LARGE}`:
        return `
          border: 5px solid ${SecondaryColor.actionblue};
        `;
      default:
        return `
          border: 4px solid transparent;
          border-top-color: ${SecondaryColor.white};
        `;
    }
  }};
  }
`;
