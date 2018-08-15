import styled from 'styled-components';
import { SecondaryColor } from './Colors';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: ${SecondaryColor.whitesmoke};
    padding: .5rem 1.2rem;
    border-radius: 20px;

    * {
        margin-left: 1.5rem;
    }
`;
