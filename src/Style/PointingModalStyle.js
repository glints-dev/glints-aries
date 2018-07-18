import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

const padding = '1em 1.5em';

export const PointingModalContainer = styled.div`
    position: relative;
    background: ${SecondaryColor.white};
    box-shadow: 0 10px 15px 0 rgba(0,0,0,0.05);

    &:before {
        position: absolute;
        right: 10px;
        top: -15px;
        content: "";
        border-top: 0 solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid ${SecondaryColor.white};
        border-left: 15px solid transparent;
    }
`;

export const PointingModalHeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding: ${padding};

    > *:first-child {
        margin-left: 0;
    }

    > *:last-child {
        margin-right: 0;
    }

    > * {
        margin-left: .5em;
        margin-right: .5em;
    }

    label {
        font-weight: 700;
    }

    span {
        font-size: 12px;
        font-weight: 500;
    }

    p {
        font-size: 16px;
    }
`;

export const PointingModalBodyContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: ${padding};
`;

export const PointingModalBodyItemWrapper = styled.p`
    font-weight: 600;
    cursor: pointer;
    margin: .3em 0;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }

    * {
        cursor: pointer;
    }
`;

export const PointingModalFooterContainer = styled.footer`
    display: flex;
    position: relative;
    padding: ${padding};
`;
