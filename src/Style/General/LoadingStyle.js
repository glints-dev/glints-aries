import styled, { keyframes, css } from 'styled-components';

import { SecondaryColor } from '../Colors';

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
  border: .35em solid transparent;
  border-top-color: ${SecondaryColor.white};
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
  width: 2em;
  height: 2em;

  &:before {
    ${spinnerGlobal};
    z-index: 100;
    animation: ${spin} 1s infinite;
  }
  &:after {
    ${spinnerGlobal};
    border: .35em solid ${SecondaryColor.actionblue};
  }
`;
