import styled, { keyframes } from 'styled-components';
import { SecondaryColor } from '../Colors';

const sideToLeft = keyframes`
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0%);
    }
`;

const sideToRight = keyframes`
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(100%);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
`;

export const LayoutContainer = styled.div`
    display: grid;
    grid-template-rows: ${({ tempRows }) => tempRows};
    grid-template-columns: ${({ tempCols }) => tempCols};
    width: 100vw;
    height: 100vh;
`;

export const LayoutHeader = styled.div`
    position: fixed;
    height: 90px;
    background-color: ${SecondaryColor.white};
    width: 100vw;
    z-index: 100;
`;

export const LayoutHeaderEmptySpace = styled.div`
    height: 90px;
    width: 100vw;
`;

export const LayoutBody = styled.div`
    width: 100vw;
`;

export const LayoutFooter = styled.div`
    width: 100vw;
`;


export const SideBarContainer = styled.div`
    position: fixed;
    display: ${({ isDisplay }) => isDisplay ? 'none' : 'block'};
    height: 100vh;
    width: 100vw;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    animation: ${({ open }) => open ? fadeIn : fadeOut} .3s ease-in-out;
    z-index: ${({ isDisplay }) => isDisplay ? '-1' : '9999'};
`;

export const SideBarWrapper = styled.div`
    position: absolute;
    height: 100vh;
    width: 80vw;
    max-width: 300px;
    top: 0px;
    right: 0px;
    background-color: white;
    animation: ${({ open }) => open ? sideToLeft : sideToRight} .3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
    outline: none;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
    overflow-x: none;
`;
