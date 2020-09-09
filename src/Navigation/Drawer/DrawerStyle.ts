import styled, { keyframes } from 'styled-components';
import { DrawerPosition } from './Drawer';

const openFromRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;

const closeToRight = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
`;

const openFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`;

const closeToLeft = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const DrawerContainer = styled.div<DrawerContainerProps>`
  position: fixed;
  display: ${({ isDisplay }) => (isDisplay ? 'block' : 'none')};
  min-height: 100vh;
  max-height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.3s ease-in-out;
  z-index: ${({ isDisplay }) => (isDisplay ? '9999' : '-1')};
`;

interface DrawerContainerProps {
  isDisplay: boolean;
  open: boolean;
}

export const DrawerWrapper = styled.div<DrawerWrapperProps>`
  position: absolute;
  height: 100vh;
  width: 80vw;
  max-width: 300px;
  top: 0px;
  ${({ position }) =>
    ({
      left: `
    left: 0px;
  `,
      right: `
    right: 0px;
  `,
    }[position])}

  background-color: white;
  animation: ${({ open, position }) =>
      ({
        right: open ? openFromRight : closeToRight,
        left: open ? openFromLeft : closeToLeft,
      }[position])}
    0.3s ease-in-out;
  transform: ${({ open, position }) =>
    ({
      right: open ? 'translateX(0%)' : 'translateX(100%)',
      left: open ? 'translateX(0%)' : 'translateX(-100%)',
    }[position])};
  outline: none;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
`;

interface DrawerWrapperProps {
  open: boolean;
  position: DrawerPosition;
}
