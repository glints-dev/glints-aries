import React from 'react';
import { CTAContainer, CTABtn } from './../Style/ButtonStyle';

const CTAButton = (props) => (
	<CTAContainer>
		<CTABtn onClick={props.onClick}>{props.children}</CTABtn>
	</CTAContainer>
);

export default CTAButton;