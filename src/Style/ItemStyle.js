import styled from 'styled-components';
import { PrimaryColor } from './Colors';

export const ItemWrapper = styled.div`
  display: flex;
  padding: ${props => props.paddingSize};
`;

export const ItemImgWrapper = styled.div`
  padding: .2em;
  border: 1px solid #C6C6C6;

  img {
    object-fit: contain;
  }
`;

export const ItemContent = styled.div`
  padding-left: 1.2em;

  a {
    color: ${PrimaryColor.glintsblue};
    text-decoration: none;

    &:hover {
      text-decoration: none;
      opacity: .75;
    }
  }
`;
