import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const LayoutHeaderWrapper = styled.div`
  position: fixed;
  top: 0px;
  background-color: ${SecondaryColor.white};
  width: 100vw;
  z-index: 100;
  border-bottom: 3px solid #E3E3E3;
`;

export const LayoutBodyWrapper = styled.div`
  width: 100vw;
  padding-top: 90px;
`;

export const LayoutFooterWrapper = styled.div`
  width: 100vw;
`;
