import styled from 'styled-components';
import { size, Device } from '../Utils/StyleConfig';

const GlintsContainer = styled.div`
  position: relative;
  margin: 0 auto;

  @media (min-width: ${size.desktopL}) { 
    width: 1400px;
  }

  @media (min-width: ${size.desktopM}) and (max-width: 1439px) { 
    width: 1200px;
  }

  @media (min-width: ${size.desktopS}) and (max-width: 1259px) { 
    width: 960px;
  }

  @media (min-width: ${size.tablet}) and (max-width: 1023px) { 
    width: 720px;
  }

  @media (min-width: ${size.mobileL}) and (max-width: 767px) { 
    width: 600px;
  }

  @media (min-width: ${size.mobileM}) and (max-width: 639px) { 
    width: 440px;
  }

  @media (min-width: ${size.mobileS}) and (max-width: 479px) { 
    width: 300px;
  }

  @media ${Device.mobileS} { 
    width: 300px;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  h1, h2, h3,
  h4, h5, h6 {
    font-family: 'Poppins';
    margin: 0;
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

  p {
    margin: 0;
  }
  
  a, p, label,
  ul, li, span,
  i, div, input {
    font-family: 'Poppins';
  }
`;

export default GlintsContainer;
