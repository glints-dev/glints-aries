import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

export const LabelWrapper = styled.p`
  color: ${props => LabelStyleHandler(props).color};
`;

const LabelStyleHandler = (props: HandlerProps) => {
  const styles: Object = {};
  /* controller styles by props goes here */
  switch (props.variant) {
    case 'primary':
      styles.color = PrimaryColor.glintsblue;
      break;
    case 'secondary':
      styles.color = SecondaryColor.grey;
      break;
    case 'danger':
      styles.color = PrimaryColor.glintsred;
      break;
    case 'warning':
      styles.color = SecondaryColor.buttercup;
      break;
    default:
      styles.color = SecondaryColor.black;
      break
  }

  return styles;
}

