import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const LayoutContainer = styled.div`
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
