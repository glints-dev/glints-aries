import styled from 'styled-components';
import { size, Device } from '../Utils/StyleConfig';

export const Outter = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`;

export const Inner = styled.div`
    @media (min-width: ${size.desktopL}) { 
        width: 1400px;
        padding: 0 2rem;
    }

    @media (min-width: ${size.desktopM}) and ${Device.desktopL} { 
        width: 1200px;
        padding: 0 3rem;
    }

    @media (min-width: ${size.desktopS}) and ${Device.desktopM} { 
        width: 960px;
        padding: 0 3.2rem;
    }

    @media (min-width: ${size.tablet}) and ${Device.desktopS} { 
        width: 720px;
        padding: 0 2.4rem;
    }

    @media (min-width: ${size.mobileL}) and ${Device.tablet} { 
        width: 600px;
        padding: 0 2rem;
    }

    @media (min-width: ${size.mobileM}) and ${Device.mobileL} { 
        width: 440px;
        padding: 0 2rem;
    }

    @media (min-width: ${size.mobileS}) and ${Device.mobileM} { 
        width: 300px;
        padding: 0 1rem;
    }

    @media ${Device.mobileS} { 
        width: 300px;
        padding: 0 1rem;
    }
`;
