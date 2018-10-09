/* @flow */

import React, { Component } from 'react';

import { CarouselContainer, CarouselContent } from '../../Style/Display/CarouselStyle';

class Carousel extends Component {
	render() {
		return(
			<CarouselContainer>
				<CarouselContent>Content 1</CarouselContent>
				<CarouselContent className="inactive">Content 2</CarouselContent>
				<CarouselContent className="inactive">Content 3</CarouselContent>
			</CarouselContainer>
		);
	}
}

export default Carousel;
