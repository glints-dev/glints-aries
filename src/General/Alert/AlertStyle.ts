import styled, { keyframes } from 'styled-components';

import { ScreenSize } from '../../Utils/StyleConfig';
import { Shadow } from '../../Utils/Shadow';

const fadeDown = keyframes`
  0% {
    transform: translateY(-100%);
    top: 0;
  }

  100% {
    transform: translateY(0%);
    top: 16px;
  }
`;

const fadeUp = keyframes`
  0% {
    transform: translateY(0%);
    top: 12px;
  }

  100% {
    transform: translateY(-100%);
    top: 0;
  }
`;

export const AlertContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 16px;
  animation: ${fadeDown} 0.3s ease-in-out;
  &[aria-hidden='true'] {
    top: 0;
    animation: ${fadeUp} 0.3s ease-in-out;
  }
  display: flex;
  align-items: center;
  box-shadow: ${Shadow.down4};
  padding: 12px;
  border-radius: 4px;
  z-index: 5000;
  min-width: 296px;
  max-width: ${ScreenSize.tablet}px;
  outline: none;
  line-height: 1.5;
  font-size: 14px;
  color: #454545;

  @media (max-width: ${ScreenSize.tablet}px) {
    max-width: 95%;
  }

  background: #c5ecfa;
  &[data-type='success'] {
    background: #c2e2da;
  }
  &[data-type='warning'] {
    background: #fde9cc;
  }
  &[data-type='danger'] {
    background: #facbcc;
  }
`;

export const AlertIcon = styled.div`
  margin-right: 8px;
  line-height: 1;
  svg {
    display: block;
  }
`;

export const AlertMessage = styled.div`
  margin-right: 8px;
  flex-grow: 1;
`;

export const AlertClose = styled.div`
  line-height: 1;
  cursor: pointer;
  font-size: 10px;
`;
