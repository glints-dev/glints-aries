import styled from 'styled-components';
import { ScreenSize } from '../../Utils/StyleConfig';

export const ColumnContainer = styled.div`
    ${({ xs, sm, md }) => `
        flex-basis: calc(100% / 12 * ${xs});
        @media (min-width: ${ScreenSize.mobileS}px) {
            flex-basis: calc(100% / 12 * ${xs});
        }

        @media (min-width: ${ScreenSize.mobileM}px) {
            flex-basis: calc(100% / 12 * ${xs});
        }

        @media (min-width: ${ScreenSize.mobileL}px) {
            flex-basis: calc(100% / 12 * ${xs});
        }

        @media (min-width: ${ScreenSize.tablet}px) {
            flex-basis: calc(100% / 12 * ${sm});
        }

        @media (min-width: ${ScreenSize.desktopS}px) {
            flex-basis: calc(100% / 12 * ${md});
        }

        @media (min-width: ${ScreenSize.desktopM}px) {
            flex-basis: calc(100% / 12 * ${md});
        }

        @media (min-width: ${ScreenSize.desktopL}px) {
            flex-basis: calc(100% / 12 * ${md});
        }
    `}
    
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
