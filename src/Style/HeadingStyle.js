import styled, { css } from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Style/Colors';

const highlight = css`
    display: inline-flex;
    position: relative;
    text-transform: uppercase;
    color: ${SecondaryColor.black};
    z-index: 1;

    &:after {
        content: '';
        position: absolute;
        background: ${PrimaryColor.glintsyellow};
        width: 100%;
        height: .6em;
        z-index: -1;
        left: 0;
        bottom: 0;
    }
`;

export const HeadingLarge = styled.h1`
    ${highlight};
`;

export const HeadingMedium = styled.h3`
    ${highlight};
`;

export const HeadingSmall = styled.h6`
    ${highlight};
`;

