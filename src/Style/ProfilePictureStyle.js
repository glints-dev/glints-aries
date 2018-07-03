import styled from 'styled-components';
import { Size } from '../Utils/StyleConfig';
import crossPattern from '../../assets/image/cross-pattern.svg';

export const ProfilePictureImage = styled.img`
    object-fit: cover;
    border-radius: 50%;
    z-index: 1;
`;

export const ProfilePictureWrapper = styled.div`
    position: relative;
    z-index: 1;

    ${ProfilePictureImage} {
        ${props => {
            switch(props.size) {
                case `${Size.SMALL}`:
                    return`
                        width: 4em;
                        height: 4em;
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
                        width: 5em;
                        height: 5em;
                    `;
                }
        }}
    }

    &:after {
        content: '';
        position: absolute;
        z-index: -1;
        background: url(${crossPattern});
        height: 100%;
        width: 100%;
        border-radius: 50%;

        ${props => {
            switch(props.size) {
                case `${Size.SMALL}`:
                    return`
                        top: 4px;
                        left: 4px;
                    `;
                case `${Size.MEDIUM}`:
                    return`
                        top: 5px;
                        left: 5px;
                    `;
                case `${Size.LARGE}`:
                    return`
                        top: 6px;
                        left: 6px;
                    `;
                default:
                    return`
                        top: 4px;
                        left: 4px;
                    `;
                }
        }}
    }
`;