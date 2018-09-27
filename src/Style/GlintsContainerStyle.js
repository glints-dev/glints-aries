import styled from 'styled-components';
import { size, Device } from '../Utils/StyleConfig';

const GlintsContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100vw;

  @media (min-width: ${size.desktopL}) { 
    width: 1400px;
    padding: 0 20px;
  }

  @media (min-width: ${size.desktopM}) and (max-width: 1439px) { 
    width: 1200px;
    padding: 0 30px;
  }

  @media (min-width: ${size.desktopS}) and (max-width: 1259px) { 
    padding: 0 32px;
  }

  @media (min-width: ${size.tablet}) and (max-width: 1023px) { 
    padding: 0 32px;
  }

  @media (min-width: ${size.mobileL}) and (max-width: 767px) { 
    padding: 0 24px;
  }

  @media (min-width: ${size.mobileM}) and (max-width: 639px) { 
    padding: 0 20px;
  }

  @media (min-width: ${size.mobileS}) and (max-width: 479px) { 
    padding: 0 10px;
  }

  @media ${Device.mobileS} { 
    padding: 0 10px;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: 'Poppins';
  }
  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin-bottom: 0;
  }
`;

export default GlintsContainer;
