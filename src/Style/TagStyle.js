import styled from 'styled-components';
import { SecondaryColor } from './Colors';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: ${SecondaryColor.whitesmoke};
    padding: .4em 1em;
    border-radius: 1em;
    font-size: 1em;
    line-height: 1.5;

    * {
        margin-left: 1.5rem;
    }
`;
