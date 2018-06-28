import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';
import { Theme } from '../Utils/StyleConfig';

/*
 * Wrapper
 */
export const BannerWrapper = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 12em;
  background-image: url(${props => props.imgUrl}); 
`;

export const BannerLabel = styled.label`
  position: absolute;
  bottom: 0;
  left: 1.4em;
  text-transform: uppercase;
  font-weight: 600;
  padding: .2em 1em;
  color: ${SecondaryColor.white};
  letter-spacing: 1px;

  ${props => {
    switch (props.theme) {
      case `${Theme.BLUE}`:
        return`
          background-color: ${PrimaryColor.glintsblue};
        `;
      case `${Theme.RED}`:
        return`
          background-color: ${PrimaryColor.glintsred};
        `;
      case `${Theme.YELLOW}`:
        return`
          background-color: ${PrimaryColor.glintsyellow};
          color: ${SecondaryColor.black};
        `;
      default:
        return`
          background-color: ${SecondaryColor.black};
        `;
    }
  }};
`;