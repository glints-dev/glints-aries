/* @flow */
import React, { Component } from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

import { SliderContainer, SliderWrapperStyle } from '../Style/SliderStyle';

class Slider extends Component <Props, State> {
  state = {
    translateValue: 0,
    index: 1,
  };

  previousSlide = () => {
    const { index, translateValue } = this.state;
    if (index !== 1) {
      this.setState({
        index: index - 1,
        translateValue: translateValue + window.innerWidth,
      });
    }
  }

  nextSlide = () => {
    const { index, translateValue } = this.state;
    const { children } = this.props;
    if (index !== children.length) {
      this.setState({
        index: index + 1,
        translateValue: translateValue - window.innerWidth,
      });
    }
  }

  render() {
    const { translateValue, index } = this.state;
    const { children, className } = this.props;
    return (
      <SliderContainer className={className}>
        <SliderWrapperStyle
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          { children }
        </SliderWrapperStyle>
        <LeftArrow previousSlide={this.previousSlide} index={index} />
        <RightArrow nextSlide={this.nextSlide} index={index} limit={children.length} />
      </SliderContainer>
    );
  }
}

type Props = {
  children: React$Node,
  className: string,
};

type State = {
  translateValue: number,
  index: number,
};

export default Slider;
