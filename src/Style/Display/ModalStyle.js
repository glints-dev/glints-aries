import styled from 'styled-components';
import { Device } from '../../Utils/StyleConfig';
import { SecondaryColor } from '../Colors';

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.65);
  overflow: auto;
`;

export const ModalDialog = styled.div`
  position: relative;
`;

export const ModalContentArea = styled.div`
  position: relative;
  background: ${({ hideContentArea }) => hideContentArea ? 'transparent' : `${SecondaryColor.white}`};
  padding: ${({ hideContentArea }) => hideContentArea ? '0' : '1.5rem 3rem'};
  margin: 4rem auto;
  max-width: 100%;
  z-index: 9999;
  outline: none;
    
  @media ${Device.mobileM} {
    padding: 1.5rem;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
  font-size: 1.2em;
  
  button {
    display: flex;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;
