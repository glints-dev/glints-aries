import styled, { keyframes } from 'styled-components';

const opacityAnimation = keyframes`
  0% {
    opacity: 0
  }
  80% {
    opacity: 1;
  }
`;

export const PopoverContainer = styled.div`
  position: relative;
  outline: none;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const PopoverChildren = styled.div`
  position: relative;
`;

export const PopoverContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1em;
`;

export const PopoverItemWrapper = styled.div`
  position: relative;
`;

export const PopoverIcon = styled.div`
  display: flex;
  font-size: 1.5em;
`;

export const PopOverContent = styled.div`
  position: absolute;
  right: 50%;
  top: 2.5em;
  animation: ${opacityAnimation} .2s linear;
  z-index: 10;
  min-width: 250px;
  transform: translateX(calc(1em + .7em)) translateY(.5em);
`;
