import { injectGlobal } from 'styled-components';

// Fonts
import PoppinsRegular from '../../assets/fonts/Poppins-Regular.ttf';
import PoppinsBold from '../../assets/fonts/Poppins-Bold.ttf';
import PoppinsLight from '../../assets/fonts/Poppins-Light.ttf';
import PoppinsSemiBold from '../../assets/fonts/Poppins-SemiBold.ttf';
import PoppinsBlack from '../../assets/fonts/Poppins-Black.ttf';

injectGlobal`
	@font-face {
		font-family: 'Poppins';
		src: url(${PoppinsRegular});
		font-weight: normal;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	@font-face {
		font-family: 'Poppins';
		src: url(${PoppinsBold});
		font-weight: bold;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	@font-face {
		font-family: 'Poppins';
		src: url(${PoppinsLight});
		font-weight: 300;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	@font-face {
		font-family: 'Poppins';
		src: url(${PoppinsSemiBold});
		font-weight: 600;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	@font-face {
		font-family: 'Poppins';
		src: url(${PoppinsBlack});
		font-weight: 900;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	body {
		font-family: 'Poppins';
		font-size: 1.4rem;
	}

	h1, h2, h3,
	h4, h5, h6 {
		margin: 0;
	}

	h1 {
		font-size: 2.6rem;
	}

	h2 {
		font-size: 2.2rem;
	}

	h3 {
		font-size: 2rem;
	}

	h4 {
		font-size: 1.8rem;
	}

	h5 {
		font-size: 1.6rem;
	}

	h6 {
		font-size: 1.4rem;
	}

	a {
		text-decoration: none;
	}
`;