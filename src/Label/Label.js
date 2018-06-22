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

const LabelWrapper = styled.p`
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

// flow type checking goes here
type LabelVariant = 'primary' | 'secondary' | 'warning' | 'danger';

type Props = {
  variant: LabelVariant,
};

type HandlerProps = {
  variant?: LabelVariant,
};

export default Label;
