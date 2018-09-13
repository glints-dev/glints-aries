import styled, { keyframes } from 'styled-components';

import { SecondaryColor } from './Colors';

const fadeDown = keyframes`
  0% {
    transform: translate(-50%, -100%);
  }

  100% {
    transform: translate(-50%, 0%);
  }
`;

const fadeUp = keyframes`
  0% {
      transform: translate(-50%, 0%);
    }

  100% {
    transform: translate(-50%, -100%);
  }
`;

export const NotificationContainer = styled.div`
    position: fixed;
    left: 50%;
    top: ${({ isVisible }) => isVisible ? '10px' : '0px'};
    transform: ${({ isVisible }) => isVisible ? 'translate(-50%, 0%)' : 'translate(-50%, -100%)'};
    display: grid;
    grid-template-columns: 1fr auto;
    border-radius: 5px;
    box-shadow: ${({ isVisible }) => isVisible ? '0 4px 12px 2px rgba(0, 0, 0, .4)' : null};
    padding: 0.5em 0.5em 0.5em 2em;
    align-items: center;
    grid-column-gap: 10px;
    background-color: ${SecondaryColor.darkerWhite};
    z-index: 5000;
    width: 80vw;
    max-width: 500px;
    animation: ${({ isOpen }) => isOpen ? fadeDown : fadeUp} .3s ease-in-out;
`;

export const NotificationMessage = styled.div`
    position: relative;
    word-wrap: break-word;
`;

export const NotificationIcon = styled.div`
    position: relative;
    display: inherit;
    align-items: center;
    cursor: pointer;
`;
