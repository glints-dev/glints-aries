import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

export const LabelWrapper = styled.label`
  display: ${props => LabelStyleHandler(props).display};
  color: ${props => LabelStyleHandler(props).color};
  font-size: ${props => LabelStyleHandler(props).fontSize};
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
    case 'grey':
      styles.color = SecondaryColor.lightgrey;
      break;
    case 'white':
      styles.color = SecondaryColor.white;
      break;
    default:
      styles.color = SecondaryColor.black;
      break;
  }

  switch(props.size) {
    case 'xlarge':
      styles.fontSize = '2.5em';
      break;
    case 'large':
      styles.fontSize = '2em';
      break;
    case 'medium':
      styles.fontSize = '1.35em';
      break;
    case 'small':
      styles.fontSize = '.75em';
      break;
    default:
      styles.fontSize = '1em';
  }

  switch(props.block) {
    case true:
      styles.display = 'block';
      break;
    default:
      styles.display = 'inline-block';
  }

  return styles;
}

