import styled from 'styled-components';

import { Device } from '../../Utils/StyleConfig';

import { PrimaryColor, SecondaryColor } from '../Colors';

export const ToastContainer = styled.div<ToastContainerProps>`
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
  transform: ${({ isVisible }) => isVisible ? 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' : 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 30, 0, 1)'};
  transition: ${({ isVisible }) => isVisible ? 'all .25s ease-in' : 'all .25s ease-out'};
  position: fixed;
  bottom: 4em;
  right: 4em;
  min-width: 300px;
  max-width: 500px;
  background: ${({ theme }) => theme === 'black' ? `${SecondaryColor.black}` : `${PrimaryColor.glintsblue}`};
  color: ${({ theme }) => theme === 'black' ? `${SecondaryColor.white}` : `${SecondaryColor.black}`};
  z-index: 1005;
  line-height: 1.5;
  padding: 1em;
  box-shadow: 0 10px 15px 0 rgba(0,0,0,0.05);

  h1, h2, h3, h4, h5, h6, p {
    color: ${({ theme }) => theme === 'black' ? `${SecondaryColor.white}` : `${SecondaryColor.black}`};
  }

  @media ${Device.mobileM} {
    min-width: 100%;
    bottom: 0;
    right: 0;
  }
`;

interface ToastContainerProps {
  isVisible: boolean;
}

export const ToastTopWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ToastIcon = styled.button`
  display: flex;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: none;
`;

export const ToastBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: .5em;
  text-align: center;
`;
