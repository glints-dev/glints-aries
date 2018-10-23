import styled from 'styled-components';

import { Device } from '../../Utils/StyleConfig';

import { PrimaryColor, SecondaryColor } from '../Colors';

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 6rem;
  right: 6rem;
  min-width: 300px;
  background: ${({ theme }) => theme === 'black' ? `${SecondaryColor.black}` : `${PrimaryColor.glintsblue}`};
  color: ${({ theme }) => theme === 'black' ? `${SecondaryColor.white}` : `${SecondaryColor.black}`};
  z-index: 9999;
  line-height: 1.5;
  padding: 1rem;
  box-shadow: 0 10px 15px 0 rgba(0,0,0,0.05);

  @media ${Device.mobileM} {
    width: 100%;
    bottom: 0;
    right: 0;
  }
`;

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
`;
