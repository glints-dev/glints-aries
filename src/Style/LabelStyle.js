import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

export const LabelWrapper = styled.label`
  color: ${props => LabelStyleHandler(props).color};
`;

const LabelStyleHandler = (props: HandlerProps) => {
  const styles: Object = {};
  /* controller styles by props goes here */
  switch (props.theme) {
    case 'red':
      styles.color = PrimaryColor.glintsred;
      break;
    case 'yellow':
      styles.color = SecondaryColor.buttercup;
      break;
    case 'blue':
      styles.color = PrimaryColor.glintsblue;
      break;
    default:
      styles.color = SecondaryColor.black;
      break;
  }

  return styles;
}

