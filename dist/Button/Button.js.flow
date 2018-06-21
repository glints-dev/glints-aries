/* @flow */

import React, { Fragment } from 'react';
import CtaButton from './CtaButton';
import JobCardButton from './JobCardButton';
import SecondaryButton from './SecondaryButton';
import DefaultButton from './DefaultButton';

type Props = {
	variant?: string
}

const Button = (props: Props) => {
	const { variant } = props;

	return (
		<Fragment>
			{variant === 'default' &&
				<DefaultButton onClick={props.onClick}>{props.children}</DefaultButton>
			}

			{variant === 'cta' &&
				<CtaButton onClick={props.onClick}>{props.children}</CtaButton>
			}

			{variant === 'job' && 
				<JobCardButton onClick={props.onClick}>{props.children}</JobCardButton>
			}

			{variant === "secondary" && 
				<SecondaryButton onClick={props.onClick}>{props.children}</SecondaryButton>
			}

			{variant === "nostyle" && 
				<button>no style button</button>
			}
		</Fragment>
	);
}

export default Button;