import styled from 'styled-components';
import { Size } from '../Utils/StyleConfig';

export const BrandImageWrapper = styled.div`
    position: relative;
    display: inline-flex;
`;

export const BrandImage = styled.img`
    object-fit: contain;
    
    ${props => {
        switch(props.size) {
            case `${Size.SMALL}`:
                return`
                    width: 3em;
                    height: 3em;
                `;
            case `${Size.MEDIUM}`:
                return`
                    width: 6em;
                    height: 6em;
                `;
            case `${Size.LARGE}`:
                return`
                    width: 8em;
                    height: 8em;
                `;
            default:
                return`
                    width: 4em;
                    height: 4em;
                `;
        }
    }}
`;