/* @flow */

import React from 'react';
import CtaButton from './CtaButton';
import JobCardButton from './JobCardButton';
import SecondaryButton from './SecondaryButton';

type Props = {
	variant?: string
}

const Button = (props: Props) => {
	const { variant } = props;

	return (
		<div>
			{variant === 'cta' &&
				<CtaButton onClick={props.onClick}>Hello world</CtaButton>
			}

			{variant === 'job' && 
				<JobCardButton onClick={props.onClick}>Hello World</JobCardButton>
			}

			{variant === "secondary" && 
				<SecondaryButton onClick={props.onClick}>Secondary</SecondaryButton>
			}

			{variant === "nostyle" && 
				<button>no style button</button>
			}
		</div>
	);
}

export default Button;