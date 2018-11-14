import styled from 'styled-components';

import { Device } from '../../Utils/StyleConfig';

import { PrimaryColor, SecondaryColor } from '../Colors';

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 4em;
  right: 4em;
  min-width: 300px;
  max-width: 500px;
  background: ${({ theme }) => theme === 'black' ? `${SecondaryColor.black}` : `${PrimaryColor.glintsblue}`};
  color: ${({ theme }) => theme === 'black' ? `${SecondaryColor.white}` : `${SecondaryColor.black}`};
  z-index: 1005;
  line-height: 1.5;
  padding: 1em;
  box-shadow: 0 10px 15px 0 rgba(0,0,0,0.05);

  @media ${Device.mobileM} {
    min-width: 100%;
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
  text-align: center;
`;
