/* @flow */

import React, { Fragment } from 'react';
import styled, {css} from 'styled-components';
import CtaButton from './CtaButton';
import JobCardButton from './JobCardButton';
import SecondaryButton from './SecondaryButton';

type ButtonVariant = 'default' | 'cta';
type ButtonType = 'primary' | 'secondary' | 'info'

type Props = {
	disabled: boolean,
	variant?: ButtonVariant,
	type?: ButtonType,
}

type HandlerProps = {
	disabled: boolean,
	variant?: ButtonVariant,
	type?: ButtonType
};

const buttonStyleHandler = (props: HandlerProps) => {
  const styles: Object = {};

  styles.width = props.block || props.position ? '100%' : 'auto';
  styles.borderRadius = props.round ? '8rem' : '0rem';

  switch (props.variant) {
    case 'cta':
      styles.border = 'solid 0.1rem rgba(0, 0, 0, 0.24)';
      styles.borderBottomColor = 'rgba(0, 0, 0, 0.32)';
      styles.backgroundColor = '#3d70b2';
      styles.mouseEventBackgroundColor = '#30588c';
      break;
    default:
      styles.border = 'solid 0.1rem rgba(0, 0, 0, 0.24)';
      styles.borderBottomColor = 'rgba(0, 0, 0, 0.32)';
      styles.backgroundColor = '#fff';
      styles.mouseEventBackgroundColor = '#d2d2d2';
	}
	
	switch (props.type) {
		case 'primary':
			styles.backgroundColor = 'red';
			break;
		default:
			styles.backgroundColor = '#333';
	}

  styles.cursor = props.disabled ? 'not-allowed' : 'pointer';
  styles.opacity = props.disabled ? '0.72' : '1';
  styles.mouseEventBackgroundColor = props.disabled
    ? styles.backgroundColor
		: styles.mouseEventBackgroundColor;
		
	console.log(styles);

  return styles;
};

const ButtonWrapper = styled.button`
	appearance: none;
	background-color: ${props => buttonStyleHandler(props).backgroundColor};
`

const Button = (props: Props) => {
	const {
		variant,
		type,
		...defaultButtonProps
	} = props;

	return (
		<ButtonWrapper
			variant={variant}
			type={type}
			{...defaultButtonProps}
		>
			{props.children}
		</ButtonWrapper>
	);
}

export default Button;