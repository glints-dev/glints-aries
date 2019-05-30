import styled from 'styled-components';
import { ScreenSize, Device } from '../Utils/StyleConfig';

const GlintsContainer = styled.div`
  position: relative;
  margin: 0 auto;
  font-family: Poppins, sans-serif;
  @media ${`(min-width: ${ScreenSize.desktopL}px)`} {
    width: 1400px;
    padding: 0 20px;
  }
  @media ${`(min-width: ${ScreenSize.desktopM}px)`} and (max-width: 1439px) {
    width: 1200px;
    padding: 0 30px;
  }
  @media ${`(min-width: ${ScreenSize.desktopS}px)`} and (max-width: 1259px) {
    padding: 0 32px;
  }
  @media ${`(min-width: ${ScreenSize.tablet}px)`} and (max-width: 1023px) {
    padding: 0 32px;
  }
  @media ${`(min-width: ${ScreenSize.mobileL}px)`} and (max-width: 767px) {
    padding: 0 24px;
  }
  @media ${`(min-width: ${ScreenSize.mobileM}px)`} and (max-width: 639px) {
    padding: 0 20px;
  }
  @media ${`(min-width: ${ScreenSize.mobileS}px)`} and (max-width: 479px) {
    padding: 0 10px;
  }
  @media ${Device.mobileS} {
    padding: 0 10px;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

export default GlintsContainer;
