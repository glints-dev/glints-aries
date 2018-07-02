import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

export const SearchContainer = styled.div`
    display: inline-flex;
    align-items: center;
    width: 100%;
    border: 2px solid ${SecondaryColor.lightgrey};
    padding: .6em .8em;
    background: ${SecondaryColor.white};
`;

export const SearchItemWrapper = styled.div`
    margin: 0 1em;
`;