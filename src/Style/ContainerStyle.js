import styled from 'styled-components';
import { size, Device } from '../Utils/StyleConfig';

export const Outter = styled.div`
    position: relative;

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
`;
