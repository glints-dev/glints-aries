import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Style/Colors';
import { Theme, Size } from '../Utils/StyleConfig';

export const DividerWrapper = styled.div`
    display: flex;
    background: ${props => props.theme === `${Theme.RED}` 
        ? `${PrimaryColor.glintsred}` 
        : props.theme === `${Theme.BLUE}`
        ? `${PrimaryColor.glintsblue}` 
        : props.theme === `${Theme.YELLOW}`
        ? `${PrimaryColor.glintsyellow}`
        : `${SecondaryColor.black}`};
    width: ${props => props.size === `${Size.LARGE}`
        ? '100%'
        : props.size === `${Size.MEDIUM}`
        ? '50%'
        : props.size === `${Size.SMALL}`
        ? '2em' 
        : null };
    height: 4px;
    margin: .6em 0;
`;