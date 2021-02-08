import styled, { css } from 'styled-components';
import { ScreenSize, Device } from '../../Utils/StyleConfig';

const BaseStyles = css`
  font-family: Poppins, sans-serif;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

const PageStyles = css`
  position: relative;

  @media ${`(max-width: ${ScreenSize.tablet - 1}px)`} {
    width: 100%;
    margin: 0 12px;
  }
  @media ${Device.tablet} {
    width: 720px;
    margin: 0 16px;
  }
  @media ${Device.desktopS} {
    width: 960px;
    margin: 0 auto;
  }
  @media ${Device.desktopM} {
    width: 1140px;
  }
  @media ${Device.desktopL} {
    width: 1260px;
  }

  .rc-select-item {
    width: 100%;
    height: 100px;
  }
`;

export const BaseContainer = styled.div`
  ${BaseStyles}

  .rc-select-item {
    width: 100%;
    height: 100px;
  }
`;

export const PageContainer = styled.div`
  ${PageStyles}
`;

export const GlintsContainer = styled.div`
  ${BaseStyles}
  ${PageStyles}
`;

export default GlintsContainer;
