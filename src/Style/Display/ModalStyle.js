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
`;

export const ModalBackground = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.65);
`;

export const ModalContentArea = styled.div`
  position: relative;
  background: ${({ hideContentArea }) => hideContentArea ? 'transparent' : `${SecondaryColor.white}`};
  max-height: ${({ type }) => type === 'full-screen' ? '100vh' : '85vh'};
  height: ${({ type }) => type === 'full-screen' && '100vh'};
  overflow: ${({ hideContentArea }) => hideContentArea ? 'hidden' : 'auto'};
  padding: ${({ hideContentArea }) => hideContentArea ? '0' : '1.5rem 3rem'};
  z-index: 9999;

  ${({ type }) => {
    switch (type) {
      case 'small':
        return `
          width: 300px;
          max-width: 300px;
        `;
      case 'medium':
        return `
          width: 500px;
          max-width: 500px;
        `;
      case 'large':
        return `
          width: 800px;
          max-width: 800px;
        `;
      case 'full-screen':
        return `
          width: 100%;
        `;
      default:
        return `
          width: auto;
        `;
    }
  }}
    
  @media ${Device.mobileM} {
    padding: 1.5rem;
  }
`;
