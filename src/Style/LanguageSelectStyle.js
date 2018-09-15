import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

import {
  DropdownItemWrapper, DropdownContainer, DropdownLabel, DropdownLabelWrapper,
} from './DropdownStyle';

export const ImageContainer = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    margin-right: 1em;
`;

export const Image = styled.img`
    object-fit: cover;
    border-radius: inherit;
    width: inherit;
    height: inherit;
    border: .15em solid white;
`;

export const LanguageItemWrapper = styled(DropdownItemWrapper)`
    width: calc(100% - 1.4em - 1.4em);
    min-width: 280px;
    border: solid 1px #eeeeee;
    padding: 0px;
    left: ${({ center }) => center ? '50%' : null};
    transform: ${({ center }) => center ? 'translateX(-50%)' : null};
`;

export const LanguageContainer = styled(DropdownContainer)`
    position: relative;
    ${DropdownLabelWrapper} {
    background: ${({ open }) => open ? `${SecondaryColor.blue}` : 'rgba(0,0,0,0)'};
    transition: all .3s;

    &:hover {
      background: ${({ hoverColor }) => hoverColor || SecondaryColor.blue};
    }
  }
`;

export const LanguageLabel = styled(DropdownLabel)`
    margin-right: 1em;
    color: ${({ color }) => color};
    text-transform: uppercase;
`;

export const LanguageLabelWrapper = styled(DropdownLabelWrapper)`
    background-color: #027EB7;
`;

export const LanguageItem = styled.div`
    cursor: pointer;
    font-size: 16px;
    color: ${SecondaryColor.lightblack};
    padding: 0.9em 1.3em 0.6em;
    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;
