import styled, { keyframes } from 'styled-components';

import { Device } from '../../Utils/StyleConfig';

import { SecondaryColor, PrimaryColor } from '../../Utils/Colors';

const fadeDown = keyframes`
  0% {
    transform: translate(-50%, -100%);
  }

  100% {
    transform: translate(-50%, 0%);
  }
`;

const fadeUp = keyframes`
  0% {
      transform: translate(-50%, 0%);
    }

  100% {
    transform: translate(-50%, -100%);
  }
`;

export const AlertContainer = styled.div<AlertContainerProps>`
  position: fixed;
  left: 50%;
  top: ${({ isVisible }) => (isVisible ? '10px' : '0px')};
  transform: ${({ isVisible }) =>
    isVisible ? 'translate(-50%, 0%)' : 'translate(-50%, -100%)'};
  display: flex;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.12);
  padding: 10px;
  background-color: ${SecondaryColor.ivory};
  z-index: 5000;
  min-width: 500px;
  max-width: 800px;
  animation: ${({ isOpen }) => (isOpen ? fadeDown : fadeUp)} 0.3s ease-in-out;
  outline: none;
  line-height: 1.5;
  font-size: 1em;

  @media ${Device.mobileM} {
    min-width: calc(100% - 30px);
  }

  ${({ type }) => {
    switch (type) {
      case 'success':
        return `
          background: ${SecondaryColor.lightgreen};
          border: 1px solid ${SecondaryColor.darkgreen};
        `;
      case 'warning':
        return `
          background: ${SecondaryColor.lightorange};
          border: 1px solid ${SecondaryColor.orange};
        `;
      case 'danger':
        return `
          background: ${SecondaryColor.lightred};
          border: 1px solid ${PrimaryColor.glintsred};
        `;
      case 'info':
        return `
          background: ${SecondaryColor.lightblue};
          border: 1px solid ${PrimaryColor.glintsblue};
        `;
      default:
        return `
          background: ${SecondaryColor.lightblue};
          border: 1px solid ${PrimaryColor.glintsblue};
        `;
    }
  }}
`;

interface AlertContainerProps {
  isOpen: boolean;
  isVisible: boolean;
  type: string;
}

export const AlertContent = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const AlertMessage = styled.p`
  position: relative;
  margin: 0;
  padding-right: 20px;
  line-height: normal;
`;

const alignSelf = `
  height: 20px;
  display: flex;
  align-items: center;
  align-self: flex-start;
`;

export const AlertIcon = styled.div`
  ${alignSelf}
  cursor: pointer;
  font-size: 10px;
`;

export const AlertTypeIconContainer = styled.div`
  ${alignSelf}
  font-size: 15px;
  margin-right: 10px;
`;
