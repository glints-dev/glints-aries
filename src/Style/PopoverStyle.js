import styled, { keyframes } from 'styled-components';

const opacityAnimation = keyframes`
  0% {
    opacity: 0
  }
  80% {
    opacity: 1;
  }
`;

export const ChildHolder = styled.div`
  cursor: pointer;
  position: relative;
  margin: ${({ margin }) => margin};
`;

export const ButtonContainer = styled.div`
  position: relative;
  outline: none;
  display: flex;
  justify-content: flex-end;
`;

export const PopOverContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  animation: ${opacityAnimation} .2s linear;
  z-index: 10;
  min-width: 250px;
`;
