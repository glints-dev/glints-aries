import styled from 'styled-components';

export const LayoutContainer = styled.div`
    display: grid;
    grid-template-rows: ${({ tempRows }) => tempRows};
    grid-template-columns: ${({ tempCols }) => tempCols};
    width: 100vw;
    height: 100vh;
`;

export const LayoutHeader = styled.div`
    position: fixed;
    height: ${({ headerHeight }) => headerHeight}px
    width: 100vw;
`;

export const LayoutHeaderEmptySpace = styled.div`
    height: ${({ headerHeight }) => headerHeight}px
    width: 100vw;
`;

export const SideBarContainer = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0px;
    background-color: rgba(0,0,0,0.5);
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100vh)'};
    transition: all .3s ease-in-out;
    z-index: 9999;
`;
