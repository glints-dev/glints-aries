import styled from 'styled-components';
import { Device } from '../../Utils/StyleConfig';
import { SecondaryColor } from '../Colors';

export const ModalContainer = styled.div`
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
  padding: ${({ hideContentArea }) => hideContentArea ? '0' : '1em 2em'};
  margin: 2.5em auto;
  max-width: 95vw;
  outline: none;

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

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1em;
  font-size: 1.2em;
  
  button {
    display: flex;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;
