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
        background: red;
    }

    @media (min-width: ${size.desktopM}) and (max-width: 1439px) { 
        width: 1200px;
        background: green;
    }

    @media (min-width: ${size.desktopS}) and (max-width: 1259px) { 
        width: 960px;
        background: yellow;
    }

    @media (min-width: ${size.tablet}) and (max-width: 1023px) { 
        width: 720px;
        background: grey;
    }

    @media (min-width: ${size.mobileL}) and (max-width: 767px) { 
        width: 600px;
        background: orange;
    }

    @media (min-width: ${size.mobileM}) and (max-width: 639px) { 
        width: 440px;
        background: purple;
    }

    @media (min-width: ${size.mobileS}) and (max-width: 479px) { 
        width: 300px;
        background: pink;
    }

    @media ${Device.mobileS} { 
        width: 300px;
        padding: 0 1rem;
        background: pink;
    }
`;
