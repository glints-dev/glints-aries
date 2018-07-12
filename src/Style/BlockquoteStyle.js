import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Style/Colors';
import { device } from '../Utils/StyleConfig';
import RedQuote from '../../assets/icons/red-quote.svg';
import BlueQuote from '../../assets/icons/blue-quote.svg';

export const StyledTestimony = styled.p`
	font-weight: 100;
    font-size: 1.2rem;
	margin-bottom: .5em;
`;

export const StyledAuthor = styled.p`
	margin: 0;
	font-weight: 500;
	opacity: .75;
	
	&:before {
		position: relative;
		content: '';
		display: inline-flex;
		width: 2em;
		height: 1px;
		bottom: .2em;
		margin-right: 1em;
	}
`;

export const StyledOrigin = styled.span`
	font-size: 1rem;
	font-weight: 100;
	opacity: .75;
`;

export const ProfileWrapper = styled.div`
	position: absolute;
    top: 50%;
    transform: translate(-25%, -50%);


	@media ${device.mobileL} {
		position: relative;
		display: flex;
		justify-content: center;
		transform: translateY(-75%);
		top: 0;
	}
`;

export const BlockquoteContainer = styled.div`
    position: relative;
    background: ${SecondaryColor.white};
    color: ${SecondaryColor.black};
	transition: all .2s;

	@media ${device.mobileL} {
		flex-direction: column;
		text-align: center;
	}

	&:hover {
		background: ${PrimaryColor.glintsblue};
    	color: ${SecondaryColor.white};
	}

	&:hover:before {
		background: url(${RedQuote});
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}

	&:before {
		content: '';
		position: absolute;
		top: -1.5em;
		left: 8em;
		background: url(${BlueQuote});
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		height: 3em;
		width: 3em;
		
		@media ${device.mobileL} {
			display: inline-flex;
			align-self: center;
			position: relative;
			left: auto;
			top: 8em;
		}
	}
	
    ${StyledAuthor} {
		&:before {
			background: ${props => props.inverted ? `${SecondaryColor.white}` : `${SecondaryColor.lightblack}`};
		}
	}
`;

export const Paragraph = styled.div`
    padding: 2em 2em 2em 8em;
	line-height: 1.8;

	@media ${device.mobileL} {
		padding: 2.5em 2em 2.5em 2em;
	}
`;
