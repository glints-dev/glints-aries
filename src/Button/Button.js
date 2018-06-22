/* @flow */

import React, { Fragment } from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import GhostButton from './GhostButton';
import DefaultButton from './DefaultButton';

import { Variant, Theme } from '../Utils/StyleConfig';

type Props = {
	variant?: string
}

const Button = (props: Props) => {
	const { variant, theme } = props;
	return (
		<Fragment>
			{variant === `${Variant.DEFAULT}`
				? <DefaultButton onClick={props.onClick}>{props.children}</DefaultButton>
				: variant === `${Variant.PRIMARY}`
				? <PrimaryButton onClick={props.onClick}>{props.children}</PrimaryButton>
				: variant === `${Variant.SECONDARY}`
				? <SecondaryButton onClick={props.onClick}>{props.children}</SecondaryButton>
				: variant === `${Variant.GHOST}`
				? <GhostButton theme={theme} onClick={props.onClick}>{props.children}</GhostButton>
				: null
			}
		</Fragment>
	);
}

export default Button;
