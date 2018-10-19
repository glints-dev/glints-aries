import styled from 'styled-components';
import { Device } from '../../Utils/StyleConfig';
import { SecondaryColor } from '../Colors';

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.65);
`;


export const ModalContentArea = styled.div`
  position: relative;
  background: ${({ hideContentArea }) => hideContentArea ? 'transparent' : `${SecondaryColor.white}`};
  overflow: ${({ hideContentArea }) => hideContentArea ? 'hidden' : 'auto'};
  padding: ${({ hideContentArea }) => hideContentArea ? '0' : '1.5rem 3rem'};
  max-width: 100%;
  max-height: 85vh;
  z-index: 9999;
    
  @media ${Device.mobileM} {
    padding: 1.5rem;
  }
`;
