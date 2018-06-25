import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

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
  background-color: ${props => BannerStyleHandler(props).backgroundColor};
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: 600;
  padding: .2em 1em;
`;

const BannerStyleHandler = (props: HandlerProps) => {
  const styles: Object = {};
  /* controller styles by props goes here */
  switch (props.variant) {
    case 'primary':
      styles.backgroundColor = PrimaryColor.glintsblue;
      break;
    case 'secondary':
      styles.backgroundColor = SecondaryColor.grey;
      break;
    case 'danger':
      styles.backgroundColor = PrimaryColor.glintsred;
      break;
    case 'warning':
      styles.backgroundColor = SecondaryColor.buttercup;
      break;
    default:
      styles.backgroundColor = SecondaryColor.black;
      break
  }

  return styles;
}