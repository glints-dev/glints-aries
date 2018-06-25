/* @flow */
import React from 'react';
import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './../Style/Colors'; 

const Label = (props: Props) => {
  const {
    children,
    variant,
    ...defaultLabelProps
  } = props;

  return (
    <LabelWrapper
      variant={variant}
      {...defaultLabelProps}
    >{children}</LabelWrapper>
  );
}

const LabelWrapper = styled.label`
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

// flow type checking goes here
type LabelVariant = 'primary' | 'secondary' | 'warning' | 'danger';

type Props = {
  variant: LabelVariant,
};

type HandlerProps = {
  variant?: LabelVariant,
};

export default Label;
