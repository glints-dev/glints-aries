import styled, { css } from 'styled-components';
import { PrimaryColor } from '../Style/Colors';

const highlight = css`
    display: inline-flex;
    position: relative;
    text-transform: uppercase;

    &:after {
        content: '';
        position: absolute;
        background: ${PrimaryColor.glintsyellow};
        width: 100%;
        height: .6em;
        z-index: -1;
        left: 0;
        top: .8em;
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

