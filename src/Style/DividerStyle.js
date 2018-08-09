import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';
import { Theme, Size, Thickness } from '../Utils/StyleConfig';

export const DividerWrapper = styled.div`
    display: flex;
    background: ${props => props.theme === `${Theme.RED}`
    ? `${PrimaryColor.glintsred}`
    : props.theme === `${Theme.BLUE}`
      ? `${PrimaryColor.glintsblue}`
      : props.theme === `${Theme.YELLOW}`
        ? `${PrimaryColor.glintsyellow}`
        : props.theme === `${Theme.WHITE}`
          ? `${SecondaryColor.white}`
          : props.theme === `${Theme.GREY}`
            ? `${SecondaryColor.lightgrey}`
            : `${SecondaryColor.black}`};

    width: ${props => props.size === `${Size.LARGE}`
    ? '100%'
    : props.size === `${Size.MEDIUM}`
      ? '50%'
      : props.size === `${Size.SMALL}`
        ? '2em'
        : null};
    height: ${props => props.thickness === `${Thickness.THICK}`
    ? '4px'
    : props.thickness === `${Thickness.NORMAL}`
      ? '3px'
      : props.thickness === `${Thickness.THIN}`
        ? '1px'
        : '2px'};
    margin: .6em 0;
`;
