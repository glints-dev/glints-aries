import styled from 'styled-components';
import { Size } from '../Utils/StyleConfig';

import CrossPattern from '../../assets/image/cross-pattern.svg';
import Edit from '../../assets/icons/edit-white.svg';

export const ProfilePictureWrapper = styled.div`
    position: relative;
    z-index: 1;
    cursor: pointer;

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

    ${props => {
        if(props.editable) {
            return`
                &:hover:before {
                    content: '';
                    position: absolute;
                    background-image: url(${Edit});
                    background-color: rgba(0, 0, 0, .5);
                    background-repeat: no-repeat;
                    background-size: auto;
                    background-position: center;
                    height: 100%;
                    width: 100%;
                    border-radius: 50%;
                }
            `;
        }
    }}
    
    &:after {
        content: '';
        position: absolute;
        z-index: -1;
        background: url(${CrossPattern});
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

export const ProfilePictureImage = styled.img`
    object-fit: cover;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    z-index: 1;
`;