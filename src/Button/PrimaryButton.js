import React from 'react';
import { PrimaryContainer, PrimaryBtn } from './../Style/ButtonStyle';

const PrimaryButton = (props) => (
	<PrimaryContainer>
		<PrimaryBtn onClick={props.onClick}>{props.children}</PrimaryBtn>
	</PrimaryContainer>
);

export default PrimaryButton;