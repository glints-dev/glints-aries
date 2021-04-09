import styled from 'styled-components';
import { Device } from '../../Utils/StyleConfig';
import { Greyscale } from '../../Utils/Colors';
import { Props } from './Modal';

export const SIZES: { [s: string]: number } = {
  s: 300,
  m: 500,
  l: 800,
  xl: 920,
  default: 500,
};

interface InnerProps extends Omit<Props, 'isVisible'> {
  isOpen: boolean;
}

export const ModalContainer = styled.div<InnerProps>`
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
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

export const ModalDialog = styled.div`
  position: relative;
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-size: 1.6em;
  border-bottom: 1px solid ${Greyscale.lightgrey};
  padding: 16px;

  h3 {
    font-size: 0.8em;
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
  ${({ centering }) => {
    if (centering) {
      return `
        max-height: 300px;
        overflow: auto;
      `;
    }
  }}
  padding: ${({ hideContentArea }) => (hideContentArea ? '0' : '20px 30px')};

  @media ${Device.mobileM} {
    padding: ${({ hideContentArea }) => (hideContentArea ? '0' : '20px 16px')};
  }
`;

interface ModalBodyProps {
  hideContentArea: boolean;
  centering: boolean;
}

export const ModalFooter = styled.footer<{ isChildrenInMultiLines: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 16px 30px;
  justify-content: flex-end;
  border-top: 1px solid ${Greyscale.lightgrey};

  @media ${Device.mobileM} {
    padding: 16px;
  }

  ${({ isChildrenInMultiLines }) => {
    if (isChildrenInMultiLines) {
      return `
        flex-direction: column-reverse;

        > * {
          flex-grow: 1;

          &:nth-child(2) {
            margin-bottom: 10px; 
          }

          button {
            width: 100%;
          }
        }
      `;
    }
    return `
      > *:nth-child(2) {
        margin-left: 10px;
      }
    `;
  }}
`;

export const ModalContentArea = styled.div<InnerProps>`
  position: relative;
  background: ${({ hideContentArea }) =>
    hideContentArea ? 'transparent' : `${Greyscale.white}`};
  margin: 120px auto;
  max-width: 95vw;
  outline: none;

  ${({ size }) => {
    switch (size) {
      case 's':
        return `
          width: ${SIZES.s}px;
        `;
      case 'm':
        return `
          width: ${SIZES.m}px;
        `;
      case 'l':
        return `
          width: ${SIZES.l}px;
        `;
      case 'xl':
        return `
          width: ${SIZES.xl}px;
        `;
      default:
        return `
          width: ${SIZES.default}px;
        `;
    }
  }}

  ${({ centering }) => {
    if (centering) {
      return `
        display: flex;
        flex-direction: column;
        max-height: 85vh;
      `;
    }
  }}

  ${({ fullscreen }) => {
    if (fullscreen) {
      return `
        display: flex;
        flex-direction: column;
        max-width: none;
        max-height: none;
        min-width: 100vw;
        min-height: 100vh;
        margin: 0;

        ${ModalBody} {
          overflow: auto;
        }

        ${ModalFooter} {
          margin-top: auto;
        }
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
        transform: ${
          isOpen
            ? 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
            : 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 30, 0, 1)'
        };
        transition: ${isOpen ? 'all .25s ease-in' : 'all .25s ease-out'};
      `;
    }
  }}
`;
