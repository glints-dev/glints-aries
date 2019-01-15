import styled from 'styled-components';
import { Device } from '../../Utils/StyleConfig';
import { SecondaryColor } from '../Colors';

export const ModalContainer = styled.div`
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  transform: ${({ isOpen }) => isOpen ? 'scale(1)' : 'scale(0.98)'};
  transform-origin: center;
  transition: ${({ isOpen }) => isOpen ? 'all .2s ease-in' : 'all .15s ease-out'};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: ${({ centering }) => centering && 'center'};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.65);
  overflow: auto;
`;

export const ModalDialog = styled.div`
  position: relative;
`;

export const ModalContentArea = styled.div`
  position: relative;
  background: ${({ hideContentArea }) => hideContentArea ? 'transparent' : `${SecondaryColor.white}`};
  margin: 2.5em auto;
  max-width: 95vw;
  outline: none;
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  transform: ${({ isOpen }) => isOpen ? 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' : 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 30, 0, 1)'};
  transition: ${({ isOpen }) => isOpen ? 'all .25s ease-in' : 'all .25s ease-out'};
  ${({ centering }) => {
    if (centering) {
      return `
        max-height: 85vh;
        overflow: auto;
      `;
    }
  }}
    
  @media ${Device.mobileM} {
    padding: 1em;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  border-bottom: 1px solid ${SecondaryColor.lightgrey};
  padding: .8em;

  h3 {
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
  }
`;

export const ModalBody = styled.section`
  position: relative;
  padding: ${({ hideContentArea }) => hideContentArea ? '0' : '1em 2em'};
`;

export const ModalFooter = styled.footer`
  position: relative;
  display: flex;
  padding: .8em;
  justify-content: flex-end;
  border-top: 1px solid ${SecondaryColor.lightgrey};

  * {
    margin-left: 12px;

    &:first-child {
      margin-left: 0;
    }
  }
`;
