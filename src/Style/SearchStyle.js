import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

export const SearchContainer = styled.div`
    display: inline-flex;
    align-items: center;
    width: 100%;
    border: 2px solid ${SecondaryColor.lightgrey};
    padding: .4em .8em;
    background: ${SecondaryColor.white};
    box-shadow: 0 10px 15px 0 rgba(0,0,0,0.05);
`;

export const SearchItemWrapper = styled.div`
    margin: 0 1em;
`;