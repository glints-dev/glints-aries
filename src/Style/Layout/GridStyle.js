import styled from 'styled-components';
import { ScreenSize } from '../../Utils/StyleConfig';

export const ColumnContainer = styled.div`
    ${({
    xs, sm, md, xsOrder, smOrder, mdOrder,
  }) => `
        max-width: 100%;
        flex-basis: calc(100% / 12 * ${xs});
        order: ${xsOrder || 0};
        @media (min-width: ${ScreenSize.mobileS}px) {
            flex-basis: calc(100% / 12 * ${xs});
            order: ${xsOrder || 0};
        }

        @media (min-width: ${ScreenSize.mobileM}px) {
            flex-basis: calc(100% / 12 * ${xs});
            order: ${xsOrder || 0};
        }

        @media (min-width: ${ScreenSize.mobileL}px) {
            flex-basis: calc(100% / 12 * ${xs});
            order: ${xsOrder || 0};
        }

        @media (min-width: ${ScreenSize.tablet}px) {
            flex-basis: calc(100% / 12 * ${sm});
            order: ${smOrder || 0};
        }

        @media (min-width: ${ScreenSize.desktopS}px) {
            flex-basis: calc(100% / 12 * ${md});
            order: ${mdOrder || 0};
        }

        @media (min-width: ${ScreenSize.desktopM}px) {
            flex-basis: calc(100% / 12 * ${md});
            order: ${mdOrder || 0};
        }

        @media (min-width: ${ScreenSize.desktopL}px) {
            flex-basis: calc(100% / 12 * ${md});
            order: ${mdOrder || 0};
        }
    `}
    
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 100%;
        
    ${({ alignContent }) => {
    if (alignContent) {
      return `
        align-content: ${alignContent};
        align-items: ${alignContent};
        `;
    }
    return null;
  }}
    ${({ justifyContent }) => {
    if (justifyContent) {
      return `
        justify-content: ${justifyContent};
        justify-items: ${justifyContent};
      `;
    }
    return null;
  }}
`;
