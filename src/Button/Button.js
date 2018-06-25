/* @flow */

import React, { Fragment } from 'react';
import DefaultButton from './DefaultButton';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import GhostButton from './GhostButton';
import LinkButton from './LinkButton';

import { Variant } from '../Utils/StyleConfig';

type Props = {
	variant?: string,
	theme?: string,
}

const Button = (props: Props) => {
	const { variant, theme } = props;
	return (
		<Fragment>
			{variant === `${Variant.DEFAULT}`
				? <DefaultButton onClick={props.onClick}>{props.children}</DefaultButton>
				: variant === `${Variant.PRIMARY}`
				? <PrimaryButton theme={theme} onClick={props.onClick}>{props.children}</PrimaryButton>
				: variant === `${Variant.SECONDARY}`
				? <SecondaryButton onClick={props.onClick}>{props.children}</SecondaryButton>
				: variant === `${Variant.GHOST}`
				? <GhostButton theme={theme} onClick={props.onClick}>{props.children}</GhostButton>
				: variant === `${Variant.LINK}`
				? <LinkButton theme={theme} onClick={props.onClick}>{props.children}</LinkButton>
				: null
			}
		</Fragment>
	);
}

export default Button;
