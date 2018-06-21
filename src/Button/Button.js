/* @flow */

import React, { Fragment } from 'react';
import styled, {css} from 'styled-components';
import { SecondaryColor, PrimaryColor } from './../Style/Colors';
import { Variant, Theme } from '../Utils/StyleConfig';

const buttonStyleHandler = (props: HandlerProps) => {
  const styles: Object = {};

  styles.width = props.block || props.position ? '100%' : 'auto';
  styles.borderRadius = props.round ? '8rem' : '0rem';

  switch (props.variant) {
    case Variant.GHOST:
			styles.mouseEventBackgroundColor = '#30588c';
			styles.border = '2px solid #000';
      break;
    default:
      styles.backgroundColor = '#fff';
      styles.mouseEventBackgroundColor = '#d2d2d2';
	}

	switch (props.theme) {
		case Theme.RED: 
			styles.backgroundColor = PrimaryColor.glintsred;
			styles.color = SecondaryColor.white;
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
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	border: ${props => props.variant === 'ghost' ? `${buttonStyleHandler(props).border}` : `none` };
	text-transform: uppercase;
	outline: none;
	cursor: pointer;
	font-weight: bold;
	font-size: 14px;
	padding: .8em .6em;
	min-width: 8.5em;
	appearance: none;
	color : ${props => buttonStyleHandler(props).color};
	background-color: ${props => buttonStyleHandler(props).backgroundColor};

	&:hover {
    background: ${SecondaryColor.whitesmoke};
    transition: all .5s;
  }

  &:active {
    background: ${SecondaryColor.black};
    color: ${SecondaryColor.white};
    transition: all .5s;
  }
`

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

type ButtonVariant = 'default' | 'cta';
type ButtonType = 'primary' | 'secondary';

type Props = {
	disabled: boolean,
	variant?: ButtonVariant,
	theme?: ButtonType,
}

type HandlerProps = {
	disabled: boolean,
	variant?: ButtonVariant,
	theme?: ButtonType
};

export default Button;