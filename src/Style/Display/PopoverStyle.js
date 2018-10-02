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
  position: relative;
  margin: ${({ margin }) => margin};
`;

export const CursorPointer = styled.div`
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  position: relative;
  outline: none;
  display: flex;
  justify-content: flex-end;
`;

export const PopOverContent = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  right: 50%;
  animation: ${opacityAnimation} .2s linear;
  z-index: 10;
  min-width: 250px;
  transform: translateX(calc(18px + 7.5px));
`;
