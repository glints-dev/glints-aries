import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';
import './GlobalStyle';

export const MobileMenuContainer = styled.div`
    background: ${PrimaryColor.glintsblue};
    color: ${SecondaryColor.white};
    padding: 1.2em 1.8em;
    min-width: 400px;
    height: 100vh;
`;

export const TopIconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    
    > * {
        cursor: pointer;
    }
`;

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    margin: 1em 0;

    label {
        font-weight: 700;
        margin-left: 1em;
        span {
            font-weight: 100;
            font-size: 16px;
        }

        p {
            margin: 0;
            cursor: pointer;
        }
    }
`;

export const MenuItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 2em;
`;

export const MenuItemWraper = styled.div`
    text-transform: uppercase;
    margin-bottom: 1em;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 600;
    cursor: pointer;

    a {
        text-decoration: none;
    }

    a,
    p,
    span,
    label,
    li {
        cursor: pointer;
    }
`;

export const MenuFooter = styled.footer`
    margin-top: 1em;

    > * {
        margin-bottom: 1em;
    }
`;