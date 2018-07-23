import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

const padding = '1em 1.5em';

export const PointingModalContainer = styled.div`
    position: relative;
    background: ${SecondaryColor.white};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const PointingModalHeaderArrow = styled.div`
    position: absolute;
    right: 18px;
    top: -8px;
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
    background-color: white;
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
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
