import styled from 'styled-components';
import { Device } from '../../Utils/StyleConfig';
import { SecondaryColor } from '../Colors';

export const ModalContainer = styled.div<ModalContainerProps>`
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: ${({ centering }) => centering && 'center'};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.65);
  overflow: auto;

  ${({ removeAnimation, isOpen }) => {
    if (!removeAnimation) {
      return `
        opacity: ${isOpen ? '1' : '0'};
        transform: ${isOpen ? 'scale(1)' : 'scale(0.98)'};
        transform-origin: center;
        transition: ${isOpen ? 'all .2s ease-in' : 'all .15s ease-out'};
      `;
    }
  }}
`;

interface ModalContainerProps {
  isOpen: boolean;
  centering: boolean;
  removeAnimation: boolean;
}

export const ModalDialog = styled.div`
  position: relative;
`;

export const ModalContentArea = styled.div<ModalContentAreaProps>`
  position: relative;
  background: ${({ hideContentArea }) => hideContentArea ? 'transparent' : `${SecondaryColor.white}`};
  margin: 2.5em auto;
  outline: none;

  ${({ size }) => {
    switch (size) {
      case 's':
        return `
          width: 300px;
        `;
      case 'm':
        return `
          width: 500px;
        `;
      case 'l':
        return `
          width: 800px;
        `;
      case 'xl':
        return `
          width: 920px;
        `;
      default:
        return `
          width: 500px;
        `;
    }
  }}

  ${({ centering }) => {
    if (centering) {
      return `
        max-height: 85vh;
        overflow: auto;
      `;
    }
  }}
    
  @media ${Device.mobileM} {
    width: 95vw;
  }

  ${({ removeAnimation, isOpen }) => {
    if (!removeAnimation) {
      return `
        opacity: ${isOpen ? '1' : '0'};
        transform: ${isOpen ? 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' : 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 30, 0, 1)'};
        transition: ${isOpen ? 'all .25s ease-in' : 'all .25s ease-out'};
      `;
    }
  }}
`;

interface ModalContentAreaProps {
  hideContentArea?: boolean;
  size?: string;
  centering?: boolean;
  removeAnimation?: boolean;
  isOpen?: boolean;
}

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-size: 1.6em;
  border-bottom: 1px solid ${SecondaryColor.lightgrey};
  padding: 15px;

  h3 {
    font-size: .8em;
    text-transform: uppercase;
    margin: 0;
    margin-right: 36px;
  }
  
  button {
    display: flex;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    width: 15px;
  }
`;

export const ModalBody = styled.section<ModalBodyProps>`
  position: relative;
  padding: ${({ hideContentArea }) => hideContentArea ? '0' : '20px 30px'};

  @media ${Device.mobileM} {
    padding: ${({ hideContentArea }) => hideContentArea ? '0' : '20px 15px'};
  }
`;

interface ModalBodyProps {
  hideContentArea: boolean;
}

export const ModalFooter = styled.footer`
  position: relative;
  display: flex;
  padding: 15px 30px;
  justify-content: flex-end;
  border-top: 1px solid ${SecondaryColor.lightgrey};

  @media ${Device.mobileM} {
    padding: 15px;
  }

  * {
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
    }
  }
`;
