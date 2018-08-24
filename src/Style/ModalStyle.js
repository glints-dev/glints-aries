import styled from 'styled-components';
import { Device } from '../Utils/StyleConfig';

export const Container = styled.div`
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    z-index: 9999;

    ${({ visibility }) => {
    if (visibility) {
      return `
        display: flex;
      `;
    }
    return `
        display: none;
      `;
  }}
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

export const ModalArea = styled.div`
    position: relative;
    z-index: 2;
    background: white;
    max-height: ${({ type }) => type === 'full-screen' ? '100vh' : '75vh'};
    height: ${({ type }) => type === 'full-screen' && '100vh'};
    overflow: auto;
    padding: 1.5rem 3rem;
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
      default:
        return `
            width: 100%;
        `;
    }
  }}
    
    @media ${Device.mobileM} {
        padding: 1.5rem;
    }
`;
