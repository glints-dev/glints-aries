import styled, { keyframes } from 'styled-components';

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
    height: ${({ headerHeight }) => headerHeight}px;
    background-color: ${({ backgroundColour }) => backgroundColour || null};
    width: 100vw;
    z-index: 100;
    box-shadow: ${({ showDivider }) => showDivider ? '0 1px 0 0 #d4d4d4' : null};
`;

export const LayoutHeaderEmptySpace = styled.div`
    height: ${({ headerHeight }) => headerHeight}px;
    width: 100vw;
`;

export const LayoutBody = styled.div`
    width: 100vw;
`;


export const SideBarContainer = styled.div`
    position: fixed;
    display: ${({ noDisplay }) => noDisplay ? 'none' : 'block'};
    height: 100vh;
    width: 100vw;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    animation: ${({ open }) => open ? fadeIn : fadeOut} .3s ease-in-out;
    z-index: ${({ noDisplay }) => noDisplay ? '-1' : '9999'};
`;

export const SideBarWrapper = styled.div`
    position: absolute;
    height: 100vh;
    width: ${({ sidebarWidth }) => sidebarWidth || '80vw'};
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
